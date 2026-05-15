import { SquareArrowOutDownRight } from "lucide-react";
import { easeInOut, motion } from "motion/react";
import Link from "next/link";
import type { CProjProps } from "@/types/prop_type";

interface CardProjectProps {
  project: CProjProps;
}
export function CardProject({ project }: CardProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.35, ease: easeInOut }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.96 }}
      className="surface-panel group grid min-h-[23rem] gap-1 overflow-hidden rounded-md transition-shadow hover:shadow-[0_30px_70px_rgba(15,23,42,0.16)]"
    >
      <div className="flex h-16 w-full items-center justify-between bg-slate-950 px-5">
        <span className="font-work-sans text-lg font-black text-cyan-200">
          {project.id}
        </span>
        <SquareArrowOutDownRight
          aria-hidden="true"
          className="h-5 w-5 text-amber-300 transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      <div className="h-full w-full p-5 md:p-6">
        <h3 className="font-work-sans text-2xl font-black tracking-tight text-slate-950">
          {project.title}
        </h3>
        {project.role && (
          <p className="mt-2 text-[12px] font-work-sans font-bold uppercase tracking-[0.18em] text-cyan-700">
            {project.role}
          </p>
        )}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-black text-slate-700 shadow-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {project.summary}
        </p>
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
        {project.url && (
          <p className="mt-5 text-sm">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={project.url}
              className="inline-flex items-center gap-2 font-black text-cyan-700 hover:text-slate-950 hover:underline"
            >
              View project
              <SquareArrowOutDownRight className="h-3.5 w-3.5" />
            </Link>
          </p>
        )}
      </div>
    </motion.article>
  );
}
