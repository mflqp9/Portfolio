import React from "react";
import { choosenTheme } from "../util/theme";
import { easeInOut, motion } from "motion/react";
import {
  SquareArrowOutDownRight,
  MapPinCheckInside,
  Github,
  Linkedin,
  Smartphone,
  Mail
} from "lucide-react";
export function CardContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.1, ease: easeInOut }}
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.96 }}
      style={{ backgroundColor: choosenTheme.highlight }}
      className="max-w-[24rem] min-h-[12rem] rounded-2xl grid gap-1 border border-gray-100 shadow-[0_0_15px_3px_rgba(0,0,0,0.20)]"
    >
      {/* Header */}
      <div className=" max-h-[20px]  w-[100%] bg-gray-100 rounded-tl-2xl rounded-tr-2xl flex justify-start pl-2 items-center">
        <h1 className=" text-xs md:text-[18px] font-normal font-work-sans text-gray-100">
          01
        </h1>
      </div>

      {/* Content */}
      <div className="h-full w-[100%] rounded-tr-2xl rounded-br-2xl pl-2">
        <SquareArrowOutDownRight className=" w-5 h-5 mb-1" />
        <div className="flex">
          <ul className="space-y-1">
            <li className="flex justify-start">
              <MapPinCheckInside />
              <p className="text-xs pl-2">
                {" "}
                 J2 Block Johar Town Lahore.
              </p>
            </li>
            <li className="flex text-xs">
              <Smartphone />
              <p className="pl-2 mt-1">
              +92 300 86 84 287
              </p>
              <Mail className="ml-5"/>
              <p className="text-xs pl-2 mt-1">
                mflqp9@gmail.com
              </p>
            </li>
            <li className="flex text-xs">
              <Github />
              <a href="https://github.com/mflqp9/" className="text-xs pl-2 mt-1">
                Github
              </a>
                 <Linkedin className="ml-5"/>
              <a href="https://linkedin.com/in/mflqp9/" className="text-xs pl-2 mt-1">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
