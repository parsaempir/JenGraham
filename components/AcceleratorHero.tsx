"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const AcceleratorHero = () => {
  return (
    <section className="relative min-h-[750px] sm:min-h-[800px] lg:min-h-screen w-full flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/The Accelerator/HeroPoverMoves.webp"
          alt="Make Power Moves"
          fill
          priority
          className="object-cover object-center sm:object-center"
        />
      </div>

      {/* Gradient Overlay - Adjusted for better mobile readability */}
      <div 
        className="absolute inset-0 z-1 bg-black/20 lg:bg-transparent" 
        style={{ background: 'linear-gradient(to bottom, rgba(76, 81, 51, 0) 0%, rgba(76, 81, 51, 0.8) 100%), linear-gradient(to right, rgba(76, 81, 51, 0.6) 0%, rgba(76, 81, 51, 0) 70%)' }}
      ></div>

      <div className="max-container relative z-10 w-full pt-32 pb-20 md:pb-20 flex flex-col md:flex-row md:justify-between items-center md:items-end px-6 lg:px-12 mx-auto">
        {/* Left Content */}
        <div className="mb-12 md:mb-0 text-center md:text-left">
          <h1 className="font-serif text-[44px] sm:text-[60px] md:text-7xl lg:text-[90px] font-normal text-white leading-[1.1] md:leading-[1.05] mb-6 tracking-tight">
            Make Power Moves
          </h1>
          <p className="text-[17px] sm:text-xl md:text-2xl text-white font-light leading-[1.4] mb-10 max-w-[500px] mx-auto md:mx-0">
            For high-performing women who want it all, without burning out
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className="text-base sm:text-lg !px-10 sm:!px-12 !py-3.5 sm:!py-4">Apply Now</Button>
          </div>
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
      <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 animate-bounce">
        <div className="flex items-center gap-3 text-white/80 text-[12px] font-medium whitespace-nowrap">
          <Image
            src="/home/arrow-down.svg"
            alt="Scroll down"
            width={16}
            height={16}
          />
          <span>Scroll for more information</span>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorHero;
