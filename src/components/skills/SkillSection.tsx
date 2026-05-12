"use client";

import { motion, useReducedMotion } from "motion/react";
import { skills } from "@/assets/data/db";
import CssIcon from "./../icons/Css";
import ExpressIcon from "./../icons/Express";
import HtmlIcon from "./../icons/Html";
import JavaScriptsIcon from "./../icons/JavaScript";
import MongodbIcon from "../icons/Mongodb";
import NextIcon from "./../icons/Next";
import NodeIcon from "./../icons/Node";
import NpmIcon from "./../icons/Npm";
import ReactIcon from "./../icons/React";
import TypeScriptIcon from "./../icons/TypeScript";
import TailwindIcon from "../icons/tailwinds";
import CloudInfraImg from "../svg/CloudInfraImg";
import DataScienceImg from "../svg/DataScienceImg";
import DesignImg from "../svg/DesignImg";
import FullStackImg from "../svg/FullStackImg";

type Theme = {
  text: string;
  secondaryText: string;
  headerColor: string;
};

interface SkillSectionProps {
  theme: Theme;
}

function GetSkillSvg({ fileName, theme }: { fileName: string; theme: Theme }) {
  switch (fileName) {
    case "DataScienceImg":
      return <DataScienceImg theme={theme} />;
    case "FullStackImg":
      return <FullStackImg theme={theme} />;
    case "CloudInfraImg":
      return <CloudInfraImg theme={theme} />;
    default:
      return <DesignImg theme={theme} />;
  }
}

export default function SkillSection({ theme }: SkillSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : { duration: 0.5 };

  return (
    <div>
      {skills.data.map((skill) => (
        <div
          key={skill.title}
          className="mx-auto mb-8 grid max-w-screen-xl grid-cols-1 overflow-hidden rounded-md border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:grid-cols-2"
        >
          <motion.div
            initial={false}
            transition={transition}
            className="order-2 flex items-center justify-center bg-slate-950 p-8 md:order-1 [&>*]:h-auto [&>*]:max-w-full"
          >
            <GetSkillSvg fileName={skill.fileName} theme={theme} />
          </motion.div>

          <div className="order-1 p-7 md:order-2 md:p-10">
            <motion.h3
              initial={false}
              transition={transition}
              className="text-center font-work-sans text-2xl font-black leading-tight text-slate-950 md:text-left lg:text-4xl"
            >
              {skill.title}
            </motion.h3>

            {skill.type === "DesktopApp" && (
              <>
                {/* <VbNetIcon /> */}
                {/* <CsharpIcon /> */}
                {/* <SqlIcon /> */}
                {/* <SapReportIcon /> */}
              </>
            )}

            <motion.div
              initial={false}
              transition={transition}
              className="mt-2"
            >
              <p className="font-roboto text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                {skill.technologies}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
                {skill.type === "WebApp" && (
                  <>
                    {/* "Icon for Web Development " */}
                    <MongodbIcon />
                    <ExpressIcon />
                    <ReactIcon />
                    <NodeIcon />
                    <JavaScriptsIcon />
                    <NpmIcon />
                    <HtmlIcon />
                    <CssIcon />
                    <TailwindIcon />
                    <TypeScriptIcon />
                    <NextIcon />
                  </>
                )}
              </div>
              {skill.skills.map((skillSentence: string) => (
                <p
                  key={skillSentence}
                  className="mt-4 border-l-2 border-cyan-300 pl-4 text-center text-[14px] leading-7 text-slate-600 md:text-left md:text-[16px]"
                >
                  {skillSentence}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
