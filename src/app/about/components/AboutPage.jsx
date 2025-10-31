"use client";
import React from "react";
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

  return (
    <div className="flex flex-col gap-20">
      <CommonBanner
        title="Your Single Source for Fiber Deployment"
        description={
          <span className="block space-y-4">
            {desc.map((para, index) => (
              <span key={index} className="block text-base leading-relaxed">
                {para}
              </span>
            ))}
          </span>
        }
        buttonText="Contact Us"
        buttonLink="/contact"
        imgsrc="/assets/aboutPage/banner.png"
      />

      <PlacesWeOperate />
      <WhyPeopleChooseUs />
      <ProjectCompleted />
      <Partners />
    </div>
  );
}
