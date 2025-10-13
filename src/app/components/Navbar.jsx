"use client"
import React, { useState } from 'react'
import logo from '@/assets/logoBG.png'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    // state to check if image is loaded
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <div className="w-full h-full bg-gray-800 text-white flex items-center justify-start px-7 py-4 space-x-7">
            <div className="brand-logo">
                {/* Skeleton Loader */}
                {!isLoaded && (
                    <div className="h-10 w-10 mr-2 bg-gray-700 rounded animate-pulse" />
                )}

                {/* Image */}
                <div className="image-div w-20 h-15">
                    <Link href='/'>
                        <Image
                            src={logo}
                            alt="logo"
                            className={`h-full w-full object-contain mr-2 transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"
                                }`}
                            onLoad={() => setIsLoaded(true)}
                        />
                    </Link>
                </div>
            </div>
            <div className="nav-items flex space-x-7">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/portfolio'>Portfolio</Link>
                <Link href='/career'>Career</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;
