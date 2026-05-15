import Link from "next/link";
import type { Theme } from "@/types/prop_type";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

interface NavbarProps {
  theme: Theme;
}
export default function Navbar({ theme }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 min-h-16 border-b border-white/10 bg-[#050b12]/82 text-white shadow-[0_18px_50px_rgba(2,6,23,0.22)] backdrop-blur-2xl">
      <nav
        aria-label="Main navigation"
        style={{ backgroundColor: `${theme.body}8f` }}
        className="h-16"
      >
        <div className="container-xl flex h-full items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              aria-label="Muhammad Faisal home"
              className="premium-border flex h-11 w-[13.5rem] items-center justify-center gap-2 rounded-md bg-white/[0.045] transition hover:bg-white/[0.075]"
            >
              <span className="grid size-7 place-items-center rounded-sm bg-cyan-300 text-sm font-black text-slate-950">
                MF
              </span>
              <span className="font-work-sans text-sm font-black text-white">
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
