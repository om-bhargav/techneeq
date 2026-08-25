"use client";

import type { ComponentType, ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type PillButtonVariant = "default" | "dark";

interface BaseProps {
    children: ReactNode;
    icon?: ComponentType<{
        size?: number | string;
        strokeWidth?: number;
        className?: string;
    }>;
    variant?: PillButtonVariant;
    className?: string;
}

type ButtonProps = BaseProps &
    Omit<HTMLMotionProps<"button">, keyof BaseProps>;

type AnchorProps = BaseProps &
    Omit<HTMLMotionProps<"a">, keyof BaseProps> & {
        href: string;
    };

type Props = {
    spanClassName?: string;
}
type PillButtonProps = (ButtonProps | AnchorProps) & Props;

export default function PillButton(props: PillButtonProps) {
    const {
        children,
        icon: Icon,
        variant = "default",
        className,
        spanClassName
    } = props;

    const isDark = variant === "dark";

    const sharedClassName = cn(
        "group relative inline-flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full",
        "px-5 py-2.5",
        "text-xs font-medium uppercase tracking-[0.15em]",
        "transition-colors duration-300",
        "bg-transparent",
        "border backdrop-blur-sm",
        className,
    );

    const content = (
        <>
            {/* Animated pill background */}
            <motion.span
                variants={{
                    initial: {
                        scaleX: 0,
                    },
                    hover: {
                        scaleX: 1,
                    },
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                    "absolute inset-0 origin-left rounded-full",
                    isDark ? "bg-foreground" : "bg-background"
                )}
            />

            {/* Text */}
            <motion.span
                variants={{
                    initial: {
                        x: 0,
                    },
                    hover: {
                        x: 2,
                    },
                }}
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                    "relative z-10 transition-colors duration-300",
                    // Default
                    isDark
                        ? "text-foreground group-hover:text-background"
                        : "text-background group-hover:text-foreground",
                    spanClassName
                )}
            >
                {children}
            </motion.span>

            {/* Icon */}
            {Icon && (
                <span
                    className={cn(
                        "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center",
                        "rounded-full transition-colors duration-300",

                        // Default icon background
                        isDark
                            ? "bg-foreground text-background"
                            : "bg-background text-foreground",

                        // Hover icon background
                        isDark ? "group-hover:bg-background group-hover:text-foreground"
                            : "group-hover:bg-foreground group-hover:text-background"
                    )}
                >
                    <motion.span
                        variants={{
                            initial: {
                                rotate: 0,
                            },
                            hover: {
                                rotate: 45,
                            },
                        }}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-center justify-center"
                    >
                        <Icon
                            size={16}
                            strokeWidth={1.5}
                            className="shrink-0"
                        />
                    </motion.span>
                </span>
            )}
        </>
    );

    if ("href" in props) {
        const {
            children: _children,
            icon: _icon,
            variant: _variant,
            className: _className,
            ...anchorProps
        } = props;

        return (
            <motion.a
                {...anchorProps}
                initial="initial"
                whileHover="hover"
                className={sharedClassName}
            >
                {content}
            </motion.a>
        );
    }

    const {
        children: _children,
        icon: _icon,
        variant: _variant,
        className: _className,
        ...buttonProps
    } = props;

    return (
        <motion.button
            {...buttonProps}
            initial="initial"
            whileHover="hover"
            className={sharedClassName}
        >
            {content}
        </motion.button>
    );
}