"use client";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-2 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Spectra Infratel
            </h3>
            <h3 className="text-lg font-semibold text-white mb-3">
              Spectra Infratel
            </h3>
            <p className="text-sm text-gray-400">
              Building the future with precision and passion.
            </p>
            <div className="mt-4 mb-2 flex border rounded-md overflow-hidden">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow border-0 focus:ring-0"
              />
              <Button onClick={handleSubscribe}>Subscribe</Button>
            </div>
          </div>
    
          {/* Column 2 */}
          <div>
            <h4 className="text-md font-semibold text-white mb-3">
              Quick Links
            </h4>
            <h4 className="text-md font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (Two side-by-side office sections) */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Left side: Registered + Contact */}
              <div>
                <h4 className="text-md font-semibold text-white mb-3 border-b border-gray-700 pb-1">
                  Registered Office
                </h4>
                <div className="flex items-start gap-2 mb-4 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <p>2, Shreedhar Baug, Nikol, Ahmedabad – 380049</p>
                </div>

                <h4 className="text-md font-semibold text-white mb-3 border-b border-gray-700 pb-1">
                  Contact
                </h4>
                <div className="space-y-1 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <p>spectrainfratel@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <p>info@spectrainfratel.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <p>9054046408</p>
                  </div>
                </div>
              </div>

              {/* Right side: Corporate + Canada */}
              <div>
                <h4 className="text-md font-semibold text-white mb-3 border-b border-gray-700 pb-1">
                  Corporate Office
                </h4>
                <div className="flex items-start gap-2 mb-4 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <p>510, Naroda Business HUB, Ahmedabad – 382350</p>
                </div>

                <h4 className="text-md font-semibold text-white mb-3 border-b border-gray-700 pb-1">
                  Canada Office
                </h4>
                <div className="space-y-1 text-sm text-gray-400">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <p>9122 Prince Charles Blvd, Surrey BC V3V 1R5</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <p>msgtospectra@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <p>+1 (647) 446-6463</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} Spectra Infratel. All rights reserved.</p>
          <p>
            Built with ❤️ by{" "}
            <Link href="https://www.koadai.com" className="hover:text-cyan-400">
              KOADAI
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
  );
}
