import { Separator } from "@/components/ui/separator";
import { navFooter } from "@/assets/data/db";
import SocialMedia from "@/components/container/socialMedia";
import type { Theme } from "@/types/prop_type";
const footerLinks = navFooter;
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
        <div className="py-2 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6">
        </div>
        <Separator />
        <div 
        
        className="py-0.5 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-12">
          {/* Copyright */}
          {/* <span
            style={{ color: theme?.secondaryText }}
            className="text-muted-foreground text-center sm:text-start"
          >Copyright 
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Made with
<Heart/>
            </Link>
            . All rights reserved.
          </span> */}
          <span
            style={{ color: theme?.secondaryText }}
            className="flex text-muted-foreground text-center sm:text-start"
          >
        {`© ${new Date().getFullYear()} Designed & Developed by Muhammad Faisal`}
{/* <Heart  className="w-5 h-5 mx-2"/> */}
            {/* <Link href="/" target="_blank" className="flex"> */}
            {/* </Link> */}
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
}
