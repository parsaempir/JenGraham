"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "Who is Make Power Moves for?",
    answer: "Make Power Moves is designed for high-performing women in sales, leadership, or corporate roles who want to excel professionally without burning out or sacrificing their health, family, or personal life."
  },
  {
    question: "Is this a fitness or leadership program?",
    answer: "This is a comprehensive leadership program that incorporates physical strength and personal power as core pillars of professional success."
  },
  {
    question: "How much time does the program require each week?",
    answer: "The program is designed for busy professionals, requiring approximately 2-3 hours per week for core modules and coaching sessions."
  },
  {
    question: "Is this 1:1 coaching or group-based?",
    answer: "The program offers a hybrid approach, combining the power of group dynamics with personalized 1:1 sessions to ensure your specific needs are met."
  },
  {
    question: "I've tried programs before. How is this different?",
    answer: "Unlike traditional leadership courses, we focus on the intersection of professional growth and physical/personal well-being, providing a truly sustainable model for success."
  },
  {
    question: "Will this help with burnout?",
    answer: "Absolutely. One of our primary goals is to help you build systems and boundaries that prevent burnout and restore your energy."
  },
  {
    question: "Is there a guarantee?",
    answer: "We are confident in the transformation this program provides. We offer a satisfaction guarantee to ensure you feel secure in your investment."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-14 bg-[#F9F5F2]">
      {/* Decorative Squiggle - Section clips it at top/bottom, but wrapper is visible to prevent internal clipping */}
      <div className="absolute -left-[30%] sm:-left-[15%] lg:-left-[10%] top-0 w-[80%] sm:w-[55%] lg:w-[38%] h-full pointer-events-none z-0 overflow-visible">
        <Image
          src="/home/soft-lines-faq.svg"
          alt="decorative lines"
          fill
          className="object-contain object-left scale-[1.3]"
          unoptimized
        />
      </div>

      <div className="max-container relative z-10 w-full px-6 lg:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 items-start">

          {/* Left Side */}
          <div className="w-full lg:w-[40%]">
            <span className="text-[0.75rem] font-medium tracking-[0.15em] text-[#1E3147] mb-4 block uppercase">FAQS</span>

            <div className="mb-8">
              <h2 className="font-serif text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] text-[#1E3147] leading-[1.1] mb-4">
                Got questions?
              </h2>
              <p className="text-[#1E3147] w-full lg:w-[115%] text-[0.9375rem] font-light leading-relaxed ">
                We&apos;re here to make biogas easy to understand. Find answers to the most common questions below.
              </p>
            </div>

            {/* Horizontal Line */}
            <div className="w-full lg:w-[115%] h-[0.0625rem] bg-[#989E7B]/40 mb-10" />

            <div className="">
              <h3 className="text-[1.25rem] font-light text-[#1E3147] mb-5 tracking-tight">Still got questions?</h3>
              <button className="bg-[#DBC7C4] text-[#1E3147] px-6 py-2 rounded-full text-[0.6875rem] font-bold tracking-[0.15em] hover:bg-white transition-all">
                HEY@DOMAIN.COM
              </button>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between text-left group"
                  >
                    <span className={`text-[0.875rem] sm:text-[1rem] transition-colors ${openIndex === index ? "text-[#1E3147] font-medium" : "text-[#1E3147]/80 font-light"}`}>
                      {item.question}
                    </span>
                    <span className="text-xl sm:text-2xl text-[#1E3147]/40 group-hover:text-[#1E3147] transition-colors font-light">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-5 sm:px-8 sm:pb-6">
                      <p className="text-[#1E3147]/70 text-[0.8125rem] sm:text-[0.875rem] leading-relaxed font-light">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
