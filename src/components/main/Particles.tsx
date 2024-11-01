"use client";

import {  useState } from "react";
import { useTheme } from "next-themes";
import Particles from "../sub/ParticlesUtil";
import { ShineBorder } from "../sub/CardUtil";

import BoxReveal from "../ui/CardReveal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function ParticlesDemo({ image, title, desc, tech, link }: { image: string; title: string; desc: string; tech: string[]; link: string[] }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  return (
    <ShineBorder
      className="relative group flex h-[500px] w-[350px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl hover:shadow-glow transition duration-300"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      {/* Main Image */}
      <img className="rounded-lg w-full max-h-44 transition duration-300 group-hover:blur-sm" src={image} alt={title} />

      {/* Card Content */}
      <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8 transition duration-300 group-hover:blur-sm">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3rem] font-semibold">
            {title}<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            {desc}
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6 flex gap-2 flex-wrap">
            {tech.map((icon, index) => (
              <img key={index} src={icon} alt={`Tech icon ${index}`} className="tech-icon h-16" />
            ))}
          </div>
        </BoxReveal>

        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>

      {/* Overlay with Links - appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <a href={link[0]} target="_blank" rel="noopener noreferrer" className="mx-4 text-white">
          <FaGithub size={50} />
        </a>
        <a href={link[1]} target="_blank" rel="noopener noreferrer" className="mx-4 text-white">
          <FaExternalLinkAlt size={50} />
        </a>
      </div>
    </ShineBorder>
  );
}
