import React from "react";
import { Rocket } from "lucide-react";

export default function Tag() {
    return (
        <div className="w-full h-[480px] flex flex-col lg:flex-row  justify-center items-center font-bold text-lg px-5 lg:px-10 py-5">
            <div className="tag-inner h-[380px] md:h-[200px] lg:h-[350px] flex flex-col lg:flex-row md:flex-row  justify-center items-center bg-accent rounded-4xl w-full lg:w-auto p-5">
                <div className="left-tag w-full lg:w-1/2 h-auto flex items-center ps-8 lg:px-0">
                    <h2 className="text-3xl lg:text-5xl font-medium text-center lg:text-left">
                        We deliver work with precision while being quick about it
                    </h2>
                </div>
                <div className="right-tag w-full lg:w-auto flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 lg:gap-10 mt-5 lg:mt-0">
                    <div className="icon w-auto h-auto">
                        <div className="lucide-boost-icon bg-[linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))] w-[80px] lg:w-[122px] h-[80px] lg:h-[122px] rounded-full flex justify-center items-center shadow-lg">
                            <Rocket size={40} color="white" strokeWidth={1} />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 inside-tag flex flex-col gap-2 lg:gap-5 px-5 lg:px-0">
                        <h4 className="text-lg lg:text-2xl text-center lg:text-left">Going beyond wireless</h4>
                        <p className="text-xs lg:text-sm italic font-normal text-center lg:text-left">
                            While our network grows, we are leading innovations that reimagine how you live.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}