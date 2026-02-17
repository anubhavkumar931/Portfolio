"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

type ScrollParallaxProps = {
  children: React.ReactNode;
  className?: string;
  from?: number;
  to?: number;
  start?: number;
  end?: number;
};

export function ScrollParallax({ children, className, from = 0, to = 40, start = 0, end = 1400 }: ScrollParallaxProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const rawY = useTransform(scrollY, [start, end], [from, to]);
  const y = useSpring(rawY, { stiffness: 95, damping: 26, mass: 0.65 });

  return (
    <motion.div className={className} style={shouldReduceMotion ? undefined : { y, willChange: "transform" }}>
      {children}
    </motion.div>
  );
}
