import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CSSProperties } from "react";
import { SocialMediaLinks } from "@/assets/data/db";

interface SocialMediaProps {
  backgroundColor?: string;
  className?: string;
}

export default function SocialMedia({
  backgroundColor,
  className,
}: SocialMediaProps) {
  return (
    <div className={`text-[14px] ${className ?? ""}`}>
      {SocialMediaLinks.map((media) => {
        const isExternal = media.link.startsWith("http");
        const style = {
          "--media-bg": backgroundColor || media.backgroundColor,
          "--media-hover-bg": media.hoverColor || media.backgroundColor,
        } as CSSProperties;

        return (
          <a
            key={media.name}
            href={media.link}
            aria-label={media.name}
            className="inline-flex"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <span
              aria-hidden="true"
              className="relative mx-[5px] mb-[10px] inline-flex h-9 w-9 cursor-pointer select-none items-center justify-center rounded-md border border-white/10 bg-[var(--media-bg)] text-center text-[1.3rem] text-white shadow-lg shadow-slate-950/15 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[var(--media-hover-bg)]"
              style={style}
            >
              <FontAwesomeIcon icon={media.icon} className="h-4" />
            </span>
            <span className="sr-only">{media.name}</span>
          </a>
        );
      })}
    </div>
  );
}
