import React from "react";

export default function ProjectCompleted() {
  return (
    <div className="p-10">
      <div className="bg-gradient-to-t to-[#02C5FD] from-[#0D50A7] 2xl:h-36 h-auto w-full p-[1px] rounded-[50px]">
        <div className="bg-white h-full w-full flex lg:flex-row flex-col justify-around items-center rounded-[50px] gap-10 p-10 2xl:gap-0 2xl:p-0">
          <div className="flex flex-row gap-5 items-center">
            <h1 className="gradienttext 2xl:text-7xl lg:text-5xl md:text-3xl font-extrabold">
              200+
            </h1>
            <p className="font-extrabold 2xl:text-4xl lg:text-2xl md:text-xl max-w-32">
              Projects Completed
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <h1 className="gradienttext 2xl:text-7xl lg:text-5xl text-4xl font-extrabold">
              150+
            </h1>
            <p className="font-extrabold 2xl:text-4xl lg:text-2xl max-w-32">
              Satisfied Clients
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <h1 className="gradienttext 2xl:text-7xl lg:text-5xl text-4xl font-extrabold">
              300+
            </h1>
            <p className="font-extrabold 2xl:text-4xl lg:text-2xl max-w-32">
              Hours Consulted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
