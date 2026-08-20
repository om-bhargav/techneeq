import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  ref?: any;
}

function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "bg-background px-4 md:px-10 lg:px-14",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionBodyProps {
  children: ReactNode;
  className?: string;
}

function SectionBody({
  children,
  className,
}: SectionBodyProps) {
  return (
    <div className={cn("relative mt-10", className)}>
      {children}
    </div>
  );
}

Section.Body = SectionBody;
Section.Header = SectionHeader;

export default Section;