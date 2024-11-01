"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "/certificate1.png",
    "/Hack2skill-Certificate.png",
  ];
  return (
    <div className="flex flex-col items-center mb-10" id="certifications">
    <ImagesSlider className="h-[40rem] w-[60%]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      </motion.div>
    </ImagesSlider>
    </div>
  );
}
