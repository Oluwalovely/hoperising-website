"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

/** Content stays visible without JavaScript; only its position animates. */
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();
  return (
    <div ref={ref} className={className} data-reveal={inView && !reduceMotion ? "true" : undefined}>
      {children}
    </div>
  );
}
