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
            text-3xl
            font-normal
            leading-[0.98]
            tracking-[-0.045em]
            text-foreground
            sm:text-3xl
            md:text-5xl
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
            <span className="mt-1.75 max-md:hidden h-px w-10 shrink-0 bg-foreground/20" />

            <p className="max-w-md text-xs md:text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
        )}
      </div>
    </header>
  );
}