import Image from "next/image";
import React from "react";

export default function PlacesWeOperate() {
  return (
    <div className="min-h-screen p-5 px-10">
      <div className="flex flex-row items-center gap-5">
        <div className="min-h-16 h-full w-1 bg-gradient-to-t from-[#0D50A7] to-[#02C5FD]" />
        <h1 className="lg:text-7xl text-5xl font-extrabold">
          Places we operate
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="relative w-auto h-64 md:h-72 lg:h-96  overflow-hidden"
          >
            <Image
              src="/assets/service1.jpg"
              alt={`service ${index}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
