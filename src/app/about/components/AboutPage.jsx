"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import CommonBanner from "@/components/common/CommonBanner";
import PlacesWeOperate from "./PlacesWeOperate";
import WhyPeopleChooseUs from "./WhyPeopleChooseUs";
import ProjectCompleted from "./ProjectCompleted";
import Partners from "./Partners";

export default function AboutPage() {
  const desc = [
    "At SPECTRA INFRATEL, we are driven by innovation, precision, and sustainability. Based in Ahmedabad, we specialize in infrastructure development, EV charging solutions, and telecommunication projects across India.",
    "With a team of skilled professionals and industry experts, we deliver end-to-end project execution — from design and supply to installation and commissioning — ensuring reliability, efficiency, and safety in every project we undertake.",
    "Our mission is to empower the nation’s transition toward a connected and sustainable future. Whether it’s developing EV charging networks, setting up telecom infrastructure, or executing complex electrical installations, we are committed to delivering solutions that exceed expectations and drive India’s progress.",
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col gap-20">
      {/* Banner Section */}
      <CommonBanner
        title="Your Single Source for Fiber Deployment"
        description="We engineer the next generation of physical infrastructure—from fiber optics to 5G towers—to deliver the world's most reliable and advanced connectivity."
        buttonText="Contact Us"
        buttonLink="/contact"
        imgsrc="/assets/aboutPage/banner.png"
      />

      {/* About Section */}
      <div className="px-6 md:px-16 lg:px-28 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
        {/* Stylish About Us Heading */}
        <div className="flex flex-row items-center gap-3 mb-6">
          <div className="h-10 w-1 bg-gradient-to-b from-[#0D50A7] to-[#02C5FD]" />
          <h5 className="text-4xl md:text-5xl font-extrabold text-[#0D50A7] tracking-wide uppercase">
            About Us
          </h5>
        </div>

        {/* Paragraphs */}
        <p className="mb-4">{desc[0]}</p>

        {!showMore && (
          <div
            onClick={() => setShowMore(true)}
            className="flex items-center gap-2 text-cyan-600 font-semibold cursor-pointer hover:gap-3 transition-all duration-300"
          >
            <span>Read More</span>
            <ChevronRight size={18} />
          </div>
        )}

        {showMore && (
          <>
            <p className="mt-4 mb-4">{desc[1]}</p>
            <p className="mb-4">{desc[2]}</p>
          </>
        )}
      </div>

      {/* Other Sections */}
      <PlacesWeOperate />
      <WhyPeopleChooseUs />
      <ProjectCompleted />
      <Partners />
    </div>
  );
}
