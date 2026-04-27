"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative min-h-[1000px] lg:min-h-[110vh] w-full flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Home/Hero.webp"
          alt="Jen Graham - High-Performance Sales Leadership"
          fill
          priority
          className="object-cover object-top brightness-[0.85]"
        />
        {/* Subtle Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="max-container relative z-10 w-full pt-32 pb-20">
        <div >
          {/* Main Headline */}
          <h1 className="font-serif text-6xl md:text-8xl  font-normal text-white leading-[1.05] mb-12 tracking-tight">
            Calm is not the goal.<br />It&apos;s the strategy.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-2xl text-[#F9F5F2] font-light leading-[1.4] mb-14 max-w-[760px]">
            A six-month private accelerator for high-performing female sales leaders who want promotion, power, and personal peace, without burnout or guilt.
          </p>

          {/* Call to Action */}
          <Button className="text-lg">Learn More</Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer">
        <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
          <Image
            src="/Home/arrow-down.svg"
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

export default Hero;
