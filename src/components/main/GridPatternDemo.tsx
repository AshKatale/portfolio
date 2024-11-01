"use client";

import { cn } from "@/lib/utils";
import GridPattern from "../sub/GridPattern";
import HeroContent from "../sub/HeroContent";


export function GridPatternLinearGradient() {
  return (
    <div id="about-me" className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent)] ",
        )}
      />
      <HeroContent />
    </div>
  );
}
