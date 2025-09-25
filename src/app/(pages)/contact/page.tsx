"use client";
import React from "react";
import { choosenTheme } from "@/components/util/theme";
import { motion } from "motion/react";
import { CardContact } from "@/components/container/cardContact";
import faisal from "@/assets/image/faisal.png"
import Image from "next/image";
import SocialMedia from "@/components/container/socialMedia";

export default function Projects() {
  const theme = choosenTheme;
  return (
    <div
      style={{ backgroundColor: theme.body }}
      className="min-h-[calc(100vh-5rem)] grid items-center  justify-center overflow-hidden scroll-smooth"
    >
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-12 py-8 lg:py-0">

        {/* Right Text Content */}
        <motion.div
          className="my-20 w-full"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          {/* Headline */}

          <div className=" w-full grid flex-wrap items-center text-center justify-center">
            <h1 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-4xl font-work-sans font-bold tracking-tight pl-2">
              Contact Me
            </h1>

            <p
              style={{ color: choosenTheme.secondaryText }}
              className="ml-10 max-w-[60ch] text-sm sm:text-base md:text-lg font-roboto text-center sm:text-left px-2"
            >
              I’m available on almost every social platform — just drop me a message, and I’ll get back to you within 24 hours! I love helping with React, Next.js, MERN Stack, MySQL, and Open-Source Development.
            </p>
          </div>
          
            <CardContact />
    
          <SocialMedia className="mt-5"/>
        </motion.div>
        {/* Left Content (Image / Illustration) */}
        <motion.div
          className="w-full max-w-xs h-[20rem] mt-[8rem]  mx-auto aspect-video  flex justify-center items-center
                     border-4 border-gray-400 rounded-tr-[50px] rounded-tl-[200px] rounded-br-[500px] rounded-bl-[450]"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Image 
          src={faisal} 
          alt="Faisal"
          width={400}
          height={200}
          className="mt-[-6rem] mr-0.5 rounded-br-full rounded-bl-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
