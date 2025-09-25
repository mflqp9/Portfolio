import { Separator } from "@/components/ui/separator";
// import {
//   DribbbleIcon,
//   GithubIcon,
//   TwitchIcon,
//   TwitterIcon,
// } from "lucide-react";
import Link from "next/link";
import MuhammadFaisal from "../svg/faisaltechz";
import { navFooter } from "@/assets/data/db";
import SocialMedia from "@/components/container/socialMedia";
import GreetTitle from "../svg/title";

const footerLinks = navFooter;
type Theme = {
  text: string;
  body: string;
  highlight: string;
  secondaryText?: string;
  jacketColor: string;
};

interface FooterProps {
  theme?: Theme;
}
export default function Footer({ theme }: FooterProps) {
  return (
    <footer
      style={{ backgroundColor: theme?.body }}
      className="dark:border-t dark bg-background text-foreground "
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="py-5 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6">
        </div>
        <Separator />
        <div 
        
        className="py-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-12">
          {/* Copyright */}
          <span
            style={{ color: theme?.secondaryText }}
            className="text-muted-foreground text-center sm:text-start"
          >Copyright 
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Faisal Techz
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
}
