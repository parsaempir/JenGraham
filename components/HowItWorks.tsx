"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const steps = [
  {
    icon: "/The Accelerator/add-team.svg",
    number: 1,
    title: "Get Clear",
    description: (
      <>
        Define your next-level leadership standard<br />  and  promotion path.
      </>
    ),
  },
  {
    icon: "/The Accelerator/calendar.svg",
    number: 2,
    title: "Build Systems",
    description: (
      <>
        Install sales leadership  frameworks,<br /> boundaries, and execution structure.
      </>
    ),
  },
  {
    icon: "/The Accelerator/check-list.svg",
    number: 3,
    title: "Strengthen the Foundation",
    description: (
      <>
        Reclaim energy, resilience, and physical<br /> confidence.
      </>
    ),
  },
  {
    icon: "/The Accelerator/clapping.svg",
    number: 4,
    title: "Lead Fully",
    description: (
      <>
        Operate with clarity, authority, and <br />alignment in every area of life.
      </>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-[#4C5133] py-12 lg:py-15 overflow-hidden">
      <div className="max-container px-6 lg:px-12 mx-auto">
        {/* Heading */}
        <h2
          className="font-serif text-[#F9F5F2] font-normal leading-[1.2] lg:leading-[1.1] mb-16 md:mb-28 text-center md:text-left"
          style={{ fontSize: "clamp(1.875rem, 8vw, 3.625rem)" }}
        >
          This isn&apos;t about proving yourself through exhaustion.
          <br className="hidden sm:block" />
          It&apos;s about operating like a promotion-ready sales leader
          <br className="hidden sm:block" />
          at work and at home.
        </h2>

        {/* Steps */}
        <div className="relative">

          {/* Single continuous line — positioned at center of the circles */}
          <div
            className="hidden md:block absolute h-[0.125rem] z-0"
            style={{ top: "3.875rem", left: "calc(12.5% - 1.75rem)", right: "calc(12.5% - 1.75rem)", backgroundColor: "#DBC7C4" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16 md:gap-0 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center px-4">

                {/* Icon — 1.75rem tall */}
                <div className="w-8 h-8 md:w-7 md:h-7 mb-5 relative opacity-75 flex-shrink-0">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain brightness-200"
                  />
                </div>

                {/* Number Circle — sits on the line */}
                <div className="w-8 h-8 md:w-7 md:h-7 rounded-full flex items-center justify-center flex-shrink-0 z-10 mb-5" style={{ backgroundColor: "#DBC7C4" }}>
                  <span className="text-[#4C5133] text-sm md:text-xs font-medium">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-white text-[1.375rem] md:text-2xl font-normal mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <div className="text-[#F9F5F2] text-[1rem] md:text-lg leading-relaxed">
                  {step.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16 md:mt-24">
          <Button className="w-full sm:w-auto !text-[#2D3643] border-0 hover:opacity-90 text-sm md:text-base px-12 py-4 font-medium tracking-wider" style={{ backgroundColor: "#DBC7C4" }}>
            Apply for Power Moves
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
