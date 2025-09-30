"use client";
import React from "react";
import { experience } from "@/assets/data/db";
import { choosenTheme } from "@/components/util/theme";
import { motion } from "motion/react";
import ExperienceImg from "./../../../components/svg/ExperienceImg";
import { CardExperience } from "@/components/container/cardExperience";
import { Separator } from "@radix-ui/react-separator";

const mywork = [
  {
    title: "Vb.Net Full Stack Developers ",
    institute: "Faisal Techz/ As Freelancer",
    duration: "2018 – 2024 (6 Year)",
    summary:
      "Proficient in VB.Net for developing scalable desktop applications, experienced in MS SQL Server for efficient database management, and skilled in designing complex reports with SAP Crystal Reports",
  },
  {
    title: "MERN Stack Internship",
    institute: "NexusBerry Training Institute & Solution",
    duration: "Apr 10, 2025 – Jul 15, 2025",
    summary:
      "Completed a 3-month internship with a focus on full-stack web development, primarily working on frontend technologies and backend development using Node.js, Express.js, and MongoDB. Gained hands-on experience in building and integrating RESTful APIs and Payload CMS, managing database operations, and collaborating on real-world projects under professional supervision",
  }
];

export default function Eeperience() {
  const theme = choosenTheme;
  return (
    <div
      style={{ backgroundColor:theme.body }}
      className="min-h-[calc(100vh-5rem)] grid items-center  justify-center overflow-hidden scroll-smooth"
    >
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-12 py-8 lg:py-0">
        {/* Left Content (Image / Illustration) */}
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto aspect-video flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <ExperienceImg />
        </motion.div>
        {/* Right Text Content */}
        <motion.div
          className="my-auto w-full"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          {/* Headline */}

          <div className=" w-full grid flex-wrap items-center text-center justify-center">
            <h1 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-4xl font-work-sans font-bold tracking-tight">
              Experience
            </h1>
            <div className="flex justify-center">
              <h1
                style={{ color: theme.jacketColor }}
                className="text-[18px] xl:text-2xl font-work-sans font-bold tracking-tight"
              >
                {experience.title}
              </h1>
            </div>
            <p
              style={{ color: choosenTheme.secondaryText }}
              className="max-w-[60ch] text-sm sm:text-base md:text-lg font-roboto text-center"
              >
              {experience.body}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-full grid justify-center gap-2.5 m-5">
        <div className="w-full flex justify-center items-center mb-5 mt-5">
          <h1 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-4xl font-work-sans font-bold tracking-tight pl-2">
            Work Experience
          </h1>
        </div>
      </div>
      <div className="w-full h-auto p-5 flex flex-col justify-center items-center gap-5">
        {mywork.map((work, index) => (
          <CardExperience key={index} props={{ ...work, index }} />
        ))}
      </div>
    </div>
  );
}
