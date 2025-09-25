
'use client'
import React from "react";
import { education } from "@/assets/data/db";
import { choosenTheme } from "@/components/util/theme";
import { motion } from "motion/react";
import EducationImg from "../../../components/svg/EducationImg";
import TestimonialCard from "@/components/container/testimonial";


export default function Education() {
  const theme = choosenTheme;
  return (
    <div
      style={{ backgroundColor: theme.body }}
      className="min-h-[calc(100vh-5rem)] grid items-center  justify-center overflow-hidden"
    >
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-12 py-8 lg:py-0">
        {/* Left Content (Image / Illustration) */}
        <motion.div
          className=" w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto aspect-video flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <EducationImg />
        </motion.div>
        {/* Right Text Content */}
        <motion.div
          className="my-auto w-full"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          {/* Headline */}

          <div className="  mt-[-5rem] w-full grid flex-wrap items-center text-center justify-center">
            <h1 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-4xl font-work-sans font-bold tracking-tight pl-2">
              Education
            </h1>
            <div className="flex justify-start">
              <h1 style={{color:theme.jacketColor}} className="ml-5 text-[18px] xl:text-2xl font-work-sans tracking-tight pl-2">
                {education.degree} - {education.passing_year}
              </h1>
            </div>


          <p
            style={{ color: choosenTheme.secondaryText }}
            className="ml-10 max-w-[60ch] text-sm sm:text-base md:text-lg font-roboto text-center sm:text-left px-2"
            >
            {education.uni} - {education.address}
          </p>
            </div>
        </motion.div>
      </div>
      <div className="w-full grid justify-center gap-2.5">
        <div className="w-full flex justify-center items-center mb-5">
          <h1 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-4xl font-work-sans font-bold tracking-tight pl-2">
            Certificate
          </h1>
        </div>
        <div className="w-full flex justify-center flex-2 flex-wrap gap-5">
          {education.certications.map((cert,i) => (
            <TestimonialCard key={i} props={cert} />
          ))}
        </div>
      </div>
    </div>
  );
}
