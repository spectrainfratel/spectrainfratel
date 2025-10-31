import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Notfound() {
  return (
    <div className="bg-gradient-to-t from-[#0D50A7] to-[#02C5FD] h-screen">
      <div className="flex items-center justify-center h-full gap-10">
        <Image
          src="/assets/not-found/image.png"
          alt="Not Found"
          width={500}
          height={500}
          className="h-96 w-96 object-contain"
        />
        <div className="flex flex-col gap-10">
          <div className="h-72 w-96 border border-gray-50 rounded-2xl relative text-white">
            <div className="w-full h-16 border-b" />
            <X className="absolute top-6 right-6 cursor-pointer text-white h-5 w-5" />
            <div className="flex flex-col items-center justify-center h-3/4">
              <h1 className="text-7xl font-extrabold ">404</h1>
              <h2>Page Not Found</h2>
            </div>
          </div>
          <div className="text-white text-2xl font-extrabold  max-w-96">
            <p className=" ">
              It’s a tough world. Wondering here and there is not a good idea
            </p>
            <h1>
              Let’s go back
              <Link href="/" className="underline ml-2 bg-gradient-to-b from-white to-white bg-[length:0%_2px] bg-[position:0%_100%] bg-no-repeat hover:bg-[length:100%_2px] transition-all">
                Home
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
