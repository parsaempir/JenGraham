"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const WhoPowerMovesIsFor = () => {
  const [openSection, setOpenSection] = useState<"what" | "who">("what");

  return (
    <section className="bg-[#DBC7C4] w-full py-16 lg:py-24 relative overflow-hidden">
      
      {/* Background SVG Carousel */}
      <div className="absolute left-[40%] top-[70%] -translate-x-1/2 -translate-y-1/2 w-[900px] lg:w-[1400px] h-[900px] lg:h-[1400px] z-0 pointer-events-none">
        <Image 
          src="/home/Training-Carousel.svg"
          alt="Background pattern"
          fill
          className="object-contain"
        />
      </div>

      {/* Top Header */}
      <div className="max-container flex flex-col items-center text-center mb-12 lg:mb-16 relative z-10 px-6 lg:px-0">
        <h2 className="font-serif text-[32px] md:text-5xl lg:text-[56px] text-[#2D3643] mb-6 font-normal">
          Who Power Moves Is For
        </h2>
        <p className="text-[#2D3643] text-base lg:text-xl mx-auto leading-relaxed">
          Power Moves is built specifically for female sales leaders in corporate environments who want<br className="hidden lg:block"/> promotion, impact, and personal alignment, without sacrificing their health or home life.
        </p>
      </div>

      {/* Pill Bar */}
      <div className="max-container mb-16 lg:mb-24 relative z-10 px-6 lg:px-0">
        <div className="border border-[#2D3643] rounded-[30px] lg:rounded-full py-6 lg:py-8 px-6 md:px-16 lg:px-24 grid grid-cols-2 lg:flex lg:flex-nowrap justify-between items-start lg:items-center gap-y-10 gap-x-6 lg:gap-6 w-full mx-auto">
          {/* Item 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
            <Image src="/The Accelerator/clock-01.svg" alt="Clock" width={32} height={32} className="w-6 lg:w-8 h-auto" />
            <span className="text-[#2D3643] font-medium tracking-wider uppercase text-[12px] lg:text-lg text-center lg:text-left">6 Months</span>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
            <Image src="/The Accelerator/left-to-right-list-dash.svg" alt="List" width={32} height={32} className="w-6 lg:w-8 h-auto" />
            <span className="text-[#2D3643] font-medium tracking-wider uppercase text-[12px] lg:text-lg text-center lg:text-left">Sales Leadership</span>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
            <Image src="/The Accelerator/body-part-muscle.svg" alt="Muscle" width={32} height={32} className="w-6 lg:w-8 h-auto" />
            <span className="text-[#2D3643] font-medium tracking-wider uppercase text-[12px] lg:text-lg text-center lg:text-left">Energy & Strength</span>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
            <Image src="/The Accelerator/organic-food.svg" alt="Leaf" width={32} height={32} className="w-6 lg:w-8 h-auto" />
            <span className="text-[#2D3643] font-medium tracking-wider uppercase text-[12px] lg:text-lg text-center lg:text-left">Confidence</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 relative z-10 px-6 lg:px-0">
        
        {/* Left: Accordion / Text Content */}
        <div className="flex flex-col space-y-12 justify-center order-2 lg:order-1">
          
          {/* What You Get */}
          <div className="border-b border-transparent pb-4">
            <button 
              className="w-full flex justify-between items-center mb-8"
              onClick={() => setOpenSection(openSection === "what" ? "who" : "what")}
            >
              <h3 className="font-serif text-2xl lg:text-[34px] text-[#2D3643] font-normal">What You Get?</h3>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg transition-colors ${openSection === "what" ? "border border-[#2D3643] text-[#2D3643]" : "text-[#2D3643]"}`}>
                {openSection === "what" ? "×" : "+"}
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === "what" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="text-[#2D3643] font-light space-y-8 pr-4">
                <ul className="space-y-3 text-base lg:text-lg pl-4">
                  <li className="flex items-start">
                    <span className="mr-3 mt-2.5 block w-[5px] h-[5px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
                    <span>Weekly private mentoring with Jen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2.5 block w-[5px] h-[5px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
                    <span>Detailed onboarding + leadership snapshot assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2.5 block w-[5px] h-[5px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
                    <span>Structured monthly curriculum across 3 pillars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2.5 block w-[5px] h-[5px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
                    <span>Sales leadership tools, scripts & promotion frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2.5 block w-[5px] h-[5px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
                    <span>Strength training & nutrition guidance for sustainable energy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2.5 block w-[5px] h-[5px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
                    <span>Practical boundary-setting language you can actually use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2.5 block w-[5px] h-[5px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
                    <span>Real-time accountability and direct feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2.5 block w-[5px] h-[5px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
                    <span>Monday–Friday direct access for implementation support</span>
                  </li>
                </ul>

                <div className="text-base lg:text-lg leading-snug space-y-1">
                  <p>This is not passive content.</p>
                  <p>This is not generic coaching.</p>
                  <p>This is structured execution.</p>
                </div>
              </div>
            </div>
          </div>


          {/* Who This Is For */}
          <div className="pb-4">
            <button 
              className="w-full flex justify-between items-center"
              onClick={() => setOpenSection(openSection === "who" ? "what" : "who")}
            >
              <h3 className="font-serif text-2xl lg:text-[34px] text-[#2D3643] font-normal">Who This Is For</h3>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg transition-colors ${openSection === "who" ? "border border-[#2D3643] text-[#2D3643]" : "text-[#2D3643]"}`}>
                {openSection === "who" ? "×" : "+"}
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === "who" ? "max-h-[1000px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}>
               <div className="text-[#2D3643] font-light text-base lg:text-lg">
                 <p>Content for who this is for.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Right: Images */}
        <div className="relative w-full h-[450px] md:h-[700px] flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0">
          
          {/* Phone 2 (Back) - offset right */}
          <div className="absolute w-[65%] lg:w-[62%] md:w-[56%] aspect-[9/19] z-10 translate-x-[15%] lg:translate-x-[18%] translate-y-[10%] origin-bottom">
            <div className="relative w-full h-full drop-shadow-xl">
              <Image 
                src="/The Accelerator/power-moves-app-2.webp"
                alt="Power Moves App 2"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Phone 1 (Front) - offset left, on top */}
          <div className="absolute w-[65%] lg:w-[62%] md:w-[56%] aspect-[9/19] z-20 -translate-x-[25%] lg:-translate-x-[30%] translate-y-[5%] origin-bottom">
            <div className="relative w-full h-full drop-shadow-xl">
              <Image 
                src="/The Accelerator/power-moves-app-1.webp"
                alt="Power Moves App 1"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center mt-8 relative z-20 px-6">
        <Button className="!bg-[#4C5133] !text-white hover:!bg-[#4C5133]/90 text-sm md:text-base px-10 py-4 font-medium tracking-wider w-full lg:w-auto">
          Apply for Power Moves
        </Button>
      </div>
    </section>
  );
};

export default WhoPowerMovesIsFor;
