"use client";

import React from "react";
import Image from "next/image";

const QuizSection = () => {
  return (
    <section className="w-full bg-white pt-12 lg:pt-10 overflow-hidden">
      <div className="max-container px-6 lg:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-start gap-12 lg:gap-12">
          
          {/* Left Side: Images - Hidden on mobile/tablet */}
          <div className="w-full lg:w-[70%] relative hidden lg:flex items-end justify-center lg:justify-start">
            <div className="relative w-full max-w-[68.75rem] flex items-end ml-0 lg:-ml-48">
              {/* Woman Image - Now on top */}
              <div className="relative z-20 w-[85%] -mb-1">
                <Image
                  src="/home/success-coach.webp"
                  alt="Jen Graham - Success Coach"
                  width={1400}
                  height={1600}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Phone Mockup Image - Now underneath, hidden on mobile/tablet */}
              <div className="absolute -right-4 lg:-right-16 bottom-[-5%] lg:bottom-[-2%] z-10 w-[60%] sm:w-[65%] drop-shadow-2xl rotate-[8deg] hidden lg:block">
                <Image
                  src="/home/goals-quiz..webp"
                  alt="Goals Quiz Mobile App"
                  width={800}
                  height={1600}
                  className="w-full h-auto rotate-[-10deg]"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-[35%] max-w-[30rem] pb-12 lg:pb-20">
            <h2 className="font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3.125rem] text-[#1E3147] leading-[1.1] mb-8 lg:mb-10 text-center lg:text-left">
              Do your boundaries match your goals?
            </h2>
            
            <form className="space-y-3">
              <div className="w-full px-5 py-1.5 rounded-xl border border-[#1E3147]/10 bg-white transition-all focus-within:border-[#1E3147]/30">
                <label htmlFor="name" className="block text-[0.625rem] text-[#1E3147]/40 font-medium mb-0">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full focus:outline-none text-[0.875rem] text-[#1E3147] placeholder:text-[#1E3147]/15 bg-transparent py-0.5"
                />
              </div>

              <div className="w-full px-5 py-1.5 rounded-xl border border-[#1E3147]/10 bg-white transition-all focus-within:border-[#1E3147]/30">
                <label htmlFor="email" className="block text-[0.625rem] text-[#1E3147]/40 font-medium mb-0">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full focus:outline-none text-[0.875rem] text-[#1E3147] placeholder:text-[#1E3147]/15 bg-transparent py-0.5"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E3147] text-white py-3.5 rounded-none text-[0.875rem] font-medium tracking-[0.05em] hover:bg-[#1E3147]/95 transition-all mt-2"
              >
                Take Quiz
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuizSection;
