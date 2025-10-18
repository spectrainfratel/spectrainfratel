import CommonBanner from "@/components/common/CommonBanner";
import PlacesWeOperate from "./PlacesWeOperate";
import WhyPeopleChooseUs from "./WhyPeopleChooseUs";
import ProjectCompleted from "./ProjectCompleted";
import Partners from "./Partners";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20">
      <CommonBanner
        title="Your Single Source for Fiber Deployment"
        description="We engineer the next generation of physical infrastructure—from fiber optics to 5G towers—to deliver the world's most reliable and advanced connectivity."
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
