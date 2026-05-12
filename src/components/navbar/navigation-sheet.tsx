import { Menu } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/assets/data/db";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import MuhammadFaisal from "../svg/faisaltechz";
import { choosenTheme } from "../util/theme";

export const NavigationSheet = () => {
  const theme = choosenTheme;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button aria-label="Open navigation menu" variant="outline" size="icon">
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="px-6 py-3"
        style={{ backgroundColor: theme.body }}
      >
        <Link href="/" aria-label="Muhammad Faisal home">
          <MuhammadFaisal className="mt-5" width={200} height={50} />
        </Link>

        <div className="mt-8 text-base space-y-4 text-white">
          <div>
            <div className="font-bold text-cyan-200">Portfolio</div>
            <ul className="mt-4 space-y-3 ml-1 pl-4 border-l border-white/15">
              {navItems.map((nav) => (
                <li key={nav.label}>
                  <SheetClose asChild>
                    <Link
                      href={nav.href}
                      className="flex items-center gap-2 rounded-md px-2 py-2 text-slate-200 transition hover:bg-white/10 hover:text-cyan-200"
                    >
                      <nav.icon
                        aria-hidden="true"
                        className="h-5 w-5 mr-2 text-muted-foreground"
                      />
                      {nav.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
