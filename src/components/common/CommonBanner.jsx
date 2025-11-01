import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CommonBanner({
  title = "",
  description = "",
  buttonText = "",
  buttonLink = "",
  imgsrc = "",
}) {
  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[400px] md:min-h-[700px] lg:min-h-[700px] xl:h-[700px] overflow-hidden bg-[#001020] text-white bg-cover bg-center flex justify-center items-center px-7 pt-20 sm:pt-40 pb-40">
      <div className="left-banner w-full flex flex-col gap-10">
        <h1 className="w-full lg:w-1/2 md:w-full sm:w-full text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-medium text-white">
          {title}
        </h1>
        <p className="w-full lg:w-1/2 md:w-full sm:w-full text-sm sm:text-base md:text-xl">
          {description}
        </p>
        {/* this is the button */}
        <Link href={buttonLink} className="w-fit">
          <div className="border border-white rounded-3xl flex w-auto gap-3 items-center hover:bg-white hover:text-[#001020] transition-colors cursor-pointer">
            <span className="px-5 py-3">{buttonText}</span>
            <div className="icon-div bg-white px-5 py-3 rounded-r-3xl">
              <ChevronRight color="black" />
            </div>
          </div>
        </Link>
        {/* the button ends here */}
      </div>
      {/* Revamped Image Container */}
      <div className="absolute  -top-1/4 -right-1/4 hidden md:block  lg:w-[700px] lg:h-[900px] 2xl:w-[1000px] 2xl:h-[1000px]  rotate-[80deg] transition-all duration-500">
        <Image
          src={imgsrc || "/assets/human.png"}
          alt="Tower Image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
