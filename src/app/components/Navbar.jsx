// src/app/components/Navbar.jsx (or wherever your Navbar is)
"use client";

import React from 'react';
import Image from 'next/image';
// Import Radix primitives styled by Shadcn
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu";

// Import the mobile sidebar (Sheet) and the icon (Menu)
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

// Define your navigation links
const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
];

export default function Navbar() {
    // ... JSX goes here
    return (
        <header className="w-full border-b bg-[#001020] shadow-sm text-white">
            <div className=" flex w-full  h-full items-center justify-between px-7">

                {/* LOGO/TITLE (Always visible) */}
                <a href="/" className="text-xl font-bold">
                    {/* load the logo here */}
                    <Image
                        src="/assets/logo.png" // Path to your logo image
                        alt="Logo"
                        width={80} // Adjust width as needed
                        height={40} // Adjust height as needed
                        className="object-contain"
                    />
                </a>

                {/* 1. DESKTOP NAVIGATION (Hidden on mobile) */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.title}>
                                    <NavigationMenuLink href={link.href} className="p-3 hover:underline">
                                        {link.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* 2. MOBILE SIDEBAR (Hidden on desktop) */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            {/* This button shows the menu icon and opens the sheet */}
                            <button className="p-2">
                                <Menu className="h-6 w-6" />
                            </button>
                        </SheetTrigger>

                        <SheetContent side="right"> {/* Sidebar slides in from the right */}
                            <SheetHeader>
                                <div className="text-lg font-semibold">Menu</div>
                            </SheetHeader>

                            <nav className="flex flex-col gap-2 pt-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        className="p-2 hover:bg-gray-100 rounded-md"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}