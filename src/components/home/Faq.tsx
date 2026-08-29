"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/home";
import Section from "@/components/global/section/Section";
import { cn } from "@/lib/utils";

function FAQItem({
  index,
  question,
  answer,
  isOpen,
  onClick,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-t border-foreground/10 last:border-b">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="group flex w-full items-center gap-6 py-7 text-left md:py-8"
      >
        {/* Number */}
        <span className="w-8 shrink-0 text-[11px] font-medium tracking-[0.15em] text-foreground/35">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span className="flex-1 text-lg font-medium tracking-[-0.02em] text-foreground md:text-xl">
          {question}
        </span>

        {/* Icon */}
        <span
          className={[
            "relative flex h-9 w-9 shrink-0 items-center justify-center",
            "rounded-full border border-foreground/15",
            "transition-colors duration-300",
            "group-hover:border-foreground/40",
            isOpen
              ? "bg-foreground text-background"
              : "bg-transparent text-foreground",
          ].join(" ")}
        >
          <Plus
            size={16}
            strokeWidth={1.5}
            className={cn(
              "transition-transform duration-300",
              isOpen && "rotate-45"
            )}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pb-8 pl-14 pr-14 md:pb-9"
            >
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                {answer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section>
      <Section.Header
        label="FAQ"
        title="Questions,"
        highlight="answered."
        description="A few things you might want to know before we start building something together."
      />

      <Section.Body>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Side statement */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/35">
                Need something else?
              </span>

              <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
                Have a question that isn't answered here? Let's talk it
                through — no sales deck required.
              </p>

            </div>
          </div>

          {/* FAQ */}
          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex((current) =>
                    current === index ? null : index
                  )
                }
              />
            ))}
          </div>
        </div>
      </Section.Body>
    </Section>
  );
}