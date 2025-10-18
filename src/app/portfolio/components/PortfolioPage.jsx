import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import Works from "./Works";

export default function PortfolioPage() {
  return (
    <div>
      <CommonBanner
        title="The Foundation of Easy Network"
        description="From site acquisition and tower build to active commissioning, we handle the entire lifecycle so you can focus on service. Building on rock-solid passive infrastructure and reliable power systems that guarantee 24/7 connectivity."
        buttonText="Contact Us"
        buttonLink="/contact"
        imgsrc="/assets/portfolioPage/portfoliobanner.png"
      />
      <Works />
    </div>
  );
}
