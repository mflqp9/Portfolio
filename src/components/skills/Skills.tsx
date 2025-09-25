"use client";

import React from "react";
import SkillSection from "./SkillSection";
import { motion } from "motion/react";

type Theme = {
  text: string;
  body: string;
  highlight: string;
  secondaryText: string;
  headerColor:string;
};

interface SkillsProps {
  theme: Theme;
}

export default function Skills({ theme }: SkillsProps) {
  return (
    <div
    id="skills" 
    style={{ 
      
      backgroundColor: theme.body
    
    }}
    className="w-full flex flex-col items-center px-6 xl:px-12">
      <div className="w-full flex justify-center mb-8">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="
            text-[30px] md:text-[50px] lg:text-[60px]
            leading-normal font-work-sans text-center font-bold
          "
          style={{ color: theme.text }}
        >
          What I Do?
        </motion.h1>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
