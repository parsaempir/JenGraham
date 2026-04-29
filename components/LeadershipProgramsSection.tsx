"use client";

import React from "react";
import Image from "next/image";

const LeadershipProgramsSection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(500px, 70vw, 860px)" }}>
      {/* Background Image */}
      <Image
        src="/The Accelerator/LeadershipPrograms .webp"
        alt="Leadership Programs"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient Overlay: #4C5133 opaque on left → transparent on right */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, #4C5133 0%, rgba(76, 81, 51, 0) 75%)",
        }}
      />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex items-end">
        <div className="max-container pb-12 md:pb-16 lg:pb-20 w-full">
          <div className="">
            <h2
              className="font-serif text-white font-normal leading-[1.1] mb-4 md:mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
            >
              Most leadership programs<br/> tell you to push harder.
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-1">
              More visibility. More effort. More sacrifice.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Make Power Moves is different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProgramsSection;
