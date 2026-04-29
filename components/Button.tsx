"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", type = "button", style }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`bg-accent text-[#1B2735] px-10 py-3 rounded-none font-medium hover:bg-accent/90 transition-all duration-300 text-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
