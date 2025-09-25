'use client'
import React from "react";
import { SocialMediaLinks } from "@/assets/data/db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


interface SocialMediaProps {
  backgroundColor?: string;
 className?: string;
  }

  
  export default function SocialMedia({ backgroundColor,className }: SocialMediaProps) {
  const [hoverIndex,setHoverIndex]=useState<number | null>(null);
  return (
    <div className={`text-[14px] ${ className}`}>
      {SocialMediaLinks.map((media, i) => (
        <a
          key={i}
          href={media.link}
          className={``}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}            
        >
          <span 
            className={` inline-flex justify-center items-center  rounded-full cursor-pointer text-[1.3rem] w-[2rem] h-[2rem]  mx-[5px] relative text-center select-none mb-[10px] text-white `}
            style={{
              
              backgroundColor: hoverIndex==i ? media.hoverColor : backgroundColor ||   media.backgroundColor,
              transition: "background-color 0.3s ease-in-out",
            }}
            >
              <title> {media.name}</title>
              <FontAwesomeIcon id="Fawesom" icon={media.icon} className={`h-4`}/>
          </span>

        </a>
      ))}
    </div>
  );
}
