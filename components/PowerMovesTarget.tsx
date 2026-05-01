import React from "react";
import Image from "next/image";

const PowerMovesTarget = () => {
  return (
    <section className="bg-[#F9F5F2] w-full pt-16 sm:pt-20 lg:pt-24 pb-16 lg:pb-0 overflow-hidden">
      <div className="max-container px-6 lg:px-12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 items-center">
        {/* Left Side: Images */}
        <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center">
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
          <div className="absolute bottom-0 -right-4 lg:bottom-42 lg:-right-15 w-[70%] h-[70%] z-20">
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
        <div className="flex flex-col mt-0 lg:-mt-40 justify-center">
          <h2 className="font-serif text-[1.875rem] sm:text-[2.5rem] lg:text-[3rem] text-[#2D3643] leading-[1.2] lg:leading-[1.1] mb-8 lg:mb-10 font-normal">
            Power Moves is built specifically for women leading in corporate sales environments who are ready to
          </h2>

          <ul className="mb-6 lg:mb-4 text-[#2D3643] text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] font-normal leading-[1.2] lg:leading-[1.15]">
            <li className="flex items-start mb-3 lg:mb-0">
              <span className="mr-3 mt-2 block w-[0.375rem] h-[0.375rem] rounded-full bg-[#2D3643] flex-shrink-0"></span>
              <span>Step into promotion-level leadership</span>
            </li>
            <li className="flex items-start mb-3 lg:mb-0">
              <span className="mr-3 mt-2 block w-[0.375rem] h-[0.375rem] rounded-full bg-[#2D3643] flex-shrink-0"></span>
              <span>Increase income and recognition</span>
            </li>
            <li className="flex items-start mb-3 lg:mb-0">
              <span className="mr-3 mt-2 block w-[0.375rem] h-[0.375rem] rounded-full bg-[#2D3643] flex-shrink-0"></span>
              <span>Rebuild energy and health</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 block w-[0.375rem] h-[0.375rem] rounded-full bg-[#2D3643] flex-shrink-0"></span>
              <span>Lead with confidence, at work and at home</span>
            </li>
          </ul>

          <div className="text-[#2D3643] text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] leading-[1.2] lg:leading-[1.15] font-normal space-y-2 lg:space-y-0">
            <p>This is not mindset coaching.</p>
            <p>It&apos;s structured execution across career, body, and identity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerMovesTarget;
