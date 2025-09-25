import type { InstituteProps } from "@/types/them_prop";
import React from "react";
import { choosenTheme } from "../util/theme";
import { easeInOut, motion } from "motion/react";

interface CardProps {
  props: InstituteProps;
}
export function CardExperience({ props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.1, ease: easeInOut }}
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.96 }}
      className="max-w-[60%] min-h-34 rounded-2xl flex gap-1 border border-gray-100 shadow-[0_0_15px_3px_rgba(0,0,0,0.20)]"
    >
      {/* Header */}
      <div className=" min-h-34  w-[30%] bg-gray-200 rounded-tl-2xl rounded-bl-2xl flex justify-center-safe items-center">
        <h1 className=" text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-extrabold underline font-work-sans">
          0{props.index + 1}
        </h1>
      </div>

      {/* Content */}
      <div className="h-full w-[100%] rounded-tr-2xl rounded-br-2xl">
        <h1 className="text-[14px] md:text-xl lg:text-2xl pl-2  font-work-sans font-medium">
          {props.title}
        </h1>
        <h1 className="text-xs md:text-[14px] lg:text-[16px] pl-2 mt-[-5] font-roboto font-light">
          {props.institute}
        </h1>
        <h1
          style={{ color: choosenTheme.jacketColor }}
          className="text-[12px] md:text-[14px] lg:text-[14px] pl-2 mb-2 mt-[-5] italic underline font-work-sans font-medium"
        >
          {props.duration}
        </h1>
        <p className="text-xs p-2 text-c">{props.summary}</p>
      </div>
    </motion.div>
  );
}
