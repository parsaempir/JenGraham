"use client";

import React from "react";
import Image from "next/image";

const CalmLeadership = () => {
  const leaders = [
    {
      name: "Jane Doe",
      image: "/home/calm-leadership-woman-1.webp",
    },
    {
      name: "Jane Doe",
      image: "/home/calm-leadership-woman-2.webp",
    },
    {
      name: "Jane Doe",
      image: "/home/calm-leadership-woman-3.webp",
    },
  ];

  return (
    <section className="bg-[#F9F5F2] py-16 sm:py-20 w-full">
      <div className="max-container">
        {/* Headline */}
        <h2 className="font-serif text-[2.25rem] sm:text-5xl lg:text-6xl text-[#000000] leading-[1.1] tracking-tight mb-10 lg:mb-14 max-w-2xl">
          This is what calm <br className="hidden sm:block" /> leadership looks like.
        </h2>

        {/* Grid of Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/5] overflow-hidden rounded-lg group"
            >
              {/* Image */}
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Soft Dark Overlay with varying opacity */}
              <div 
                className={`absolute inset-0 z-10 transition-opacity duration-500 ${
                  index === 0 ? "bg-black/50" : 
                  index === 1 ? "bg-black/50" : 
                  "bg-black/40"
                }`} 
              />

              {/* Name at Bottom */}
              <div className="absolute bottom-8 sm:bottom-10 left-6 z-20">
                <p className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white opacity-90">
                  {leader.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalmLeadership;
