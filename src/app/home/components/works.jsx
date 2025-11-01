import React from "react";

export default function Works() {
  const images = [
    "/assets/wk1.png",
    "/assets/wk2.png",
    "/assets/wk3.png",
    "/assets/wk4.png",
    "/assets/wk5.png",
    "/assets/wk6.png",
  ];

  return (
    <div className="p-7 w-full flex flex-col gap-10">
      <div className="works-upper flex flex-col gap-7 items-start justify-center w-full h-auto md:w-1/2">
        <div className="flex flex-row items-center gap-2">
          <div className="h-20 w-1 bg-gradient-to-t from-[#0D50A7] to-[#02C5FD]" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Works
          </h2>
        </div>
        <p className="text-sm md:text-base lg:text-lg w-full md:w-3/4 lg:w-1/2 text-gray-600 italic">
          Spectra Infratel provides end-to-end, Turnkey Telecommunications
          Infrastructure services, which means they handle the entire process of
          building and maintaining mobile and fiber optic networks for carriers
          and large enterprises.
        </p>
      </div>
      <div className="works-container w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {images.map((src, index) => (
          <div
            key={index}
            className="image-wrapper w-full h-[300px] sm:h-[400px] lg:h-[550px]"
          >
            <img
              src={src}
              alt={`Work ${index + 1}`}
              className="w-full h-full object-cover [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] border-2 shadow-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
