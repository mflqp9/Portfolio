import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import MuhammadFaisal from "../svg/faisaltechz";
import { choosenTheme } from "../util/theme";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { Theme } from "@/types/prop_type";

interface NavbarProps{
  theme:Theme
}
export default function Navbar({theme}:NavbarProps) {
  return (
    <div className="min-h-16 bg-muted">
      <nav style={{ backgroundColor:theme.body }} className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <div className=" w-64 h-10 flex justify-center">
              <span className="text-red-700 text-3xl"> &lt; </span>
              <MuhammadFaisal className=" w-48 hover:w-54 not-hover:transition-all hover:transition-all ease-in-out" />
              <span className="text-red-700 text-3xl">&gt; </span>
            </div>
            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />
          </div>

          <div className="flex items-center gap-3">
            {/* <Button>
             <ArrowUpRight />
            </Button> */}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
    // <nav style={{ backgroundColor:theme.body }} className="h-16 bg-background border-b">
    //   <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-0 sm:px-6 lg:px-6">
    //     <div className=" w-64 h-10 flex justify-center">
    //       <span className="text-red-700 text-3xl">
    //       &lt;
    //       </span>
    //     <MuhammadFaisal  className=" w-48 hover:w-54 not-hover:transition-all hover:transition-all ease-in-out"/>
    //     <span className="text-red-700 text-3xl">
    //       /&gt;
    //       </span>
    //     </div>
    //     {/* Desktop Menu */}
    //     <NavMenu className="hidden md:block" />
    //     <div className="flex items-center gap-3">
    //       {/* Mobile Menu */}
    //       <div className="md:hidden">
    //         <NavigationSheet />
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
