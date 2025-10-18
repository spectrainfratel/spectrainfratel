"use client";
import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#001020] text-white">
      <div className="md:w-1/2 w-full relative">
        <Image
          src="/assets/contact/spectrall.jpg"
          alt="Skyscraper"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="md:w-1/2 w-full flex items-center justify-center p-10">
        <div className="max-w-lg ">
          <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-8">
            Interested in learning more? Let's talk one on one...
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  {" "}
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white text-black placeholder-white border border-gray-500 
               focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-white text-black border border-gray-500  focus:outline-none focus:ring-2 focus:ring-gray-30 "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-white text-black border border-gray-500  focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white text-black border border-gray-500 
               focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-none"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 bg-white border border-gray-500
             focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 border border-gray-400 rounded-md hover:bg-white hover:text-black transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>{" "}
      </div>
    </div>
  );
}
