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
      className="portfolio-band section-pad flex w-full flex-col items-center px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        title="Technologies I Work With"
        description="A focused mix of web platforms, APIs, databases, and desktop business systems, designed for real operations instead of demo-only screens."
      />
      <SkillSection theme={theme} />
    </div>
  );
}
