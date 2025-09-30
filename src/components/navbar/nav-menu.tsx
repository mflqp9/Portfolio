import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { navItems } from "@/assets/data/db";
import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-1 space-x-0 text-sm">
      {navItems.map((nav) => (
      <NavigationMenuItem key={nav.label}>
          <Button variant="ghost">
  
            <Link href={nav.href} className="font-roboto" >{nav.label}</Link>
          </Button>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

// const ListItem = React.forwardRef<
//   React.ElementRef<typeof Link>,
//   React.ComponentPropsWithoutRef<typeof Link> & { icon: LucideIcon }
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <Link
//           ref={ref}
//           className={cn(
//             "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <props.icon className="mb-4 size-6" />
//           <div className="text-sm font-semibold leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";
