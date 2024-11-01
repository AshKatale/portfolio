import React from "react";
import HeroContent from "../sub/HeroContent";
import { LampDemo } from "../ui/lamp";
import { GridPatternLinearGradient } from "./GridPatternDemo";


export default function Hero() {
  return (
    <div className="flex flex-col relative h-full w-full " id="hero">
      {/* <div className="h-16"></div> */}
      <LampDemo />
    </div>
  );
}
