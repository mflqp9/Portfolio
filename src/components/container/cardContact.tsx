import {
  Github,
  Linkedin,
  Mail,
  MapPinCheckInside,
  Smartphone,
  SquareArrowOutDownRight,
} from "lucide-react";
import { easeInOut, motion } from "motion/react";
export function CardContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.1, ease: easeInOut }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      className="glass-panel mt-8 max-w-2xl rounded-md p-5 text-white"
    >
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="font-work-sans text-xl font-black">Let's build</h2>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
          Lahore, PK
        </span>
      </div>

      <div className="h-full w-full">
        <SquareArrowOutDownRight aria-hidden="true" className="w-5 h-5 mb-1" />
        <div className="flex">
          <ul className="space-y-1">
            <li className="flex justify-start gap-2">
              <MapPinCheckInside aria-hidden="true" />
              <p className="text-sm text-slate-200">
                J2 Block Johar Town Lahore.
              </p>
            </li>
            <li className="flex flex-wrap text-sm gap-x-4 gap-y-2 pt-2">
              <a className="flex items-center gap-2" href="tel:+923008684287">
                <Smartphone aria-hidden="true" />
                +92 300 86 84 287
              </a>
              <a
                className="flex items-center gap-2"
                href="mailto:mflqp9@gmail.com"
              >
                <Mail aria-hidden="true" />
                mflqp9@gmail.com
              </a>
            </li>
            <li className="flex text-sm gap-x-4 pt-2">
              <a
                href="https://github.com/mflqp9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-200 hover:text-white"
              >
                <Github aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mflqp9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-200 hover:text-white"
              >
                <Linkedin aria-hidden="true" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
