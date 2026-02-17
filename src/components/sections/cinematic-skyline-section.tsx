"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { siteConfig } from "@/content/profile";
import { ScrollParallax } from "@/components/ui/scroll-parallax";

export function CinematicSkylineSection() {
  const desktopRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: desktopRef,
    offset: ["start start", "end end"],
  });

  const stageOneScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1.06, 1.11]);
  const stageOneY = useTransform(scrollYProgress, [0, 1], [0, -72]);
  const stageOneOverlay = useTransform(scrollYProgress, [0, 0.6], [0.32, 0.65]);
  const stageTwoOpacity = useTransform(scrollYProgress, [0.48, 0.72, 0.92], [0, 0.75, 1]);
  const headlineY = useTransform(scrollYProgress, [0.1, 0.8], [18, -14]);

  return (
    <>
      <section ref={desktopRef} className="relative hidden h-[260vh] lg:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={
              shouldReduceMotion
                ? undefined
                : {
                    scale: stageOneScale,
                    y: stageOneY,
                  }
            }
          >
            <Image
              src={siteConfig.heroVisuals.primarySkyline}
              alt="Full-screen financial district skyscrapers"
              fill
              priority={false}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-[var(--color-bg)]/92"
            style={shouldReduceMotion ? undefined : { opacity: stageOneOverlay }}
          />

          <motion.div className="absolute inset-0" style={shouldReduceMotion ? undefined : { opacity: stageTwoOpacity }}>
            <Image
              src={siteConfig.heroVisuals.secondarySkyline}
              alt="Market district skyline"
              fill
              priority={false}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/58" />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-end px-8 pb-16"
            style={shouldReduceMotion ? undefined : { y: headlineY }}
          >
            <div className="max-w-4xl space-y-4">
              <p className="inline-flex rounded-full border border-[var(--color-border)] bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold-2)] backdrop-blur">
                Financial District Sequence
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-[var(--color-text)] xl:text-6xl">
                Skyline-Driven Finance Narrative
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] xl:text-base">
                This cinematic stage is intentionally pinned on desktop to create a focused transition from brand introduction into your core CV story.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative lg:hidden">
        <ScrollParallax from={0} to={shouldReduceMotion ? 0 : -18}>
          <div className="relative h-[74vh] overflow-hidden">
            <Image
              src={siteConfig.heroVisuals.primarySkyline}
              alt="Skyscraper financial district visual"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/62 via-black/32 to-[var(--color-bg)]/90" />
            <div className="absolute inset-x-5 bottom-9 space-y-3">
              <p className="inline-flex rounded-full border border-[var(--color-border)] bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--gold-2)] backdrop-blur">
                Skyline Sequence
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--color-text)]">
                Financial District Focus
              </h2>
            </div>
          </div>
        </ScrollParallax>
      </section>
    </>
  );
}
