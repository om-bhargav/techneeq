import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("grid gap-4", className)}>
      {/* Section Label */}

      {label && (
        <div className="pt-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/45">
            {label}
          </span>
        </div>
      )}

      {/* Heading */}

      <div>
        <h2
          className="
            max-w-5xl
            font-display
            text-4xl
            font-normal
            leading-[0.98]
            tracking-[-0.045em]
            text-foreground
            sm:text-5xl
            md:text-6xl
            lg:text-[72px]
          "
        >
          {title}

          {highlight && (
            <>
              <br />

              <span className="text-foreground/40">
                {highlight}
              </span>
            </>
          )}
        </h2>

        {description && (
          <div className="mt-8 flex max-w-xl items-start gap-4">
            <span className="mt-[7px] h-px w-10 shrink-0 bg-foreground/20" />

            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
        )}
      </div>
    </header>
  );
}