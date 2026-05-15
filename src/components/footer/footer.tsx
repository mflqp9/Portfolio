import SocialMedia from "@/components/container/socialMedia";
import { Separator } from "@/components/ui/separator";
import type { Theme } from "@/types/prop_type";

interface FooterProps {
  theme?: Theme;
}

export default function Footer({ theme }: FooterProps) {
  return (
    <footer
      style={{ backgroundColor: theme?.dark }}
      className="border-t border-white/10 text-white"
    >
      <div className="container-xl">
        <Separator className="bg-white/10" />
        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 py-5 sm:flex-row">
          <p
            style={{ color: theme?.secondaryText }}
            className="text-center text-sm sm:text-start"
          >
            {`Copyright ${new Date().getFullYear()} Designed & Developed by Muhammad Faisal`}
          </p>

          <div className="flex items-center gap-5 text-muted-foreground">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
}
