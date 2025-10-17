import React from "react";
import { Rocket } from "lucide-react";

export default function Tag() {
    return (
        <div className="w-full h-[280px] flex justify-center items-cente font-bold text-lg px-10">
            <div className="tag-inner flex justify-center items-center bg-accent rounded-4xl ">
                <div className="left-tag w-1/2 h-full flex items-center">
                    <h2 className="text-6xl font-medium">We deliver work with precision while being quick about it</h2>
                </div>
                <div className="right-tag w-auto flex justify-center items-center">
                    <div className="icon w-full h-full">
                        <div className="lucide-boost-icon bg-[linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))] w-[122px] h-[122px] rounded-full flex justify-center items-center shadow-lg">
                            <Rocket size={64} color="white" strokeWidth={1} />
                        </div>
                    </div>
                    <div className="inside-tag flex flex-col gap-5">
                        <h4 className="text-2xl">Going beyond wireless</h4>
                        <p className="text-xs italic font-normal">While our network is grows, we are leading innovations that reimagine how you live</p>
                    </div>
                </div>
            </div>
        </div>
    )
}