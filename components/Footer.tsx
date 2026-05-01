"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#DBC7C4] pt-16 lg:pt-24 pb-12 lg:pb-10 overflow-hidden text-[#1E3147]">
      {/* Background Graphic Initials */}
      <div className="absolute right-[-20%] lg:right-[0%] bottom-[-2%] lg:bottom-[0%] w-[150%] sm:w-[110%] lg:w-[76%] pointer-events-none z-0">
        <Image
          src="/home/Training-Carousel.svg"
          alt="Jen Graham Initials"
          width={1600}
          height={1600}
          className="w-full h-auto"
        />
      </div>

      <div className="max-container relative z-10 px-6 lg:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-20">

          {/* Column 1: Branding */}
          <div className="flex flex-col gap-6 lg:gap-8 items-center md:items-start text-center md:text-left">
            <Image
              src="/home/LogoFoter.svg"
              alt="Jen Graham Logo"
              width={180}
              height={60}
              className="w-[180px] h-auto"
            />
            <p className="text-[15px] leading-relaxed max-w-[280px] md:max-w-none lg:max-w-[280px]">
              Systems, boundaries, and leadership frameworks for high-performing women who are done running on empty.
            </p>
          </div>

          {/* Column 2: Pages */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <h4 className="text-[13px] font-bold tracking-[0.2em] uppercase opacity-50">Pages</h4>
            <nav className="flex flex-col gap-4 items-center md:items-start">
              <Link href="/" className="hover:opacity-60 transition-opacity">Home page</Link>
              <Link href="/services" className="hover:opacity-60 transition-opacity">Services</Link>
              <Link href="/faq" className="hover:opacity-60 transition-opacity">FAQ</Link>
              <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Account */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <h4 className="text-[13px] font-bold tracking-[0.2em] uppercase opacity-50">Account</h4>
            <nav className="flex flex-col gap-4 items-center md:items-start">
              <Link href="/login" className="hover:opacity-60 transition-opacity">Log in</Link>
              <Link href="/profile" className="hover:opacity-60 transition-opacity">My Profile</Link>
            </nav>
          </div>

          {/* Column 4: Social Media */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <h4 className="text-[13px] font-bold tracking-[0.2em] uppercase opacity-50">Social Media</h4>
            <div className="flex gap-4">
              {/* Facebook */}
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all overflow-hidden p-2.5">
                <Image src="/home/Facebook.svg" alt="Facebook" width={24} height={24} className="w-full h-auto" />
              </Link>
              {/* Twitter */}
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all overflow-hidden p-2.5">
                <Image src="/home/Twitter.svg" alt="Twitter" width={24} height={24} className="w-full h-auto" />
              </Link>
              {/* LinkedIn */}
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all overflow-hidden p-2.5">
                <Image src="/home/Linkedino.svg" alt="LinkedIn" width={24} height={24} className="w-full h-auto" />
              </Link>
              {/* Instagram */}
              <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all overflow-hidden p-2.5">
                <Image src="/home/Instagramo.svg" alt="Instagram" width={24} height={24} className="w-full h-auto" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-20 lg:mt-40">
          <div className="flex items-center gap-3">
            <span className="text-[13px] opacity-60">Built by</span>
            <a href="https://www.biguppetite.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center">
              <Image
                src="/home/big-uppetite-logo.svg"
                alt="Big Uppetite Logo"
                width={100}
                height={20}
                className="h-[20px] w-auto"
              />
            </a>
          </div>
          <p className="text-[13px] text-[#2F223B] font-medium tracking-tight text-center md:text-left">
            © All rights reserved by <span className="font-bold opacity-100">Jen Graham.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
