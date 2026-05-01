"use client";

import React from "react";
import Image from "next/image";

const LeadershipProgramsSection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(31.25rem, 70vw, 53.75rem)" }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/The Accelerator/LeadershipPrograms.webp"
          alt="Leadership Programs"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient Overlay: Optimized for mobile/desktop readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(76, 81, 51, 0.9) 0%, rgba(76, 81, 51, 0.4) 50%, rgba(76, 81, 51, 0) 100%)",
        }}
      />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex items-end justify-center sm:justify-start px-6 lg:px-12">
        <div className="max-container pb-16 md:pb-16 lg:pb-20 w-full text-center sm:text-left mx-auto">
          <div>
            <h2
              className="font-serif text-white font-normal leading-[1.2] lg:leading-[1.1] mb-6 md:mb-6"
              style={{ fontSize: "clamp(2rem, 8vw, 3.25rem)" }}
            >
              Most leadership programs<br className="hidden sm:block" /> tell you to push harder.
            </h2>
            <p className="text-white/90 text-[0.9375rem] md:text-base leading-relaxed mb-1">
              More visibility. More effort. More sacrifice.
            </p>
            <p className="text-white/90 text-[0.9375rem] md:text-base leading-relaxed">
              Make Power Moves is different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProgramsSection;
