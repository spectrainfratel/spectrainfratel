import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
    return (
        <div className="relative w-full h-[400px] sm:h-[400px] md:h-[700px] lg:h-[700px] overflow-hidden bg-[#001020] text-white bg-cover bg-center flex justify-center items-center px-7 pt-20 sm:pt-40 pb-40">
            <div className="left-banner w-full flex flex-col gap-10">
                <h1 className="w-full lg:w-1/2 md:w-full sm:w-full text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-medium text-white">
                    Bridging Every Gap With Future-Ready Infra
                </h1>
                <p className="w-full lg:w-1/2 md:w-full sm:w-full text-sm sm:text-base md:text-xl">
                    We engineer the next generation of physical infrastructure—from fiber optics to 5G towers—to deliver the world's most reliable and advanced connectivity.
                </p>
                {/* this is the button */}
                <Link href="/contact" className="w-fit" legacyBehavior>
                    <div className="border border-white rounded-3xl flex w-auto gap-3 items-center hover:bg-white hover:text-[#001020] transition-colors cursor-pointer">
                        <span className="px-5 py-3">Find out more</span>
                        <div className="icon-div bg-white px-5 py-3 rounded-r-3xl">
                            <ChevronRight color="black" />
                        </div>
                    </div>
                </Link>
                {/* the button ends here */}
            </div>
            <div className="right-banner hidden absolute w-1/2 h-[1200px] bg-[#D7E9C9] right-[-100px] top-0 -skew-x-20 sm:hidden md:hidden lg:block">
            </div>
            <div className="absolute hidden sm:hidden md:hidden lg:block right-60 bottom-[-80px] h-auto lg:h-[200px] lg:top-[100px] lg:right-[200px]">
                <Image src="/assets/tower.png" alt="Tower Image" width={700} height={600} />
            </div>
            <div className="absolute hidden sm:hidden md:hidden lg:block right-0 bottom-[-200px] h-auto lg:h-[200px] lg:top-[0px] lg:right-[-100px]">
                <Image src="/assets/human.png" alt="Tower Image" width={700} height={600} />
            </div>
        </div>
    );
}