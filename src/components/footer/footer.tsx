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
      <div className="max-w-screen-xl mx-auto">
        <Separator className="bg-white/10" />
        <div className="py-5 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-12">
          <p
            style={{ color: theme?.secondaryText }}
            className="text-center sm:text-start text-sm"
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
