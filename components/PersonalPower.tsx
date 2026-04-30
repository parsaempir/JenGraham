"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const PersonalPower = () => {
  return (
    <section className="relative w-full min-h-[450px] sm:min-h-[520px] flex items-center bg-[#1E3147] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/personal.webp"
          alt="Career Growth"
          fill
          className="object-cover lg:object-contain object-center lg:object-left opacity-40 lg:opacity-100"
        />
      </div>

      <div className="max-container relative z-10 w-full py-16 lg:py-12">
        <div className="flex justify-center lg:justify-end">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-serif dynamic-headline text-[#F9F5F2] text-4xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-10">
              Career growth.<br className="lg:hidden" />
              Personal <br className="hidden lg:block" /> power.<br className="lg:hidden" />
              Physical strength. <br className="hidden lg:block" />
              No sacrifice required.
            </h2>

            <Button
              className="bg-[#DBC7C4] text-[#1E3147] hover:bg-[#DBC7C4]/90 border-none px-10 py-4 text-base sm:text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPower;
