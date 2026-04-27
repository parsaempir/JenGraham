"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-accent text-[#1B2735] px-10 py-3 rounded-none font-medium hover:bg-accent/90 transition-all duration-300 text-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
