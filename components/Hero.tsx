"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative min-h-[37.5rem] sm:min-h-[50rem] lg:min-h-[110vh] w-full flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/hero.webp"
          alt="Jen Graham - High-Performance Sales Leadership"
          fill
          priority
          className="object-cover object-right lg:object-top"
        />
      </div>

      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 relative z-10 pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div >
          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-[1.1] mb-8 sm:mb-12 tracking-tight max-w-[95%] sm:max-w-none">
            Calm is not the goal.<br />It&apos;s the strategy.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F9F5F2] font-light leading-[1.5] mb-10 sm:mb-14 max-w-[90%] sm:max-w-[47.5rem]">
            A six-month private accelerator for high-performing female sales leaders who want promotion, power, and personal peace, without burnout or guilt.
          </p>

          {/* Call to Action */}
          <Button className="text-base sm:text-lg">Learn More</Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer">
        <div className="flex items-center gap-2 sm:gap-3 text-white/80 text-xs sm:text-sm font-medium whitespace-nowrap">
          <Image
            src="/home/arrow-down.svg"
            alt="Scroll down"
            width={18}
            height={18}
            className="sm:w-5 sm:h-5"
          />
          <span>Scroll for more information</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
