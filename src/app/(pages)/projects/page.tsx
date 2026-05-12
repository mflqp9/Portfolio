"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { projectCards, projectGallery, projects } from "@/assets/data/db";
import { CardProject } from "@/components/container/cardProject";
import SectionHeader from "@/components/layout/SectionHeader";
import ProjectsImg from "./../../../components/svg/ProjectsImg";
export default function Projects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="portfolio-dark-band min-h-[calc(100vh-5rem)] overflow-hidden scroll-smooth"
    >
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto aspect-video flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div className="glass-panel absolute inset-0 -rotate-2 rounded-md" />
          <div className="relative z-10">
            <ProjectsImg />
          </div>
        </motion.div>
        <motion.div
          className="my-auto w-full"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <div className="w-full grid flex-wrap items-center text-center justify-center md:justify-start md:text-left">
            <h1
              id="projects-heading"
              className="font-work-sans text-4xl font-black tracking-tight text-white md:text-6xl"
            >
              Projects
            </h1>
            <div className="flex justify-center md:justify-start">
              <p className="mt-4 text-lg xl:text-2xl font-work-sans font-bold tracking-tight text-cyan-200">
                {projects.title}
              </p>
            </div>

            <p className="mt-5 max-w-[60ch] text-sm sm:text-base md:text-lg font-roboto text-center sm:text-left leading-8 text-slate-300">
              {projects.summary}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="portfolio-band px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          title="Selected Work"
          description="Real projects from SaaS, business websites, law firm systems, and e-commerce frontend work. Add future projects in the data file and the page updates automatically."
        />
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-5 lg:grid-cols-2">
          {projectCards.map((item) => (
            <CardProject key={item.id ?? item.title} project={item} />
          ))}
        </div>
      </div>

      <div className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          title="Interface Gallery"
          description="A quick look at implemented screens and layout work."
          inverted
        />
        <div className="mx-auto max-w-screen-xl">
          {projectGallery.map((item) => (
            <div
              key={item.alt}
              className={`${item.wrapperClassName} overflow-hidden rounded-md border border-white/10 bg-white/5 p-2 shadow-2xl`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes={item.sizes}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
