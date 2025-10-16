"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
    { question: "What services does Spectra Infratel offer?", answer: "We offer end-to-end solutions for network deployment, including site acquisition, legal clearances, and BTS commissioning." },
    { question: "Why choose Spectra Infratel?", answer: "We simplify complex projects by handling every stage ourselves, ensuring on-time and on-budget delivery." },
    { question: "How can I contact Spectra Infratel?", answer: "You can reach us at support@spectrainfratel.com or call us at +91 99999 99999." },
    { question: "Where is Spectra Infratel located?", answer: "We are located in India and serve clients globally." },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className='p-7 w-full h-auto lg:h-[80vh] flex flex-col md:flex-row gap-10'>
            <div className="left-side flex flex-col gap-7 items-start justify-center w-full md:w-1/2">
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Any Questions? Let's Talk</h2>
                <p className='text-base md:text-lg lg:text-xl'>Don't let the complexity of modern network deployment slow you down.</p>
            </div>
            <div className="right-side flex justify-center items-center w-full h-full md:w-1/2">
                <div className="faq-container flex flex-col gap-6">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item border-b pb-4">
                            <div
                                className="faq-question flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h4 className="text-lg md:text-xl lg:text-xl font-medium">{faq.question}</h4>
                                {activeIndex === index ? (
                                    <ChevronUp className="w-6 h-6" />
                                ) : (
                                    <ChevronDown className="w-6 h-6" />
                                )}
                            </div>
                            {activeIndex === index && (
                                <p className="faq-answer mt-2 text-sm md:text-base lg:text-lg text-gray-600 italic">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}