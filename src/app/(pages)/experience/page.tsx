"use client";
import { motion } from "motion/react";
import { experience, workExperience } from "@/assets/data/db";
import { CardExperience } from "@/components/container/cardExperience";
import SectionHeader from "@/components/layout/SectionHeader";
import ExperienceImg from "./../../../components/svg/ExperienceImg";

export default function Experience() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="portfolio-dark-band min-h-[calc(100vh-5rem)] overflow-hidden scroll-smooth"
    >
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto aspect-video flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div className="glass-panel absolute inset-0 rotate-2 rounded-md" />
          <div className="relative z-10">
            <ExperienceImg />
          </div>
        </motion.div>

        <motion.div
          className="my-auto w-full"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <div className="w-full grid flex-wrap items-center text-center justify-center md:text-left md:justify-start">
            <h1
              id="experience-heading"
              className="text-4xl font-black tracking-tight text-white md:text-6xl font-work-sans"
            >
              Experience
            </h1>
            <div className="flex justify-center">
              <p className="mt-4 text-lg xl:text-2xl font-work-sans font-bold tracking-tight text-cyan-200">
                {experience.title}
              </p>
            </div>
            <p className="mt-5 max-w-[60ch] text-sm sm:text-base md:text-lg font-roboto text-center md:text-left leading-8 text-slate-300">
              {experience.body}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="portfolio-band px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          title="Career Timeline"
          description="A practical path from enterprise desktop systems to modern SaaS, APIs, and high-performance web platforms."
        />
        <div className="mx-auto flex w-full max-w-5xl flex-col justify-center gap-5">
          {workExperience.map((work, index) => (
            <CardExperience
              key={`${work.title}-${work.duration}`}
              props={{ ...work, index }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
