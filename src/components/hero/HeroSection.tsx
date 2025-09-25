'use client'
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React from "react";
import GreetTitle from "../svg/title";
import { greeting } from "@/assets/data/db";
import { choosenTheme } from "@/components/util/theme";
import ManOnTable from '../svg/manOnTable';
import SocialMedia from '@/components/container/socialMedia';
import RotatingText from "@/components/container/rotateText";
import { motion } from "motion/react";
import type { Theme } from "@/types/them_prop";
import Link from "next/link";

// type Theme = {
//   body: string;
//   text: string;
//   expTxtColor: string;
//   highlight: string;
//   dark: string;
//   secondaryText: string;
//   imageHighlight: string;
//   compImgHighlight: string;
//   jacketColor: string;
//   headerColor: string;
//   splashBg: string;
// };

interface HeroSectionProps {
  theme: Theme;
}

export default function HeroSection({ theme }: HeroSectionProps) {
  return (
    <div
      style={{ backgroundColor: theme.body }}
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-12 py-8 lg:py-0">
        
        {/* Left Content */}
        <motion.div
          className="my-auto w-full"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <GreetTitle width={200} className="mb-2" />

          {/* Headline */}
          <div className="mt-6 w-full grid flex-wrap items-center text-center sm:text-left justify-center sm:justify-start">
            <h1 style={{color:theme.jacketColor}} className=" text-[18px] sm:text-2xl md:text-[26px] lg:text-[32px] xl:text-4xl font-poppins font-bold tracking-tight pr-6">
              Building Modern & Responsive
            </h1>
            <div  className="flex justify-start">              
            <RotatingText
              texts={['Web', 'Desktop','Web', 'Desktop']}
              mainClassName="font-semibold font-work-sans text-lg sm:mt-1 md:mt-2 px-2 sm:px-3 block bg-cyan-300 w-[100px] h-[28px] md:h-[30px] lg:h-[35px] justify-center  text-black overflow-hidden py-0.5 sm:py-1 rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              />

            <h1 style={{color:theme.jacketColor}} className=" text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-4xl font-work-sans font-bold tracking-tight pl-2">
              Application
            </h1>
              </div>
          </div>

          {/* Subtitle */}
          <p
            style={{ color: choosenTheme.secondaryText }}
            className="mt-3 max-w-[60ch] text-sm sm:text-base md:text-lg font-semibold font-roboto text-center sm:text-left px-2"
          >
            {greeting.subTitle}
          </p>

          {/* Social + Button */}
          <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <SocialMedia className="pt-2" />
            <Button 
            size="lg" 
            className="rounded-full text-sm sm:text-base"
            onClick={() => (<Link href="https://drive.google.com/file/d/1HCDf2uQjxCbNIUtorm1cLiDA17xlR4jZ/view"/>)}
            >
              Download CV <ArrowDown className="!h-4 !w-4 sm:!h-5 sm:!w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Right Content (Image / Illustration) */}
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto aspect-video flex justify-center items-center"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <ManOnTable />
        </motion.div>
      </div>
    </div>
  );
}
