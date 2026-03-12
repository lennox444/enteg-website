import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl",
      "bg-bg-dark [box-shadow:0_2px_4px_rgba(0,0,0,.15),0_12px_24px_rgba(0,0,0,.15)]",
      className,
    )}
  >
    <div className="absolute inset-0">{background}</div>
    {/* Gradient overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-1 p-6 pt-8 transition-all duration-300 group-hover:-translate-y-10 mt-auto">
      <Icon className="h-9 w-9 origin-left transform-gpu text-brand-blue transition-all duration-300 ease-in-out group-hover:scale-75 mb-2" />
      <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-brand-blue leading-none">
        {name}
      </h3>
      <p className="max-w-lg text-white text-sm leading-relaxed mt-1">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto font-semibold text-sm uppercase tracking-wide">
        <a href={href}>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>

    {/* Hover tint */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-brand-blue/5" />
  </div>
);

export { BentoCard, BentoGrid };
