import { Quote } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {
  institute_name: string;
  certificate_name: string;
  certificate_detail: string;
};

interface CardProps {
  props: Props;
}

const TestimonialCard = ({ props }: CardProps) => {
  return (
    <Card className="surface-panel relative w-full overflow-hidden rounded-md border-slate-200 bg-white shadow-none gap-0 pt-0 pb-5">
      <Quote className="absolute top-5 right-4 h-14 w-14 text-cyan-900/10 stroke-[1.5px]" />
      <CardHeader className="border-b border-slate-100 bg-slate-950/95 py-4">
        <div className=" items-center gap-3">
          <div className="w-[80%] mb-5">
            <Image
              src="/nxb.png"
              alt="Nexus Berry Training & Solution"
              width={500}
              height={160}
              className="h-auto w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-roboto leading-none font-semibold text-cyan-100">
              {props.institute_name}
            </span>
            <span className="text-sm font-roboto font-semibold leading-none text-white">
              {props.certificate_name}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[14px] font-work-sans font-normal leading-7 text-slate-600">
          {props.certificate_detail}
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
