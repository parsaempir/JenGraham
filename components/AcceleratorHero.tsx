"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const AcceleratorHero = () => {
  return (
    <section className="relative min-h-[800px] lg:min-h-screen w-full flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/The Accelerator/HeroPoverMoves.webp"
          alt="Make Power Moves"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-1" 
        style={{ background: 'linear-gradient(to right, #4C5133 0%, rgba(76, 81, 51, 0) 70%)' }}
      ></div>

      <div className="max-container relative z-10 w-full pt-32 pb-12 md:pb-20 flex flex-col md:flex-row md:justify-between md:items-end">
        {/* Left Content */}
        <div className="mb-12 md:mb-0">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-[90px] font-normal text-white leading-[1.05] mb-6 tracking-tight">
            Make Power Moves
          </h1>
          <p className="text-xl md:text-2xl text-white font-light leading-[1.4] mb-10">
            For high-performing women who want it all, without burning out
          </p>
          <Button className="text-lg !px-12 !py-4">Apply Now</Button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 mb-4 cursor-pointer animate-bounce">
          <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
            <Image
              src="/home/arrow-down.svg"
              alt="Scroll down"
              width={20}
              height={20}
            />
            <span>Scroll for more information</span>
          </div>
        </div>
      </div>

      {/* Mobile Scroll Down Indicator */}
      <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 animate-bounce">
        <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
          <Image
            src="/home/arrow-down.svg"
            alt="Scroll down"
            width={20}
            height={20}
          />
          <span>Scroll for more information</span>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorHero;
