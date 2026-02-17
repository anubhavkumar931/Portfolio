"use client";

import { useReducedMotion } from "framer-motion";

import { ScrollParallax } from "@/components/ui/scroll-parallax";

export function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const parallaxDrift = shouldReduceMotion ? 0 : 12;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(237,209,154,0.26),transparent_34%),radial-gradient(circle_at_90%_8%,rgba(216,184,124,0.2),transparent_38%),linear-gradient(180deg,#fffdf8_0%,#fbf6eb_48%,#f8f1e3_100%)]" />

      <ScrollParallax className="absolute inset-0" from={0} to={parallaxDrift}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(255,255,255,0.72),transparent_36%),radial-gradient(circle_at_82%_22%,rgba(255,245,224,0.54),transparent_34%)]" />
      </ScrollParallax>

      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(125,90,34,0.6)_0.45px,transparent_0.45px)] [background-size:20px_20px]" />
    </div>
  );
}
