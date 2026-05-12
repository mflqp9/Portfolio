"use client";

import SectionHeader from "../layout/SectionHeader";
import SkillSection from "./SkillSection";

type Theme = {
  text: string;
  body: string;
  highlight: string;
  secondaryText: string;
  headerColor: string;
};

interface SkillsProps {
  theme: Theme;
}

export default function Skills({ theme }: SkillsProps) {
  return (
    <div
      id="skills"
      className="portfolio-band w-full flex flex-col items-center px-6 py-20 xl:px-12"
    >
      <SectionHeader
        title="What I Build"
        description="A focused mix of web platforms, APIs, databases, and desktop business systems, designed for real operations instead of demo-only screens."
      />
      <SkillSection theme={theme} />
    </div>
  );
}
