import { motion, type Variants } from "framer-motion";
import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Scroll-reveal wrapper built on framer-motion's `whileInView` — sections already in
 * view paint immediately, sections below the fold fade/rise in once intersecting.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  className = "",
  delay = 0,
  children,
  ...rest
}: {
  as?: T;
  className?: string;
  delay?: number;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">) {
  const MotionTag = motion[(as ?? "div") as "div"];

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </MotionTag>
  );
}
