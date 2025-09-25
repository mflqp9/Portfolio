import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu} from "lucide-react";
import MuhammadFaisal from "../svg/faisaltechz";
import { NavMenu } from "./nav-menu";
import { choosenTheme } from "../util/theme";


export const NavigationSheet = () => {
  const theme=choosenTheme;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />        
        </Button>
      </SheetTrigger>
      <SheetContent style={{backgroundColor:theme.secondaryText}}>      
        <MuhammadFaisal className="mt-5" width={200} height={50} />  
        <NavMenu orientation="vertical"/>
      </SheetContent>
    </Sheet>
  );
};

// past buttom code to SheetPrimitive.Content

// SheetPrimitive.Content


// **<VisuallyHidden>
// **<SheetPrimitive.Title>Your Hidden Sheet Title</SheetPrimitive.Title>
// **</VisuallyHidden>


// SheetPrimitive.Content