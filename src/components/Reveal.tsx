import { useEffect, useRef, type ElementType, type ComponentPropsWithoutRef } from "react";

/**
 * Scroll-reveal wrapper. Mirrors the prototype's behavior: sections already in view
 * paint immediately, sections below the fold fade/rise in once intersecting, and a
 * safety timeout force-reveals everything if IntersectionObserver never fires.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...rest
}: { as?: T; className?: string; children?: React.ReactNode } & Omit<
  ComponentPropsWithoutRef<T>,
  "as" | "className" | "children"
>) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-shown");

    if (typeof IntersectionObserver === "undefined" || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight * 0.95) {
      let shown = false;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              shown = true;
              show();
              io.disconnect();
            }
          });
        },
        { rootMargin: "0px 0px -5% 0px", threshold: 0.02 }
      );
      io.observe(el);
      const safety = window.setTimeout(() => {
        if (!shown) show();
      }, 1200);
      return () => {
        io.disconnect();
        window.clearTimeout(safety);
      };
    } else {
      show();
    }
  }, []);

  return (
    <Tag ref={ref} data-reveal="" className={className} {...rest}>
      {children}
    </Tag>
  );
}
