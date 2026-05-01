"use client";

import React from "react";
import Image from "next/image";

const MethodSnapshot = () => {
  const items = [
    {
      title:(<>Split Between<br/> Success and Home</>) ,
      description: (<>When you win at work, something<br/> personal feels like it&apos;s paying the<br /> price.</>)
    },
    {
      title: (
        <>
          Invisible <br /> Effort
        </>
      ),
      description: (<>Carrying emotional and professional<br/> weight that isn&apos;t always recognized or <br/>rewarded.</>)
    },
    {
      title:(<>Confidence That<br/> Fluctuates</>) ,
      description:(<>When you&apos;re not at your best in every<br/> area, you start questioning your<br/> worth.</>) 
    }
  ];

  return (
    <section className="bg-[#1E3147] py-16 sm:py-20 lg:py-0 lg:pb-24 w-full">
      <div className="max-container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Side: Three column box */}
          <div className="relative flex-1 w-full">
            <div className="border border-[#DBC7C4] grid grid-cols-1 md:grid-cols-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`px-6 pt-8 pb-6 flex flex-col justify-between gap-12 sm:gap-16 ${
                    index !== items.length - 1 ? "md:border-r border-b md:border-b-0 border-[#DBC7C4]" : ""
                  }`}
                >
                  <h3 className="font-serif text-2xl text-[#F9F5F2] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#F9F5F2] text-sm md:text-[0.8125rem] font-light leading-relaxed max-w-[16.25rem] sm:max-w-none">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Middle Arrow Button - Desktop Only */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
              <div className=" flex items-center justify-center">
                <Image
                  src="/home/arrowdown.svg"
                  alt="arrow"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Right Side: Headline */}
          <div className="w-full lg:w-auto">
            <h2 className="font-serif text-[2.25rem] sm:text-5xl lg:text-6xl text-[#F9F5F2] leading-[1.1] tracking-tight">
              Method Snapshot, <br className="hidden sm:block" /> What&apos;s Different Here
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodSnapshot;
