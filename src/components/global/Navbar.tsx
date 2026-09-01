import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/config";
import { LetsTalkButton } from "../navbar/LetsTalkButton";
import { contactPage } from "@/data/contact";
const menuItems = [
  {
    number: "01",
    label: "About",
    href: "/about",
  },
  {
    number: "02",
    label: "Industries",
    href: "/#industries",
    sublinks: [
      {
        label: "Education",
        slug: "education",
      },
      {
        label: "Financial Services",
        slug: "financial-services",
      },
      {
        label: "System Integration",
        slug: "system-integration",
      },
      {
        label: "Healthcare & Life Sciences",
        slug: "healthcare-life-sciences",
      },
    ],
  },
  {
    number: "03",
    label: "Solutions",
    href: "/solutions",
  },
  {
    number: "04",
    label: "Contact",
    href: "/contact",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;
type SubLink = {
  label: string;
  slug: string;
};

function MenuItem({
  number,
  label,
  href,
  index,
  onClose,
  sublinks,
}: {
  number: string;
  label: string;
  href: string;
  index: number;
  onClose: () => void;
  sublinks?: SubLink[];
}) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const hasSublinks = !!sublinks?.length;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    // Parent with sublinks should only toggle
    if (hasSublinks) {
      e.preventDefault();
      setExpanded((prev) => !prev);
      return;
    }

    // Always close the menu when a normal link is clicked
    if (onClose) onClose();

    // Handle hash links
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      const element = document.getElementById(hash);

      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.08,
        ease,
      }}
    >
      {/* Parent item */}
      <Link
        to={href}
        onClick={handleClick}
        className="group flex items-start"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Number */}
        <motion.span
          className="mt-[0.7em] mr-5 w-7 shrink-0 text-xs text-muted-foreground"
          animate={{
            x: hovered ? 5 : 0,
            opacity: hovered ? 0.5 : 1,
          }}
          transition={{ duration: 0.4, ease }}
        >
          {number}
        </motion.span>

        {/* Text + Chevron */}
        <span className="relative inline-flex items-center py-2 pr-4">
          {/* Normal text */}
          <motion.span
            className="relative block whitespace-nowrap font-display text-5xl leading-none tracking-[-0.06em] sm:text-6xl"
            animate={{
              opacity: hovered ? 0 : 1,
              x: hovered ? 15 : 0,
            }}
            transition={{ duration: 0.45, ease }}
          >
            {label.split("").map((char, i) => (
              <motion.span
                key={`normal-${i}`}
                className="inline-block"
                animate={{
                  y: hovered ? -8 : 0,
                  opacity: hovered ? 0 : 1,
                }}
                transition={{
                  duration: 0.35,
                  delay: hovered ? i * 0.018 : 0,
                  ease,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>

          {/* Hover / italic text */}
          <motion.span
            className="
              pointer-events-none absolute left-0 top-2
              whitespace-nowrap font-sans text-5xl italic
              leading-none tracking-[-0.06em] sm:text-6xl
            "
            initial={{ x: -18, opacity: 0 }}
            animate={{
              x: hovered ? 0 : -18,
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease }}
          >
            {label.split("").map((char, i) => (
              <motion.span
                key={`hover-${i}`}
                className="inline-block"
                style={{ transformOrigin: "left center" }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{
                  opacity: hovered ? 1 : 0,
                  scaleX: hovered ? 1 : 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: hovered ? i * 0.025 : 0,
                  ease,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>

          {/* Chevron for parent with sublinks */}
          {hasSublinks && (
            <motion.span
              className="ml-4 flex items-center"
              animate={{
                x: hovered ? 5 : 0,
              }}
              transition={{ duration: 0.4, ease }}
            >
              {expanded ? (
                <ChevronUp className="h-7 w-7" strokeWidth={1.5} />
              ) : (
                <ChevronDown className="h-7 w-7" strokeWidth={1.5} />
              )}
            </motion.span>
          )}

          {/* Underline */}
          <motion.span
            className="absolute bottom-0 left-0 h-px bg-foreground"
            initial={{
              scaleX: 0,
              transformOrigin: "left",
            }}
            animate={{
              scaleX: hovered ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              ease,
            }}
          />
        </span>
      </Link>

      {/* Sublinks */}
      {hasSublinks && (
        <motion.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
          }}
          className="ml-12 overflow-hidden"
        >
          <div className="flex flex-col gap-2 pb-4 pt-2">
            {sublinks.map((sublink) => (
              <Link
                key={sublink.slug}
                to={`/industries/${sublink.slug}`}
                onClick={onClose}
                className="
                  group/sub flex items-center gap-3
                  text-lg text-muted-foreground
                  transition-colors hover:text-foreground
                "
              >
                <span className="h-px w-4 bg-muted-foreground transition-all group-hover/sub:w-7 group-hover/sub:bg-foreground" />

                <span>{sublink.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function MenuPanel({
  onClose,
}: {
  onClose: () => void;
}) {
  const { EMAIL, PHONE, INSTAGRAM, LINKEDIN } = contactPage;
  return (
    <>
      {/* Background overlay */}

      <motion.div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        onClick={onClose}
      />

      {/* Menu */}

      <motion.aside
        className="
          fixed
          right-0
          top-0
          z-50
          flex
          h-dvh
          w-full
          flex-col
          bg-background
          text-foreground
          lg:w-[40vw]
          lg:min-w-[420px]
        "
        initial={{
          x: "100%",
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: "100%",
        }}
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {/* Menu header */}

        <div className="flex h-[88px] shrink-0 items-center justify-between border-b border-border px-6 md:px-10">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Menu
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="group flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            <X className="size-5 transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 max-md:py-10 md:px-10 md:justify-center">
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.label}
                {...item}
                index={index}
                onClose={onClose}
              />
            ))}

            <LetsTalkButton className="justify-center md:hidden mt-5" />
          </div>
        </nav>

        {/* Footer */}

        <motion.div
          className="flex shrink-0 items-end justify-between border-t border-border px-6 py-6 text-xs md:px-10"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.55,
            duration: 0.5,
          }}
        >
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${EMAIL}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              ↗ {EMAIL}
            </a>

            <a
              href={`tel:${PHONE}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              ↗ {PHONE}
            </a>
          </div>

          <div className="flex flex-col items-end gap-2">
            <a
              href={INSTAGRAM}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              ↗ Instagram
            </a>

            <a
              href={LINKEDIN}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              ↗ LinkedIn
            </a>
          </div>
        </motion.div>
      </motion.aside>
    </>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}

      <header
        className={cn(
          "left-0 right-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "fixed bg-background shadow-sm"
            : "absolute bg-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-[88px] max-w-7xl items-center justify-between",
            "px-6 md:px-0"
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-display text-xl uppercase tracking-[-0.04em]",
              "transition-colors duration-500",
              scrolled ? "text-foreground" : pathname === "/" ? "text-background" : "text-foreground"
            )}
          >
            {SITE_NAME}
          </Link>

          <div className="flex items-center gap-3">
            <LetsTalkButton className="max-md:hidden" />
            {/* Menu */}
            <MenuButton
              open={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className={"transition-colors duration-500"}
              scrolled={scrolled}
            />
          </div>
        </div>
      </header>

      {/* Menu */}

      <AnimatePresence>
        {menuOpen && (
          <MenuPanel
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

interface MenuButtonProps {
  open: boolean;
  onClick: () => void;
  className: string;
  scrolled: boolean;
}

export function MenuButton({
  open,
  onClick,
  className = "",
  scrolled,
}: MenuButtonProps) {
  const { pathname } = useLocation();

  const textColor = scrolled
    ? "text-background"
    : pathname === "/"
      ? "text-foreground"
      : "text-background";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className={cn(
        "group relative flex h-10 w-[128px] items-center justify-center gap-4 overflow-hidden rounded-full",
        className,
        textColor
      )}
    >
      <span className="sr-only">
        {open ? "Close menu" : "Toggle Menu"}
      </span>

      {/* Main pill background */}
      <motion.span
        className={cn(
          "absolute inset-0 rounded-full",
          scrolled
            ? "bg-foreground"
            : pathname === "/"
              ? "bg-background"
              : "bg-foreground"
        )}
        initial={false}
        animate={{
          scale: open ? 0.94 : 1,
        }}
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Hover inner background */}
      <motion.span
        className="absolute inset-0 rounded-full bg-muted"
        initial={{
          scale: 0,
        }}
        whileHover={{
          scale: 1,
        }}
        animate={{
          scale: open ? 1 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* MENU + dots */}
      <span className="relative z-10 flex items-center gap-3">
        {/* MENU text */}
        <span className="text-[0.8rem] font-medium tracking-[-0.02em]">
          MENU
        </span>

        {/* Dots */}
        <motion.span
          className="relative flex h-4 w-4 items-center justify-center"
          animate={{
            rotate: open ? 90 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* First dot */}
          <span
            className={cn(
              "absolute left-0 size-1 rounded-full",
              scrolled
                ? "bg-background"
                : pathname === "/"
                  ? "bg-foreground"
                  : "bg-background"
            )}
          />

          {/* Second dot */}
          <span
            className={cn(
              "absolute right-0 size-1 rounded-full",
              scrolled
                ? "bg-background"
                : pathname === "/"
                  ? "bg-foreground"
                  : "bg-background"
            )}
          />
        </motion.span>
      </span>
    </button>
  );
}