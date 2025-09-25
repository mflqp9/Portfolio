import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { navItems } from "@/assets/data/db";



export const NavMenu = (props: NavigationMenuProps) => (


  <NavigationMenu {...props}>
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {navItems.map((item) => (
          
          <NavigationMenuItem className="font-roboto" key={item.label}>
              <NavigationMenuLink asChild>
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          
        ))}
      </NavigationMenuList>    
  </NavigationMenu>
        
);
