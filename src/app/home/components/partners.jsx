"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const companies = [
  { name: "Company 1", logo: "/assets/client1.png" },
  { name: "Company 2", logo: "/assets/client2.png" },
  { name: "Company 3", logo: "/assets/client3.png" },
  { name: "Company 4", logo: "/assets/client4.png" },
  { name: "Company 5", logo: "/assets/client5.png" },
];

export default function Partners() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate async loading (e.g., fetching from API)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // show skeleton for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-auto p-7 flex flex-col items-center justify-center bg-white">
      <h2 className="text-4xl font-semibold mb-4 ">Trusted by 10+ companies</h2>
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
