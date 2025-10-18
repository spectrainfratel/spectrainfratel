import Image from "next/image";
import React from "react";

const reasons = [
  {
    title: "Guaranteed Uptime",
    description:
      "We specialize in critical power infrastructure, installing SMPS, Battery Banks, and DG (Diesel Generators). T",
  },
  {
    title: "Guaranteed Uptime",
    description:
      "We specialize in critical power infrastructure, installing SMPS, Battery Banks, and DG (Diesel Generators). T",
  },
  {
    title: "Guaranteed Uptime",
    description:
      "We specialize in critical power infrastructure, installing SMPS, Battery Banks, and DG (Diesel Generators). T",
  },
  {
    title: "Guaranteed Uptime",
    description:
      "We specialize in critical power infrastructure, installing SMPS, Battery Banks, and DG (Diesel Generators). T",
  },
];

export default function WhyPeopleChooseUs() {
  return (
    <div className="min-h-screen flex 2xl:flex-row flex-col gap-8 items-center lg:gap-12 px-10">
      <div className="w-full lg:max-w-3xl flex flex-col gap-10">
        <div className="flex flex-row items-center gap-3 md:gap-5 mb-6 md:mb-8">
          <div className="h-12 lg:h-40 md:h-16 w-1 bg-gradient-to-t from-[#0D50A7] to-[#02C5FD]" />
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold max-w-md">
            Why People Choose us?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-lg md:text-xl font-semibold border-b-2 border-[#02C5FD] pb-2">
                {reason.title}
              </h4>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-auto lg:flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-xl lg:max-w-none aspect-square">
          <Image
            src="/assets/aboutPage/workar.png"
            alt="workar"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
