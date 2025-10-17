"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQNavigator({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container flex flex-col gap-6 w-full">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item border-b pb-4">
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h4 className="text-lg md:text-xl lg:text-xl font-medium">
              {faq.question}
            </h4>
            {activeIndex === index ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
          {activeIndex === index && (
            <p className="faq-answer mt-2 text-sm md:text-base lg:text-lg text-gray-600 italic w-11/12">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
