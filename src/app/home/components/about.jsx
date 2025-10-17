import Image from "next/image";
import React from "react";
import Tag from "./tag";

export default function About() {
    return (
        <>
            <div className="absolute top-100 z-10 lg:top-170 md:top-150 sm:top-90">
                <Tag />
            </div>
            <div className="relative w-full h-[900px] md:h-[650px] lg:h-[850px] text-white bg-[#001020] lg:px-7 md:px-7 sm:px-7 flex flex-col md:flex-row items-end-safe">
                <div className="left-container order-2 lg:order-1 md:order-1 sm:order-2 w-full md:w-full flex md:flex-row sm:flex-row justify-center items-center">
                    <Image
                        src="/assets/ceo1.png"
                        alt="About Us"
                        width={400}
                        height={400}
                    />
                    <Image
                        src="/assets/ceo2.png"
                        alt="About Us"
                        width={400}
                        height={400}
                        className="ms-[-280px] sm:ms-[-280px] md:ms-[-120px] lg:ms-[-280px]"
                    />
                </div>
                <div className="right-container order-1 lg:order-2 md:order-2 sm:order-1 w-full md:w-full lg:w-1/2 my-auto h-full flex justify-center items-end sm:items-end md:items-center lg:items-center px-5 py-10">
                    <p className="italic text-sm sm:text-base text-center">
                        Spectra Infratel is a recently registered Partnership Company, however, the Partners and the team have more than 5 to 17 years of experience in Telecom Infra Projects and Services Field.
                    </p>
                </div>
            </div>
        </>
    )
}