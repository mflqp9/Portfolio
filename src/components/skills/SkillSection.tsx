"use client";

import { motion } from "motion/react";
//import SoftwareSkill from "@/components/softwareSkills/SoftwareSkill";
import { skills } from "@/assets/data/db"; // JSON data
import DataScienceImg from "../svg/DataScienceImg";
import FullStackImg from "../svg/FullStackImg";
import CloudInfraImg from "../svg/CloudInfraImg";
import DesignImg from "../svg/DesignImg";

import MongodbIcon from "../icons/Mongodb"; //SVG Icon
import ExpressIcon from "./../icons/Express"; //SVG Icon
import ReactIcon from "./../icons/React"; //SVG Icon
import NodeIcon from "./../icons/Node"; //SVG Icon
import JavaScriptsIcon from "./../icons/JavaScript"; //SVG Icon
import NpmIcon from "./../icons/Npm"; //SVG Icon
import HtmlIcon from "./../icons/Html"; //SVG Icon
import CssIcon from "./../icons/Css"; //SVG Icon
import TailwindIcon from "../icons/tailwinds"; //SVG Icon
import TypeScriptIcon from "./../icons/TypeScript"; //SVG Icon
import NextIcon from "./../icons/Next"; //SVG Icon
import CsharpIcon from "./../icons/Csharp";
import SqlIcon from "./../icons/Sql";
import VbNetIcon from "./../icons/Vb";
import SapReportIcon from "./../icons/Sap";
import { useEffect, useState } from "react";

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
  const [isMobile,setIsMobile]= useState(false)

    useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(false); // md and above
      } else {
        setIsMobile(true); // below md
      }
    };

    // Run on mount
    handleResize();

    // Listen for screen resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div>
      {skills.data.map((skill,i) => (
        <div key={i} className={` flex flex-col md:flex-row overflow-hidden mb-8`}>
          {/* Image */}
          <motion.div
          
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // animate={{ opacity: 1, x: 0 }}
            transition={isMobile ? {delay:0.8} :{ duration: 0.5 }}
            className="flex-1 order-2 md:order-1 [&>*]:max-w-full [&>*]:h-auto [&>*]:mt-0 md:[&>*]:mt-[100px]"
          >
            <GetSkillSvg fileName={skill.fileName} theme={theme} />
          </motion.div>

          {/* Text */}
          <div className="flex-1 ml-0 md:ml-[50px] m-5 order-1 md:order-2">
            <motion.h1
              // initial={{ opacity: 0, x: 50 }}
              initial={{ opacity: 0, y:-50 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={isMobile ? { duration: 0.5 }: { delay: 0.6 }}
              className="text-2xl lg:text-3xl font-semibold font-work-sans leading-normal text-center md:text-left"
              style={{ color: theme.text }}
            >
              {skill.title}
            </motion.h1>
                
                {skill.type==="DesktopApp" && (

                  <>
                  {/* <VbNetIcon /> */}
                    {/* <CsharpIcon /> */}
                    {/* <SqlIcon /> */}
                    {/* <SapReportIcon /> */}
                    </>
                    )
                }
               
              
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <SoftwareSkill logos={skill.softwareSkills} />
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y:200}}
              whileInView={{ opacity: 1, y:0  }}
              transition={isMobile ? {delay:0.6}: {  delay: 0.7 }}
              className="mt-[-5]"
            >
              <p
                style={{ color: theme.headerColor }}
                className="font-roboto font-normal text-[12px]"
              >
                {skill.technologies}
              </p>
                          <div className="flex justify-start flex-wrap gap-x-2">
              {skill.type==="WebApp" &&(
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
                  )
                }
                </div>
              {skill.skills.map((skillSentence: string, j: number) => (
                <p
                  key={j}
                  className="text-[14px] md:text-[16px] leading-normal text-center md:text-left mt-2 mb-2"
                  style={{ color: theme.secondaryText }}
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