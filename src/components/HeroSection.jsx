"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="transition duration-500 ease-in-out">
      <div className="h-auto md:h-[30rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Himansh Soni
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
