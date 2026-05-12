"use client";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  ServerCog,
} from "lucide-react";
import { motion } from "motion/react";
import { greeting } from "@/assets/data/db";
import SocialMedia from "@/components/container/socialMedia";
import { Button } from "@/components/ui/button";
import ManOnTable from "../svg/manOnTable";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="portfolio-grid relative min-h-[calc(100vh-4rem)] overflow-hidden"
    >
      <div className="w-full max-w-screen-xl mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_0.86fr] lg:px-8">
        <motion.div
          className="my-auto w-full"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <p className="flex justify-center md:justify-start items-center text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            {greeting.title}
          </p>
          <div className="mt-5 w-full grid flex-wrap justify-center md:justify-start items-center text-center sm:text-left">
            <h1
              id="hero-heading"
              className="max-w-4xl text-balance font-work-sans text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Full-stack software for serious business workflows.
            </h1>
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              {["SaaS platforms", "MERN apps", "Desktop systems"].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-100"
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
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
              className="h-12 rounded-md bg-cyan-300 px-5 text-sm font-bold text-slate-950 shadow-[0_18px_40px_rgba(32,211,255,0.24)] hover:bg-cyan-200"
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
              className="h-12 rounded-md border-white/15 bg-white/5 px-5 text-sm font-bold text-white hover:bg-white/10 hover:text-cyan-100"
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

          <div className="mt-9 grid grid-cols-3 gap-3 text-left">
            {[
              { icon: Code2, label: "React / Next.js" },
              { icon: ServerCog, label: "Node APIs" },
              { icon: Database, label: "SQL / MongoDB" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-panel rounded-md px-3 py-4 text-center"
              >
                <item.icon className="mx-auto mb-2 h-5 w-5 text-cyan-200" />
                <p className="text-[11px] font-semibold text-slate-200 md:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center"
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
        >
          <div className="glass-panel absolute inset-6 rotate-3 rounded-md" />
          <div className="absolute left-0 top-12 rounded-md border border-cyan-300/30 bg-slate-950/85 px-4 py-3 text-xs text-slate-200 shadow-2xl">
            <span className="text-cyan-300">deploy</span> production SaaS
          </div>
          <div className="absolute bottom-12 right-0 rounded-md border border-amber-300/30 bg-slate-950/85 px-4 py-3 text-xs text-slate-200 shadow-2xl">
            REST APIs + data workflows
          </div>
          <div className="relative z-10 [&_svg]:drop-shadow-[0_24px_55px_rgba(32,211,255,0.22)]">
            <ManOnTable />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
