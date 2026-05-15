import { easeInOut, motion } from "motion/react";
import Link from "next/link";
import type { InstituteProps } from "@/types/prop_type";

interface CardProps {
  props: InstituteProps;
}
export function CardExperience({ props }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.35, ease: easeInOut }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      className="surface-panel relative mx-0 grid min-h-34 overflow-hidden rounded-md md:grid-cols-[150px_1fr]"
    >
      <div className="flex min-h-28 items-center justify-center bg-slate-950 text-cyan-200">
        <span className="font-work-sans text-5xl font-black tracking-tight md:text-6xl">
          0{props.index + 1}
        </span>
      </div>

      <div className="h-full w-full p-5 md:p-7">
        <h3 className="font-work-sans text-xl font-black text-slate-950 lg:text-2xl">
          {props.title}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 md:text-[13px]">
          {props.institute}
        </p>
        <p className="mt-2 text-[12px] font-work-sans font-bold text-cyan-700 md:text-[14px]">
          {props.duration}
        </p>
        {props.technologies && props.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {props.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-black text-slate-700 shadow-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
        <p className="mt-4 text-sm leading-7 text-slate-600">{props.summary}</p>
        {props.highlights && props.highlights.length > 0 && (
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            {props.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
        {props.projectLinks && props.projectLinks.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {props.projectLinks.map((project) => (
              <Link
                key={project.url}
                target="_blank"
                rel="noopener noreferrer"
                href={project.url}
                className="font-black text-cyan-700 hover:text-slate-950 hover:underline"
              >
                {project.label}
              </Link>
            ))}
          </div>
        )}
        {props.url && (
          <p className="mt-5 text-sm">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={props.url}
              className="font-bold text-cyan-700 hover:text-slate-950 hover:underline"
            >
              View project
            </Link>
          </p>
        )}
      </div>
    </motion.article>
  );
}
