import { MapPin } from "lucide-react"; // For location icon
import React from "react";

const positions = [
  {
    title: "Communications and HR Team",
    location: "Ahmedabad, Gujrat",
    description:
      "If you are a person who loves to manage the team and bring out the best in them, then we are more than happy to have you on board.",
  },
  {
    title: "Software Development",
    location: "Bangalore, Karnataka",
    description:
      "Join our innovative software team where your coding skills can make a difference in developing cutting-edge applications.",
  },
  {
    title: "Marketing and Sales",
    location: "Pune, Maharashtra",
    description:
      "Are you passionate about driving sales and creating marketing strategies? We want you to help us reach new heights!",
  },
  {
    title: "Customer Support",
    location: "Mumbai, Maharashtra",
    description:
      "If you enjoy solving problems and helping customers, our dynamic support team would love to welcome you!",
  },
];

export default function OurTeam() {
  return (
    <div className=" bg-[#e9f2fb] py-8 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-serif font-semibold my-4 text-black text-center">
        Join our growing team
      </h1>
      <div className="min-w-9/10 max-w-3xl">
        {positions.map((pos, idx) => (
          <div key={idx} className="py-12 border-b border-gray-300 grid grid-cols-3 gap-12">
            <div className="flex flex-col items-center gap-2 mb-1">
              <span className="text-[#0D50A7] font-semibold cursor-pointer hover:underline text-base sm:text-lg">
                Open Positions
              </span>
              <span className="text-gray-600 text-sm flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#1fa67a]" />
                {pos.location}
              </span>
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <div className="font-medium text-black text-base sm:text-lg">
                {pos.title}
              </div>
              <div className="text-gray-700 text-sm sm:text-base">
                {pos.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
