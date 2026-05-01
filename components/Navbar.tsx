"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The Accelerator", href: "/accelerator" },
    { name: "About Jen", href: "/about" },
    { name: "Client Stories", href: "/stories" },
    { name: "Faq", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-[#0f172a]/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"
      }`}>
        <div className="w-full px-8 md:px-16 lg:px-24 flex items-center justify-between">
          
          {/* Left Side: Logo + Navigation Links */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-[110]" onClick={closeMenu}>
              <Image
                src="/home/logo.svg"
                alt="Jen Graham Logo"
                width={180}
                height={40}
                className="h-auto w-35 md:w-40 lg:w-45"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-white hover:text-accent transition-colors text-sm font-medium">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA (Right Side) */}
          <div className="hidden lg:block flex-shrink-0">
            <Link href="/login">
              <Button className="!bg-[#F9F5F2] !px-6 !py-2.5 text-xs tracking-widest font-semibold text-black uppercase">
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-[110] p-2 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-7 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay/Drawer */}
      <div className={`fixed inset-0 z-[90] lg:hidden transition-all duration-500 ${
        isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}>
        {/* Dark Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu} />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-[80%] max-w-[20rem] bg-[#0A1122] shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex flex-col pt-32 px-10 space-y-8">
            {navLinks.map((link, i) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={closeMenu}
                className={`text-white/80 hover:text-white text-lg font-medium tracking-widest uppercase transition-all duration-300 ${
                  isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <div className={`pt-6 transition-all duration-500 delay-300 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
              <Link href="/login" onClick={closeMenu}>
                <Button className="w-full !bg-[#F9F5F2] !py-4 text-xs tracking-[0.2em] font-bold text-black uppercase">
                  Book a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
