import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#001020] text-white flex flex-col items-center px-4 pt-16 pb-10">
      <div className="w-full max-w-3xl flex flex-col items-center gap-5 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center font-semibold">
          Your space for
          <br />
          unlimited growth
        </h1>
        <p className="text-center text-sm sm:text-base md:text-lg max-w-xl">
          Your Next Challenge in Telecom: Opportunities Across <br /> Active,
          Passive, and Fiber Optic Infrastructure.
        </p>
      </div>

      <div className=" w-full py-8 flex flex-col sm:flex-row justify-around items-center gap-8 ">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="w-60 sm:w-48 lg:w-80 h-80 lg:h-96 border border-[#0D50A7] overflow-hidden "
          >
            <Image
              src={`/assets/career/banner${num}.jpg`}
              alt={`Profile ${num}`}
              width={450}
              height={650}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
