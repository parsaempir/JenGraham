"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const MakePowerMovesSection = () => {
  return (
    <section className="relative w-full bg-[#4C5133] overflow-hidden min-h-[500px] py-16 md:py-15 flex items-center">
      <div className="max-container relative z-20 w-full px-6 md:px-0 mx-auto">
        {/* Text Content */}
        <div className="w-full text-center md:text-left">
          <h2 
            className="font-serif text-[#F9F5F2] font-normal leading-[1.1] md:leading-[1.05] mb-8"
            style={{ fontSize: "clamp(32px, 5.5vw, 84px)" }}
          >
            You can keep pushing.
            <br className="hidden sm:block" />
            Or you can make power moves.
          </h2>
          
          <p className="text-[#F9F5F2]/90 text-base md:text-xl lg:text-2xl font-light leading-relaxed mb-12 max-w-3xl mx-auto md:mx-0">
            Apply to work with Jen Graham 
            <br className="hidden md:block" />
            and build a career and life that feels strong, calm, and intentional.
          </p>

          <Button 
            className="w-full md:w-auto !text-[#2D3643] border-0 hover:opacity-90 text-sm md:text-base px-10 py-5 font-medium tracking-wider" 
            style={{ backgroundColor: "#DBC7C4" }}
          >
            Apply for Make Power Moves
          </Button>
        </div>
      </div>

      {/* Image - Hidden on mobile and tablet, visible on desktop */}
      <div className="hidden lg:block absolute -bottom-43 -right-19 w-[110%] lg:w-[105%] h-[230%] pointer-events-none z-[100]">
        <Image
          src="/The Accelerator/PowerMoves.webp"
          alt="Jen Graham - Make Power Moves"
          fill
          className="object-contain object-right-bottom"
          priority
        />
      </div>
    </section>
  );
};

export default MakePowerMovesSection;
