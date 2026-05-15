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
      <div className="container-xl grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:py-24">
        <motion.div
          className="relative mx-auto flex aspect-video w-full max-w-xs items-center justify-center sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div className="premium-border glass-panel absolute inset-0 rounded-md" />
          <div className="relative z-10">
            <ExperienceImg />
          </div>
        </motion.div>

        <motion.div
          className="my-auto w-full"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <div className="grid w-full flex-wrap items-center justify-center text-center md:justify-start md:text-left">
            <h1
              id="experience-heading"
              className="font-work-sans text-5xl font-black tracking-tight text-white md:text-7xl"
            >
              Experience
            </h1>
            <div className="flex justify-center md:justify-start">
              <p className="mt-4 font-work-sans text-lg font-black tracking-tight text-cyan-200 xl:text-2xl">
                {experience.title}
              </p>
            </div>
            <p className="mt-5 max-w-[60ch] text-center font-roboto text-sm leading-8 text-slate-300 sm:text-base md:text-left md:text-lg">
              {experience.body}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="portfolio-band section-pad px-4 sm:px-6 lg:px-8">
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
