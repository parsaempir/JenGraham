"use client";

import React from "react";

const ProblemReframe = () => {
  return (
    <section
      className="relative w-full bg-[#F9F5F2] py-14 md:py-18 px-10 overflow-visible"
      style={{
        backgroundImage: "url('/home/soft-lines.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 5% center',
        backgroundSize: 'contain',
      }}
    >
      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-strat">

          {/* Left Content */}
          <div className="flex flex-col max-w-[600px]">
            <h2 className="font-serif text-4xl md:text-6xl text-[#000000] leading-tight mb-0">
              &ldquo;You&rsquo;re Not Broken&rdquo;
            </h2>
            <h3 className="font-serif text-4xl md:text-6xl text-[#000000] leading-tight mb-8">
              Problem Reframe
            </h3>

            <div className="space-y-1 text-[#1E3147] font-sans text-base md:text-lg leading-snug">
              <p>
                You&rsquo;re a high-performing sales leader carrying pressure from every direction.
              </p>
              <p>
                When work is thriving, something at home feels like it&rsquo;s slipping.
              </p>
              <p>
                When you prioritize family or health, your career feels exposed.
              </p>
            </div>
          </div>

          {/* Right Content / Quote */}
          <div className="relative flex flex-col justify-end items-end min-h-[300px] md:min-h-[400px]">
            <div className=" text-right pr-4 md:pr-0">
              <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#000000] leading-[1.1] tracking-tight">
                Success without sacrifice is <br />
                built, not balanced by luck.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemReframe;
