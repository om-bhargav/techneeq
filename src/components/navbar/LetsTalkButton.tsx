"use client";

import {
  AnimatePresence,
  motion,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  X,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import PillButton from "../elements/PillButton";

export function LetsTalkButton() {
  const [open, setOpen] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /*
   * Close when clicking outside the form.
   */
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      // Click inside form → do nothing
      if (formRef.current?.contains(target)) {
        return;
      }

      // Click on Let's Talk button → do nothing
      if (buttonRef.current?.contains(target)) {
        return;
      }

      // Anything else → close
      setOpen(false);
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, [open]);

  return (
    <>
      {/* -------------------------------- */}
      {/* LET'S TALK BUTTON                 */}
      {/* -------------------------------- */}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        className="
          group
          relative
          flex
          h-10
          items-center
          gap-3
          overflow-hidden
          rounded-full
          bg-foreground
          px-5
          text-background
        "
      >
        <motion.span
          className="
            absolute
            inset-0
            rounded-full
            bg-muted
          "
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <span
          className="
            relative
            z-10
            font-mono
            text-[10px]
            uppercase
            tracking-[0.12em]
          "
        >
          Let's talk
        </span>

        <ArrowUpRight
          className="
            relative
            z-10
            size-3.5
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </button>

      {/* -------------------------------- */}
      {/* CONTACT FORM                     */}
      {/* -------------------------------- */}

      <AnimatePresence>
        {open && (
          <motion.div
            ref={formRef}
            initial={{
              clipPath: "circle(0% at 100% 0%)",
              opacity: 0,
            }}
            animate={{
              clipPath: "circle(150% at 100% 0%)",
              opacity: 1,
            }}
            exit={{
              clipPath: "circle(0% at 100% 0%)",
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              right-0
              top-0
              z-[100]
              max-md:w-full
              md:w-[min(92vw,32rem)]
              md:max-h-[calc(100dvh-2.5rem)]
              overflow-y-auto
              max-md:h-full!
              md:rounded-lg
              bg-background
              text-black
              shadow-[0_20px_70px_rgba(0,0,0,0.18)]
              sm:right-0
              sm:top-0
            "
          >
            {/* -------------------------------- */}
            {/* FORM CLOSE BUTTON                 */}
            {/* -------------------------------- */}

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close contact form"
              className="
                group
                absolute
                right-4
                top-4
                z-20
                flex
                size-8
                items-center
                justify-center
                rounded-full
                border
                border-black/15
                bg-background
                text-black/50
                transition-all
                duration-300
                hover:border-black
                hover:bg-black
                hover:text-white
              "
            >
              <X
                className="
                  size-3.5
                  transition-transform
                  duration-300
                  group-hover:rotate-90
                "
              />
            </button>

            {/* -------------------------------- */}
            {/* FORM CONTENT                     */}
            {/* -------------------------------- */}

            <div className="px-7 py-7 sm:px-9 sm:py-9">

              {/* Heading */}

              <div className="mb-5 pr-8">
                <h2
                  className="
                    text-[28px]
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-black
                    sm:text-[32px]
                  "
                >
                  Let's build something great.
                </h2>

                <p
                  className="
                    mt-2
                    max-w-[330px]
                    text-sm
                    leading-[1.2]
                    text-black/60
                  "
                >
                  Tell us about your project, we usually
                  reply within one business day.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-3"
              >
                {/* Name */}

                <FormInput
                  placeholder="Full Name"
                  label="Enter your name"
                  error
                />

                {/* Email */}

                <FormInput
                  type="email"
                  placeholder="Email address"
                  label="Enter a valid email"
                  error
                />

                {/* Company */}

                <FormInput
                  placeholder="Company / Website name"
                />

                {/* Service */}

                <FormSelect
                  label="Select a service"
                  options={[
                    "Web Development",
                    "AI Development",
                    "UI/UX Design",
                    "Automation",
                    "UI/UX Design",
                    "Other",
                  ]}
                />

                {/* Message */}

                <FormTextarea
                  label="Minimum 20 characters"
                  placeholder="Share a little about your goals, timeline, and requirements..."
                />

                {/* Budget */}

                <FormSelect
                  label="Select a budget"
                  options={[
                    "Under $2,000",
                    "$2,000 – $5,000",
                    "$5,000 – $10,000",
                    "$10,000+",
                  ]}
                />

                {/* Send */}

                <PillButton
                  type="submit"
                  icon={ArrowUpRight}
                  variant="dark"
                  className="w-full justify-between px-6 py-3 text-xs"
                >
                  Send enquiry
                </PillButton>

                {/* OR */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    py-10
                  "
                >
                  <span className="h-px flex-1 bg-black/10" />

                  <span className="text-sm text-black/40">
                    OR
                  </span>

                  <span className="h-px flex-1 bg-black/10" />
                </div>

                {/* Book call */}

                <button
                  type="button"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-md
                    border
                    border-black/70
                    bg-black/[0.03]
                    px-4
                    py-3
                    text-xs
                    uppercase
                    tracking-[0.08em]
                    transition-colors
                    hover:bg-black
                    hover:text-white
                  "
                >
                  <CalendarDays
                    className="size-4"
                  />

                  <span>
                    Book a 30-minute call
                  </span>
                </button>

                {/* Email */}

                <p
                  className="
                    pt-3
                    text-center
                    text-sm
                    text-black/50
                  "
                >
                  Prefer email?{" "}
                  <a
                    href="mailto:hello@techneeq.com"
                    className="
                      text-black
                      transition-opacity
                      hover:opacity-60
                    "
                  >
                    hello@techneeq.com
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


/* -------------------------------- */
/* INPUT                            */
/* -------------------------------- */

function FormInput({
  placeholder,
  label,
  type = "text",
  error = false,
}: {
  placeholder: string;
  label?: string;
  type?: string;
  error?: boolean;
}) {
  return (
    <div className="relative">
      {error && label && (
        <span
          className="
            absolute
            right-3
            -top-[5px]
            z-10
            bg-background
            px-1.5
            text-[8px]
            uppercase
            tracking-wide
            text-red-500
          "
        >
          {label}
        </span>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`
          h-11
          w-full
          rounded-md
          border
          bg-transparent
          px-4
          text-sm
          text-black
          outline-none
          placeholder:text-black/40
          focus:border-black
          ${
            error
              ? "border-red-500"
              : "border-black/15"
          }
        `}
      />
    </div>
  );
}


/* -------------------------------- */
/* SELECT                           */
/* -------------------------------- */

function FormSelect({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <span
        className="
          absolute
          right-3
          -top-[5px]
          z-10
          bg-background
          px-1.5
          text-[8px]
          uppercase
          tracking-wide
          text-red-500
        "
      >
        {label}
      </span>

      <select
        defaultValue=""
        className="
          h-11
          w-full
          appearance-none
          rounded-md
          border
          border-red-500
          bg-transparent
          px-4
          pr-10
          text-sm
          text-black/50
          outline-none
          focus:border-black
        "
      >
        <option value="" disabled>
          {label === "Select a budget"
            ? "Select your estimated budget"
            : "Select a service"}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

      <ArrowDown
        className="
          pointer-events-none
          absolute
          right-4
          top-1/2
          size-3.5
          -translate-y-1/2
          text-black/70
        "
      />
    </div>
  );
}


/* -------------------------------- */
/* TEXTAREA                         */
/* -------------------------------- */

function FormTextarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <span
        className="
          absolute
          right-3
          -top-[5px]
          z-10
          bg-background
          px-1.5
          text-[8px]
          uppercase
          tracking-wide
          text-red-500
        "
      >
        {label}
      </span>

      <textarea
        rows={4}
        placeholder={placeholder}
        className="
          w-full
          resize-none
          rounded-md
          border
          border-red-500
          bg-transparent
          px-4
          py-3
          text-sm
          leading-[1.25]
          text-black
          outline-none
          placeholder:text-black/40
          focus:border-black
        "
      />
    </div>
  );
}