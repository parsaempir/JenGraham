"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const MakePowerMovesSection = () => {
  return (
    <section className="relative w-full bg-[#4C5133] overflow-hidden min-h-[500px] py-15 flex items-center">
      <div className="max-container relative z-20 w-full">
        {/* Text Content - no max-width as requested */}
        <div className="w-full">
          <h2 
            className="font-serif text-[#F9F5F2] font-normal leading-[1.05] mb-8"
            style={{ fontSize: "clamp(32px, 5.5vw, 84px)" }}
          >
            You can keep pushing.
            <br />
            Or you can make power moves.
          </h2>
          
          <p className="text-[#F9F5F2]/90 text-base md:text-xl lg:text-2xl font-light leading-relaxed mb-12 max-w-3xl">
            Apply to work with Jen Graham 
            <br className="hidden md:block" />
            and build a career and life that feels strong, calm, and intentional.
          </p>

          <Button 
            className="!text-[#2D3643] border-0 hover:opacity-90 text-sm md:text-base px-10 py-5 font-medium tracking-wider" 
            style={{ backgroundColor: "#DBC7C4" }}
          >
            Apply for Make Power Moves
          </Button>
        </div>
      </div>

      {/* Image - Made even LARGER as requested */}
      <div className="absolute -bottom-43 -right-19 w-[120%] md:w-[110%] lg:w-[105%] h-[180%] md:h-[230%] pointer-events-none z-100">
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
