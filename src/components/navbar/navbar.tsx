import Link from "next/link";
import type { Theme } from "@/types/prop_type";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

interface NavbarProps {
  theme: Theme;
}
export default function Navbar({ theme }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 min-h-16 border-b border-white/10 bg-[#06131d]/85 text-white backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        style={{ backgroundColor: `${theme.body}dd` }}
        className="h-16"
      >
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              aria-label="Muhammad Faisal home"
              className="h-10 w-56 flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] transition hover:border-cyan-300/50"
            >
              <span className="grid size-7 place-items-center border border-cyan-300 text-sm font-black text-white">
                MF
              </span>
              <span className="font-work-sans text-sm font-bold text-white">
                Muhammad Faisal
              </span>
            </Link>
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
    </header>
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
