"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TeamOfExperts from "./TeamOfExperts";

const partners = [
  {
    name: "MITIR H KOTAK",
    comment:
      "We happy with Bhargav and his team for the promptness... keep it up",
  },
  {
    name: "Michael Thompson",
    comment:
      "Working with this team has been a transformative experience. Their attention to detail and commitment to quality is unmatched. Every project has been delivered on time and has exceeded our expectations. I wholeheartedly endorse their services to anyone in need of expertise.",
  },
  {
    name: "Ava Patel",
    comment:
      "From start to finish, the professionalism and skill demonstrated by this team were nothing short of impressive. They have a remarkable ability to adapt to challenges and deliver solutions that truly meet our needs. I will definitely be collaborating with them again in the future.",
  },
  {
    name: "Liam Chen",
    comment:
      "The level of service and dedication from this team is extraordinary. They take the time to understand our requirements and ensure that every aspect is covered. Their work has significantly improved our operations, and I am grateful for their contributions.",
  },
  {
    name: "Priay Singhania",
    comment:
      "The team has done an excellent job, in helping us set our fiber station at every place we wanted and with perfection. They are the best in what they do, and there is no doubt they will achieve a lot. I highly recommend anyone to hire them.",
  },
  {
    name: "Michael Thompson",
    comment:
      "Working with this team has been a transformative experience. Their attention to detail and commitment to quality is unmatched. Every project has been delivered on time and has exceeded our expectations. I wholeheartedly endorse their services to anyone in need of expertise.",
  },
  {
    name: "Ava Patel",
    comment:
      "From start to finish, the professionalism and skill demonstrated by this team were nothing short of impressive. They have a remarkable ability to adapt to challenges and deliver solutions that truly meet our needs. I will definitely be collaborating with them again in the future.",
  },
  {
    name: "Liam Chen",
    comment:
      "The level of service and dedication from this team is extraordinary. They take the time to understand our requirements and ensure that every aspect is covered. Their work has significantly improved our operations, and I am grateful for their contributions.",
  },
];

export default function Partners() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const scrollTo = useCallback(
    (index) => {
      api?.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = (emblaApi) => {
      setCurrent(emblaApi.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="bg-[#146CBB]/10 min-h-screen py-12 md:py-20">
      <div className="px-5 md:px-8 lg:px-12">
        <div className="flex flex-row items-center gap-3 md:gap-5 mb-6 md:mb-8">
          <div className="h-12 lg:h-40 md:h-16 w-1 bg-gradient-to-t from-[#0D50A7] to-[#02C5FD]" />
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold max-w-6xl">
            Don't take our word for it! Hear it from our partners
          </h1>
        </div>

        {/* Carousel with vertical orientation */}
        <div className="relative lg:px-16 px-5">
          <Carousel
            setApi={setApi} // Get the API instance
            opts={{
              align: "start",
              loop: true,
            }}
            orientation="horizontal"
            className="w-full"
          >
            {/* Mobile: Buttons on top */}
            <div className="flex md:hidden justify-between gap-4 mb-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
            
            <CarouselContent className="-mt-4">
              {partners.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="pt-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <div className="h-full bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                      <div>
                        <div className="bg-gradient-to-br from-[#0D50A7] to-[#02C5FD] h-12 w-12 rounded-full mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {partner.name.charAt(0)}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                          {partner.comment}
                        </p>
                      </div>
                      <h3 className="font-semibold text-lg text-[#0D50A7]">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Desktop: Buttons on sides */}
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === current ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <TeamOfExperts />
    </div>
  );
}
