"use client";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  MonitorCog,
  ServerCog,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { greeting } from "@/assets/data/db";
import faisal from "@/assets/image/faisal.png";
import SocialMedia from "@/components/container/socialMedia";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const capabilities = [
    { icon: Code2, title: "Frontend", detail: "React / Next.js" },
    { icon: ServerCog, title: "Backend", detail: "Node APIs" },
    { icon: Database, title: "Data", detail: "SQL / MongoDB" },
    { icon: MonitorCog, title: "Desktop", detail: "VB.NET systems" },
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className="portfolio-grid relative min-h-[calc(100vh-4rem)] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="container-xl grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-12 py-14 md:grid-cols-[1fr_0.92fr] lg:py-20">
        <motion.div
          className="my-auto w-full"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <div className="w-full grid flex-wrap items-center justify-center text-center sm:text-left md:justify-start">
            <h1
              id="hero-heading"
              className="max-w-4xl text-balance font-work-sans text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Muhammad Faisal
              <span className="block accent-text">Full-Stack Developer</span>
            </h1>
          </div>

          <div className="flex justify-center md:justify-start">
            <p className="mt-6 max-w-[62ch] px-2 text-center font-roboto text-base leading-8 text-slate-300 sm:text-lg md:px-0 md:text-left">
              {greeting.subTitle}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-md bg-cyan-300 px-5 text-sm font-black text-slate-950 shadow-[0_18px_44px_rgba(34,211,238,0.24)] hover:bg-cyan-200"
            >
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
                <ArrowDown
                  aria-hidden="true"
                  className="!h-4 !w-4 sm:!h-5 sm:!w-5"
                />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-md border-white/15 bg-white/5 px-5 text-sm font-black text-white hover:bg-white/10 hover:text-cyan-100"
            >
              <a href="/projects">
                View Projects
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="mt-7 flex justify-center md:justify-start">
            <SocialMedia className="pt-2" />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 text-left lg:grid-cols-4">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="glass-panel rounded-md px-4 py-4"
              >
                <item.icon className="mb-3 h-5 w-5 text-cyan-200" />
                <p className="font-work-sans text-sm font-black text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center"
          initial={false}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
        >
          <div className="premium-border glass-panel absolute inset-8 rounded-md" />
          <div className="absolute left-0 top-12 z-20 hidden rounded-md border border-cyan-300/25 bg-slate-950/90 px-4 py-3 font-mono text-xs text-slate-200 shadow-2xl sm:block">
            <span className="text-cyan-300">import</span> businessLogic
          </div>
          <div className="absolute bottom-14 right-0 z-20 hidden rounded-md border border-emerald-300/25 bg-slate-950/90 px-4 py-3 font-mono text-xs text-slate-200 shadow-2xl sm:block">
            build success in 1.2s
          </div>
          <div className="absolute right-4 top-24 z-10 hidden w-64 rounded-md border border-white/10 bg-slate-950/78 p-4 font-mono text-[11px] leading-6 text-slate-300 shadow-2xl backdrop-blur md:block">
            <p>
              <span className="text-pink-300">const</span>{" "}
              <span className="text-cyan-200">developer</span>{" "}
              <span className="text-slate-500">=</span> {"{"}
            </p>
            <p className="pl-4">
              stack: <span className="text-emerald-300">"MERN + Next"</span>,
            </p>
            <p className="pl-4">
              focus: <span className="text-amber-300">"business systems"</span>
            </p>
            <p>{"}"}</p>
          </div>
          <div className="relative z-10 flex h-[88%] w-[72%] items-end justify-center overflow-hidden rounded-md bg-gradient-to-b from-slate-800/30 to-slate-950/70">
            <Image
              src={faisal}
              alt="Muhammad Faisal"
              priority
              width={430}
              height={520}
              className="h-auto w-[92%] object-contain drop-shadow-[0_28px_60px_rgba(34,211,238,0.2)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
