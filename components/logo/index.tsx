"use client";

import React from "react";

import { cn } from "@/lib/utils";

const Logo = (props: {
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
}) => {
  const { width, height, className, onClick } = props;
  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      role="button"
      onClick={handleClick}
      style={{ width: width || "auto", height: height || "auto" }}
      className={cn(
        `flex items-center justify-center hover:bg-opacity-10 transition`,
        className
      )}
    >
      <img src="/assets/logo.svg" alt="Logo" />
    </div>
  );
};

export default Logo;
