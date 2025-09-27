import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import MuhammadFaisal from "../svg/faisaltechz";
import { NavMenu } from "./nav-menu";
import { navItems } from "@/assets/data/db";
import { choosenTheme } from "../util/theme";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

export const NavigationSheet = () => {
  const theme = choosenTheme;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="px-6 py-3"
        style={{ backgroundColor: theme.body }}
      >
        <MuhammadFaisal className="mt-5" width={200} height={50} />
        
        <div className="mt-2 text-base space-y-4">
          <div>
            <div className="font-bold">Portfolio</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {navItems.map((nav) => (
                <li key={nav.label}>
                  <Link href={nav.href} className="flex items-center gap-2">
                    <nav.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
