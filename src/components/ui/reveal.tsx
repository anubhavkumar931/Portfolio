"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
};

function axisFromDirection(direction: Direction, distance: number) {
  if (direction === "down") {
    return { x: 0, y: -distance };
  }
  if (direction === "left") {
    return { x: distance, y: 0 };
  }
  if (direction === "right") {
    return { x: -distance, y: 0 };
  }
  return { x: 0, y: distance };
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.6,
}: RevealProps) {
  const hiddenOffset = axisFromDirection(direction, distance);

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...hiddenOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration, ease: [0.2, 0.65, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

