"use client";
import { motion } from "motion/react";
import Image from "next/image";
import faisal from "@/assets/image/faisal.png";
import { CardContact } from "@/components/container/cardContact";

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="portfolio-grid grid min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden scroll-smooth px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="container-xl grid grid-cols-1 gap-12 md:grid-cols-[1fr_0.72fr]">
        <motion.div
          className="my-auto h-auto w-full"
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <div className="grid w-full flex-wrap items-center justify-center text-center md:justify-start md:text-left">
            <h1
              id="contact-heading"
              className="font-work-sans text-5xl font-black tracking-tight text-white md:text-7xl"
            >
              Contact Me
            </h1>

            <p className="mt-5 max-w-[60ch] text-center font-roboto text-sm leading-8 text-slate-300 sm:text-base md:text-left md:text-lg">
              I'm available across my main social platforms. Send a message and
              I'll get back to you within 24 hours. I enjoy helping with React,
              Next.js, MERN stack, MySQL, and open-source development.
            </p>
          </div>

          <CardContact />
        </motion.div>

        <motion.div
          className="premium-border glass-panel relative mx-auto mt-10 flex h-[30rem] w-full max-w-[390px] items-end justify-center overflow-hidden rounded-md border-cyan-300/20 md:mt-0"
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div className="absolute left-5 top-5 z-20 rounded-md bg-cyan-300 px-3 py-2 text-xs font-black text-slate-950">
            Available for web systems
          </div>
          <div className="absolute right-5 top-20 z-20 rounded-md border border-emerald-300/25 bg-slate-950/80 px-3 py-2 font-mono text-xs text-emerald-200">
            response &lt; 24h
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
