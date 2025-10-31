import Image from "next/image";
import React from "react";

const reasons = [
  {
    title: "End-to-End Project Expertise",
    description:[
      "From concept and design to installation, commissioning, and maintenance ",
      "— we manage every stage with precision and accountability. You get one trusted partner for your entire project lifecycle."
    ],
  },
  {
    title: "Proven Track Record",
    description:
      "With successful executions across challenging sites, Spectra Infratel has built a strong reputation for reliability, innovation, and long-term client satisfaction in both telecom and EV infrastructure sectors."
  },
  {
    title: "Skilled & Dedicated Team",
    description:
      "Our team includes qualified engineers, project managers, and field professionals with years of on-site experience. Their focus on safety, efficiency, and compliance ensures seamless operations at every level.",
  },
  {
    title: "Quality & Compliance First",
    description:
      "We adhere to strict industry standards and safety protocols, ensuring all our installations meet the highest benchmarks in performance, durability, and sustainability",
  },
  {
    title: "Sustainable & Future-Ready Solutions",
    description:
      "As India transitions toward cleaner and smarter mobility, Spectra Infratel leads the way with EV charging solutions and infrastructure that support the nation’s green future.",
  },
  {
    title: "Timely Delivery, Every Time",
    description:
      "We understand the importance of deadlines. Our project management systems and on-ground teams ensure that every project is completed on schedule and within budget."
  },
  {
    title: "Trusted by Leading Clients",
    description:
      "Our growing portfolio of telecom and EV charging installations reflects the trust leading organizations place in Spectra Infratel’s quality and commitment."
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
