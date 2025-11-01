"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_frtrgpn", // replace with your EmailJS service ID
        "template_xgqp0cf", // replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "n-bn7FTW0xin69Jxz" // replace with your EmailJS public key
      );
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#001020] text-white">
      <div className="md:w-1/2 w-full relative">
        <Image
          src="/assets/contact/spectrall.jpg"
          alt="Contact Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center p-10">
        <div className="max-w-lg w-full">
          <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-8">
            Interested in learning more? Let's talk one on one...
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-none"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-white text-black border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-none"
                required
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
        </div>
      </div>
    </div>
  );
}
