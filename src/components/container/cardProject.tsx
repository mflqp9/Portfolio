import React from "react";
import { choosenTheme } from "../util/theme";
import { easeInOut, motion } from "motion/react";
import { Key, SquareArrowOutDownRight } from "lucide-react";
import Link from "next/link";
import type { CProjProps } from "@/types/prop_type";
interface CardProjectProps{
  props:CProjProps
}
export function CardProject({props}:CardProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.1, ease: easeInOut }}
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.96 }}
      style={{backgroundColor:choosenTheme.highlight}}
      className="max-w-[24rem] min-h-[12rem] rounded-2xl grid gap-1 border border-gray-100 shadow-[0_0_15px_3px_rgba(0,0,0,0.20)] mt-4 mb-4"
    >
      {/* Header */}
      <div className=" max-h-[20px]  w-[100%] bg-gray-100 rounded-tl-2xl rounded-tr-2xl flex justify-start pl-2 items-center">
        <h1 className=" text-xs md:text-[18px] font-normal font-work-sans text-gray-300">
          {props.id}
        </h1>
      </div>

      {/* Content */}
      <div className="h-full w-[100%] rounded-tr-2xl rounded-br-2xl pl-2">
          <SquareArrowOutDownRight className="mb-2"/>
        <h1 className="text-[14px] md:text-[16px] lg:text-xl  font-work-sans font-medium">
        {props.title}
        </h1>
        
        {/* <Link href="/" className="text-blue-500 text-[10px] border border-gray-400 rounded p-1" >More Info...</Link> */}
        <p className="text-xs p-2">{props.summary}</p>
               {
        props.url && (
          <span className="text-sm">click to open : <Link target="_blank" rel="noopener noreferrer" href={props.url} className="text-blue-500 hover:underline" >Visit Tailor Project</Link></span>
        )}
      </div>
    </motion.div>
  );
}
