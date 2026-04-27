"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 transition-all duration-300 bg-transparent">
      <div className="max-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/home/logo.svg"
            alt="Jen Graham Logo"
            width={180}
            height={40}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-accent transition-colors text-sm font-medium">Home</Link>
          <Link href="/accelerator" className="text-white hover:text-accent transition-colors text-sm font-medium">The Accelerator</Link>
          <Link href="/about" className="text-white hover:text-accent transition-colors text-sm font-medium">About Jen</Link>
          <Link href="/stories" className="text-white hover:text-accent transition-colors text-sm font-medium">Client Stories</Link>
          <Link href="/faq" className="text-white hover:text-accent transition-colors text-sm font-medium">Faq</Link>
          <Link href="/contact" className="text-white hover:text-accent transition-colors text-sm font-medium">Contact</Link>
        </div>

        {/* Call to Action */}
        <div className="flex-shrink-0">
          <Button className="!bg-[#F9F5F2] !px-6 !py-2.5 text-xs tracking-widest font-semibold">Book a Call</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
