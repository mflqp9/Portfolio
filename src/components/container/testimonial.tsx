import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";
import React from "react";
import Image from "next/image";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  institute_name: string;
  certificate_name: string;
  certificate_detail: string;
};

interface CardProps {
  props?: Props;
}

const TestimonialCard = ({ props }:CardProps) => {
  return (
    <Card className="relative w-full max-w-md bg-gray-300 shadow-none border-none gap-0 pt-0 pb-4">
      <Quote className="absolute top-3 right-2 h-16 w-16 text-foreground/10 stroke-[1.5px]" />
      <CardHeader className="py-1">
        <div className=" items-center gap-3">
          <div className="w-[80%] mb-5">
            <img src="
https://www.nexusberry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freverse-logo.04ea8f53.png&w=640&q=75" alt="nxb"/>
            {/* <Image src="./nxb.png" alt="nxb" width={500} height={500}/> */}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-roboto italic leading-none font-semibold">
              {props?.institute_name}
            </span>
            <span className="text-sm font-roboto font-semibold italic leading-none">
              {props?.certificate_name}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[14px] font-work-sans font-normal text-gray-600">
          {props?.certificate_detail}
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
