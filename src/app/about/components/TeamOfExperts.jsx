import Image from "next/image";
import React from "react";

export default function TeamOfExperts() {
  const partners = [
    {
      name: "Jignesh Patel",
      designation: "CEO",
      img: "/assets/jitesh.jpg",
    },
    {
      name: "Bhargav Patel",
      designation: "Partner",
      img: "/assets/aboutPage/patners/raju.jpg",
    },
    {
      name: "Prayosha Patel",
      designation: "Partner",
      img: "/assets/aboutPage/patners/prayoshi.jpg",
    },
    {
      name: "Raju Mudaliar",
      designation: "Supply and Collection",
      img: "/assets/aboutPage/patners/rajuuu.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="flex flex-row items-center gap-3 md:gap-5 mb-6 md:mb-8">
          <div className="h-12 lg:h-52 md:h-16 w-1 bg-gradient-to-t from-[#0D50A7] to-[#02C5FD]" />
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold max-w-3xl">
            A team of experts to help you out when you need us the most
          </h1>
        </div>
        <div className="flex items-center justify-end gap-5 my-12">
          <p className="max-w-xs text-[#001020]">
            Spectra Infratel provides end-to-end, Turnkey Telecommunications
            Infrastructure services, which means they handle the entire process
            of building and maintaining mobile and fiber optic networks for
            carriers and large enterprises.
          </p>
          <div className="h-12 lg:h-40 md:h-16 w-1 bg-gradient-to-t from-[#0D50A7] to-[#02C5FD]" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative overflow-hidden  shadow-lg group aspect-[3/4]"
            >
              <Image
                src={partner.img}
                alt={partner.name}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <h2 className="text-xl md:text-2xl font-bold">
                  {partner.name}
                </h2>
                <p className="text-sm md:text-base">{partner.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
