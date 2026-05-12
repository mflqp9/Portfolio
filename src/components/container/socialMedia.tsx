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
              className="inline-flex justify-center items-center rounded-full cursor-pointer text-[1.3rem] w-[2rem] h-[2rem] mx-[5px] relative text-center select-none mb-[10px] text-white bg-[var(--media-bg)] transition-colors duration-300 ease-in-out hover:bg-[var(--media-hover-bg)]"
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
