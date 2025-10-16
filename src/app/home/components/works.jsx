"use client"
import React, { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function Works() {
    const [isLoading, setIsLoading] = useState(true);

    const images = [
        '/assets/work1.png',
        '/assets/work2.png',
        '/assets/work3.png',
        '/assets/work4.png',
        '/assets/work5.png',
        '/assets/work6.png',
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // Simulate loading for 800ms

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <WorksSkeleton />;
    }

    return (
        <div className='p-7 w-full flex flex-col gap-10'>
            <div className="works-upper flex flex-col gap-7 items-start justify-center w-full h-auto md:w-1/2 border-l-8 ps-7 [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1]">
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-4'>Works</h2>
                <p className='text-sm md:text-base lg:text-lg w-full md:w-3/4 lg:w-1/2 text-gray-600 italic'>
                    Spectra Infratel provides end-to-end, Turnkey Telecommunications Infrastructure services, which means they handle the entire process of building and maintaining mobile and fiber optic networks for carriers and large enterprises.
                </p>
            </div>
            <div className="works-container w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                {images.map((src, index) => (
                    <div key={index} className="image-wrapper w-full h-[300px] sm:h-[400px] lg:h-[550px]">
                        <img src={src} alt={`Work ${index + 1}`} className="w-full h-full object-cover [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] border-2 shadow-xl" />
                    </div>
                ))}
            </div>
        </div>
    );
}

function WorksSkeleton() {
    return (
        <div className='p-7 w-full flex flex-col gap-10'>
            <div className="works-upper flex flex-col gap-7 items-start justify-center w-full h-auto md:w-1/2 border-l-8 ps-7 [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1]">
                <Skeleton className="w-1/2 h-8 md:h-10 lg:h-12 mb-4" />
                <Skeleton className="w-3/4 h-6 md:h-8 lg:h-10" />
            </div>
            <div className="works-container w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="image-wrapper w-full h-[300px] sm:h-[400px] lg:h-[550px]">
                        <Skeleton className="w-full h-full" />
                    </div>
                ))}
            </div>
        </div>
    );
}