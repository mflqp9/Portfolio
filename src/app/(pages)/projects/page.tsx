"use client";
import React from "react";
import { projects } from "@/assets/data/db";
import { choosenTheme } from "@/components/util/theme";
import { motion } from "motion/react";
import { CardProject } from "@/components/container/cardProject";
import ProjectsImg from "./../../../components/svg/ProjectsImg";
import Image from "next/image";

import footerdesktop from "@/assets/image/footerdesktop.png";
import footermobile from "@/assets/image/footermobile.png";
import productdesktop from "@/assets/image/productdesktop.png";
import productmobile from "@/assets/image/productmobile.png";
import newsinsight from "@/assets/image/newsinsight.png";
export default function Projects() {
  const theme = choosenTheme;
  return (
    <div
      style={{ backgroundColor: theme.body }}
      className="min-h-[calc(100vh-5rem)] grid items-center  justify-center overflow-hidden scroll-smooth p-2"
    >
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-12 py-8 lg:py-0">
        {/* Left Content (Image / Illustration) */}
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto aspect-video flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <ProjectsImg />
        </motion.div>
        {/* Right Text Content */}
        <motion.div
          className="my-5 w-full gap-y-5"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          {/* Headline */}

          <div className=" w-full grid flex-wrap items-center text-center justify-center">
            <h1 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-4xl font-work-sans font-bold tracking-tight pl-2">
              Projects
            </h1>
            <div className="flex justify-center">
              <h1
                style={{ color: theme.jacketColor }}
                className="text-[18px] xl:text-2xl font-work-sans font-bold tracking-tight p-2"
              >
                {projects.title}
              </h1>
            </div>

            <p
              style={{ color: theme.secondaryText }}
              className="max-w-[60ch] text-sm sm:text-base md:text-lg font-roboto text-center sm:text-left p-2"
            >
              {projects.summary}
            </p>
          </div>
          {projects.card.map((item, i) => (
            <CardProject key={i} props={item} />
          ))}
        </motion.div>
      </div>

      {/* Projects Images */}
      <div
        className="w-full grid justify-center gap-2.5 p-2 bg-gray-700 rounded-2xl border-2"
        style={{ backgroundColor: theme.text, color: theme.body }}
      >
        <div className="w-[100%] flex justify-center items-center rounded-tl-2xl rounded-tr-2xl">
          <h1 className="text-[18px] sm:text-[22px]  md:text-[26px] lg:text-[32px] xl:text-4xl font-work-sans font-bold tracking-tight">
            My Projects
          </h1>
        </div>
        <div className="w-[100%] border-gray-400">
          <div className="aspect-auto mb-5">
            <Image src={footerdesktop} alt="Footer" width={1280} height={500} />
          </div>
          <div className="aspect-auto flex justify-center">
            <Image src={footermobile} alt="Footer" width={300} />
          </div>
          <div className="aspect-auto flex justify-center mt-5">
            <Image src={productdesktop} alt="Footer" width={1280} />
          </div>
          <div className="aspect-auto flex justify-center mt-5">
            <Image src={productmobile} alt="Mobile_Layout" width={768} />
          </div>
          <div className="aspect-auto mt-5">
            <Image
              src={newsinsight}
              alt="NewsInsight"
              width={1280}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
