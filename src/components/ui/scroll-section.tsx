"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

type ScrollSectionProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  minOpacity?: number;
};

export function ScrollSection({
  children,
  className,
  distance = 42,
  minOpacity = 0.08,
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [minOpacity, 1, 1, minOpacity]);
  const rawY = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [distance, 0, 0, -distance]);
  const rawScale = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.985, 1, 1, 0.985]);

  const opacity = useSpring(rawOpacity, { stiffness: 110, damping: 28, mass: 0.55 });
  const y = useSpring(rawY, { stiffness: 110, damping: 28, mass: 0.55 });
  const scale = useSpring(rawScale, { stiffness: 110, damping: 28, mass: 0.55 });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={shouldReduceMotion ? undefined : { opacity, y, scale, willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
