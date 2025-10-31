"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const companies = [
  { name: "Company 1", logo: "/assets/cl1.png" },
  { name: "Company 2", logo: "/assets/cl2.png" },
  { name: "Company 3", logo: "/assets/cl3.png" },
  { name: "Company 4", logo: "/assets/cl4.png" },
  { name: "Company 5", logo: "/assets/cl5.png" },
  { name: "Company 6", logo: "/assets/cl6.png" },
  { name: "Company 7", logo: "/assets/cl7.png" },
  { name: "Company 8", logo: "/assets/cl8.png" },
  { name: "Company 9", logo: "/assets/cl9.png" },
];

export default function Partners() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-auto p-7 flex flex-col items-center justify-center bg-white">
      <h2 className="text-4xl font-semibold mb-4 ">Trusted by 9+ companies</h2>
      <div className="container mx-auto mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="w-24 h-40 mx-auto" />
            ))
          : companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
      </div>
    </div>
  );
}
