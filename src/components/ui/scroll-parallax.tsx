"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ScrollParallaxProps = {
  children: React.ReactNode;
  className?: string;
  from?: number;
  to?: number;
};

export function ScrollParallax({ children, className, from = 0, to = 40 }: ScrollParallaxProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1200], [from, to]);

  return (
    <motion.div className={className} style={shouldReduceMotion ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
