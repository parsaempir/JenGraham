"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const SilentSuccess = () => {
  return (
    <section className="relative w-full min-h-[850px] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/silent-success.webp"
          alt="The Silent Cost of Success"
          fill
          className="object-cover object-center"
        />
        {/* Gradient Overlay from bottom */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to top, #1E3147 0%, #1E314700 88%)'
          }}
        />
      </div>

      <div className="max-container relative z-20 w-full pt-80">
        <div className="">
          {/* Headline */}
          <h2 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-8 tracking-tight">
            The Silent Cost <br /> of Success
          </h2>

          {/* Body Text */}
          <div className="space-y-6 mb-10">
            <p className="text-lg md:text-[18px] text-white/90 font-light leading-relaxed">
              I&apos;ve led teams, hit numbers, raised kids, and burned out doing everything &ldquo;right.&rdquo; <br/>
              What changed everything wasn&apos;t doing less. It was leading differently.
            </p>
            <p className="text-lg md:text-[18px] text-white/90 font-light leading-relaxed">
              Now I help women in sales and leadership build clarity, boundaries, and systems <br/>
              that actually hold under pressure.
            </p>
          </div>

          {/* CTA */}
          <Button className="text-lg">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default SilentSuccess;
