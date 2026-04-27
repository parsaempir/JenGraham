"use client";

import React from "react";
import Image from "next/image";

const MethodSnapshot = () => {
  const items = [
    {
      title:(<>Split Between<br/> Success and Home</>) ,
      description: (<>When you win at work, something<br/> personal feels like it's paying the<br /> price.</>)
    },
    {
      title: (
        <>
          Invisible <br /> Effort
        </>
      ),
      description: (<>Carrying emotional and professional<br/> weight that isn't always recognized or <br/>rewarded.</>)
    },
    {
      title:(<>Confidence That<br/> Fluctuates</>) ,
      description:(<>When you're not at your best in every<br/> area, you start questioning your<br/> worth.</>) 
    }
  ];

  return (
    <section className="bg-[#1E3147] pb-24 w-full">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side: Three column box */}
          <div className="relative flex-1">
            <div className="border  border-[#DBC7C4] grid grid-cols-1 md:grid-cols-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`px-6 pt-8 pb-4 flex flex-col justify-between gap-16 ${
                    index !== items.length - 1 ? "md:border-r border-[#DBC7C4] border-b md:border-b-0" : ""
                  }`}
                >
                  <h3 className="font-serif text-2xl md:text2xl text-[#F9F5F2] leading-tight">
                    {item.title}
                  </h3>
                  <p className=" text-[#F9F5F2] text-sm md:text-[13px] font-light leading-relaxed max-w-[260px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Middle Arrow Button */}
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
          <div className="">
            <h2 className="font-serif text-5xl md:text-6xl text-[#F9F5F2] leading-[1.1] tracking-tight">
              Method Snapshot, <br /> What&apos;s Different Here
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodSnapshot;
