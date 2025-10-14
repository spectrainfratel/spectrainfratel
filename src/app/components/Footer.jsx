import React from "react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Spectra Infratel</h3>
            <p className="text-sm text-gray-400">
              Building the future with precision and passion.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-md font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link href="/career" className="hover:text-white transition">Career</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-md font-semibold text-white mb-3">Contact</h4>
            <p className="text-sm text-gray-400">support@spectrainfratel.com</p>
            <p className="text-sm text-gray-400">+91 99999 99999</p>
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        <div className="flex justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Spectra Infratel. All rights reserved.</p>
          <p>Built with ❤️ by <Link href='https://www.koadai.com'>KOADAI</Link></p>
        </div>
      </div>
    </footer>
  )
}
