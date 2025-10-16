"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Skeleton } from "@/components/ui/skeleton";

export default function CEO() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // Simulate loading for 800ms

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <CEOSkeleton />;
    }

    return (
        <div className='text-black p-7 w-full h-full'>
            <div className="inner">
                <div
                    className="ceo-space  h-full bg-[url('/assets/ceobg.jpg')] bg-cover bg-center flex items-end justify-center"
                >
                    <div className="image-div overflow-hidden w-full flex justify-center items-center bg-[linear-gradient(135deg,_rgba(13,80,167,0.8),_rgba(2,197,253,0.8))] relative">
                        <Image
                            src="/assets/jignesh.png" // Path to your logo image
                            alt="ceo"
                            width={400} // Adjust width as needed
                            height={200} // Adjust height as needed
                            className="object-contain z-2"
                        />
                        <div className="ceo-title-space absolute bottom-0 left-0 w-full text-center text-white bg-opacity-50 py-4 z-3">
                            <h2 className='text-6xl md:text-3xl lg:text-6xl'>Jignesh Patel</h2>
                            <p className='italic'>CEO, Director</p>
                        </div>
                        <div className="ceo-rectangle border-[6px] rounded-lg border-transparent [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] p-4 md:p-6 text-white w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] absolute z-0">
                        </div>
                    </div>
                </div>
                <div className="why-hire-spectra flex flex-col gap-10 text-center bg-[#001020] text-white px-7 py-20">
                    <h4 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Why Hire Spectra Infratel</h4>
                    <p className='text-lg md:text-xs lg:text-lg italic'>
                        We simplify complex projects by handling every stage ourselves—from legal clearances
                        (Site Acquisition and Right of Way) to the final activation of electronics
                        (BTS Commissioning). This single-point-of-contact approach eliminates coordination
                        delays and communication breakdowns common with multiple vendors, ensuring projects
                        are delivered on-time and on-budget.
                    </p>
                </div>
            </div>
        </div>
    )
}

export function CEOSkeleton() {
    return (
        <div className='text-black p-7 w-full h-full'>
            <div className="inner">
                <div className="ceo-space h-full bg-cover bg-center flex items-end justify-center">
                    <div className="image-div overflow-hidden w-full flex justify-center items-center relative">
                        <Skeleton className="w-[400px] h-[200px] md:w-[300px] md:h-[150px] lg:w-[400px] lg:h-[200px] z-2" />
                        {/* <div className="ceo-title-space absolute bottom-0 left-0 w-full text-center py-4 z-3">
                            <Skeleton className="w-1/2 h-8 mx-auto mb-2" />
                            <Skeleton className="w-1/3 h-6 mx-auto" />
                        </div> */}
                        {/* <div className="ceo-rectangle border-[6px] rounded-lg p-4 md:p-6 w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] absolute z-0">
                            <Skeleton className="w-full h-full" />
                        </div> */}
                    </div>
                </div>
                <div className="why-hire-spectra flex flex-col gap-10 text-center px-7 py-20">
                    <Skeleton className="w-3/4 h-8 mx-auto mb-4" />
                    <Skeleton className="w-full h-6 mx-auto" />
                    <Skeleton className="w-5/6 h-6 mx-auto" />
                    <Skeleton className="w-4/5 h-6 mx-auto" />
                </div>
            </div>
        </div>
    );
}