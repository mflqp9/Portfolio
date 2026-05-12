"use client";
import { motion } from "motion/react";
import Image from "next/image";
import faisal from "@/assets/image/faisal.png";
import { CardContact } from "@/components/container/cardContact";

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="portfolio-grid min-h-[calc(100vh-4rem)] grid items-center justify-center scroll-smooth overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_0.72fr] gap-10">
        <motion.div
          className="my-auto h-auto w-full"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <div className="w-full grid flex-wrap items-center text-center justify-center md:justify-start md:text-left">
            <h1
              id="contact-heading"
              className="font-work-sans text-4xl font-black tracking-tight text-white md:text-6xl"
            >
              Contact Me
            </h1>

            <p className="mt-5 max-w-[60ch] text-sm sm:text-base md:text-lg font-roboto text-center md:text-left leading-8 text-slate-300">
              I'm available across my main social platforms. Send a message and
              I'll get back to you within 24 hours. I enjoy helping with React,
              Next.js, MERN stack, MySQL, and open-source development.
            </p>
          </div>

          <CardContact />
        </motion.div>

        <motion.div
          className="glass-panel relative mx-auto mt-10 flex h-[28rem] w-full max-w-[360px] items-end justify-center overflow-hidden rounded-md border-cyan-300/20 md:mt-0"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div className="absolute left-5 top-5 rounded-md bg-cyan-300 px-3 py-2 text-xs font-black text-slate-950">
            Available for web systems
          </div>
          <Image
            src={faisal}
            alt="Muhammad Faisal"
            width={360}
            height={420}
            priority
            className="relative z-10 h-auto w-[320px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
