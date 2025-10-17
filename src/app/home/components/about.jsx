import Image from "next/image";
import React from "react";

export default function About() {
    return (
        <div className="w-full h-full text-white bg-[#001020] lg:px-7 md:px-7 sm:px-7 flex flex-col md:flex-row">
            <div className="left-container w-full md:w-full flex md:flex-row sm:flex-row justify-center items-center">
                <Image
                    src="/assets/ceo1.png"
                    alt="About Us"
                    width={500}
                    height={500}
                />
                <Image
                    src="/assets/ceo2.png"
                    alt="About Us"
                    width={500}
                    height={500}
                    className="ms-[-200px]"
                />
            </div>
            <div className="right-container w-full md:w-full lg:w-1/2 my-auto h-full flex justify-center items-center px-5 py-10">
                <p className="italic text-sm sm:text-base text-center">
                    Spectra Infratel is a recently registered Partnership Company, however, the Partners and the team have more than 5 to 17 years of experience in Telecom Infra Projects and Services Field.
                </p>
            </div>
        </div>
    )
}