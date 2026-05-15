"use client";
import { motion } from "motion/react";
import { education } from "@/assets/data/db";
import TestimonialCard from "@/components/container/testimonial";
import SectionHeader from "@/components/layout/SectionHeader";
import EducationImg from "../../../components/svg/EducationImg";

export default function Cerification() {
  return (
    <section
      aria-labelledby="education-heading"
      className="portfolio-dark-band min-h-[calc(100vh-5rem)] overflow-hidden"
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
            <EducationImg />
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
              id="education-heading"
              className="font-work-sans text-5xl font-black tracking-tight text-white md:text-7xl"
            >
              Certification
            </h1>
            <div className="flex justify-center md:justify-start">
              <p className="mt-4 font-work-sans text-lg font-black tracking-tight text-cyan-200 xl:text-2xl">
                {education.degree} - {education.passingYear}
              </p>
            </div>

            <p className="mt-5 max-w-[60ch] text-center font-roboto text-sm leading-8 text-slate-300 sm:text-left sm:text-base md:text-lg">
              {education.uni} - {education.address}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="portfolio-band section-pad px-4 sm:px-6 lg:px-8">
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
