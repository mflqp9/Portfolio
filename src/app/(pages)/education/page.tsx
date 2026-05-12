"use client";
import { motion } from "motion/react";
import { education } from "@/assets/data/db";
import TestimonialCard from "@/components/container/testimonial";
import SectionHeader from "@/components/layout/SectionHeader";
import EducationImg from "../../../components/svg/EducationImg";

export default function Education() {
  return (
    <section
      aria-labelledby="education-heading"
      className="portfolio-dark-band min-h-[calc(100vh-5rem)] overflow-hidden"
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
            <EducationImg />
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
              id="education-heading"
              className="font-work-sans text-4xl font-black tracking-tight text-white md:text-6xl"
            >
              Education
            </h1>
            <div className="flex justify-center md:justify-start">
              <p className="mt-4 text-lg xl:text-2xl font-work-sans font-bold tracking-tight text-cyan-200">
                {education.degree} - {education.passingYear}
              </p>
            </div>

            <p className="mt-5 max-w-[60ch] text-sm sm:text-base md:text-lg font-roboto text-center sm:text-left leading-8 text-slate-300">
              {education.uni} - {education.address}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="portfolio-band px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          title="Certificates"
          description="Training and internships that strengthened my MERN stack development foundation."
        />
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 md:grid-cols-2">
          {education.certifications.map((cert) => (
            <TestimonialCard key={cert.certificate_name} props={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
