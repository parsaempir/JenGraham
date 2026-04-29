import React from "react";
import Image from "next/image";

const PowerMovesTarget = () => {
  return (
    <section className="bg-[#F9F5F2] w-full pt-16 lg:pt-24 overflow-hidden">
      <div className="max-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
        {/* Left Side: Images */}
        <div className="relative w-full aspect-square md:aspect-[5/4] lg:aspect-square flex items-center justify-center p-4">
          {/* Left Image (working-mom.webp) - Underneath */}
          <div className="absolute top-0 left-0 w-[65%] h-[65%] z-10">
            <div className="relative w-full h-full">
              <Image 
                src="/The Accelerator/working-mom.webp" 
                alt="Working Mom" 
                fill 
                className="object-contain object-top object-left"
              />
            </div>
          </div>

          {/* Right Image (family-life.webp) - On Top */}
          <div className="absolute bottom-42 -right-15 w-[70%] h-[70%] z-20">
            <div className="relative w-full h-full">
              <Image 
                src="/The Accelerator/family-life.webp" 
                alt="Family Life" 
                fill 
                className="object-contain object-bottom object-right"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col -mt-40 justify-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[48px] text-[#2D3643] leading-[1.1] mb-10 font-normal">
            Power Moves is built specifically for women leading in corporate sales environments who are ready to
          </h2>
          
          <ul className="mb-4 text-[#2D3643] text-xl lg:text-[22px] font-normal leading-[1.15]">
            <li className="flex items-start">
              <span className="mr-3 mt-2 block w-[6px] h-[6px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
              <span>Step into promotion-level leadership</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 block w-[6px] h-[6px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
              <span>Increase income and recognition</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 block w-[6px] h-[6px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
              <span>Rebuild energy and health</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 block w-[6px] h-[6px] rounded-full bg-[#2D3643] flex-shrink-0"></span>
              <span>Lead with confidence, at work and at home</span>
            </li>
          </ul>

          <div className="text-[#2D3643] text-xl lg:text-[22px] leading-[1.15] font-normal">
            <p>This is not mindset coaching.</p>
            <p>It&apos;s structured execution across career, body, and identity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerMovesTarget;
