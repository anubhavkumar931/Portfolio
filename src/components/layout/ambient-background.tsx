"use client";

import { useReducedMotion } from "framer-motion";

import { ScrollParallax } from "@/components/ui/scroll-parallax";

const stars = [
  { left: "6%", top: "14%", size: 1.8, duration: 6.4, delay: 0.2 },
  { left: "18%", top: "22%", size: 1.2, duration: 8.2, delay: 1.8 },
  { left: "30%", top: "10%", size: 2.1, duration: 5.1, delay: 0.4 },
  { left: "44%", top: "18%", size: 1.6, duration: 7.7, delay: 1.2 },
  { left: "57%", top: "12%", size: 1.4, duration: 8.6, delay: 0.7 },
  { left: "67%", top: "25%", size: 2.2, duration: 4.9, delay: 0.5 },
  { left: "76%", top: "9%", size: 1.5, duration: 7.4, delay: 1.1 },
  { left: "88%", top: "16%", size: 1.9, duration: 5.5, delay: 0.1 },
  { left: "11%", top: "36%", size: 1.3, duration: 8.8, delay: 2.1 },
  { left: "26%", top: "42%", size: 2.1, duration: 6.2, delay: 0.6 },
  { left: "49%", top: "39%", size: 1.5, duration: 5.9, delay: 1.3 },
  { left: "64%", top: "48%", size: 1.8, duration: 7.9, delay: 0.9 },
  { left: "79%", top: "43%", size: 1.4, duration: 6.8, delay: 1.7 },
  { left: "91%", top: "34%", size: 1.7, duration: 8.3, delay: 0.4 },
];

const towers = [
  { left: "2%", width: 20, height: 122, duration: 7.8, delay: 0.2 },
  { left: "7%", width: 16, height: 96, duration: 8.9, delay: 0.8 },
  { left: "13%", width: 28, height: 166, duration: 7.3, delay: 0.4 },
  { left: "21%", width: 22, height: 138, duration: 8.4, delay: 0.9 },
  { left: "30%", width: 32, height: 190, duration: 7.1, delay: 0.7 },
  { left: "41%", width: 22, height: 154, duration: 8.7, delay: 0.6 },
  { left: "50%", width: 30, height: 208, duration: 7.5, delay: 0.3 },
  { left: "61%", width: 26, height: 176, duration: 8.1, delay: 0.5 },
  { left: "72%", width: 17, height: 128, duration: 8.8, delay: 0.1 },
  { left: "78%", width: 31, height: 188, duration: 7.2, delay: 0.9 },
  { left: "89%", width: 20, height: 142, duration: 8.3, delay: 0.3 },
  { left: "94%", width: 14, height: 112, duration: 7.7, delay: 0.8 },
];

export function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const parallaxRise = shouldReduceMotion ? 0 : -16;
  const parallaxDrift = shouldReduceMotion ? 0 : 16;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,color-mix(in_oklab,var(--gold-1)_14%,transparent),transparent_36%),radial-gradient(circle_at_92%_8%,color-mix(in_oklab,var(--gold-2)_11%,transparent),transparent_40%)]" />

      <ScrollParallax className="absolute inset-0" from={0} to={parallaxDrift}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_24%,color-mix(in_oklab,var(--gold-glow)_8%,transparent),transparent_34%),radial-gradient(circle_at_86%_20%,color-mix(in_oklab,var(--gold-1)_7%,transparent),transparent_36%)]" />
      </ScrollParallax>

      {stars.map((star) => (
        <span
          key={`${star.left}-${star.top}-${star.size}`}
          className="gold-star absolute rounded-full bg-[color:var(--star-color)]"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: shouldReduceMotion ? 0.24 : undefined,
          }}
        />
      ))}

      <ScrollParallax className="absolute inset-x-0 top-0 h-40" from={0} to={parallaxRise}>
        <div
          className="gold-sweep absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-[color:var(--gold-glow)] to-transparent"
          style={{ animationDuration: "14s" }}
        />
        <div
          className="edge-pulse absolute inset-x-[12%] top-10 h-px bg-gradient-to-r from-transparent via-[color:var(--gold-1)] to-transparent"
          style={{ animationDuration: "9.5s" }}
        />
      </ScrollParallax>

      <ScrollParallax className="absolute inset-x-0 bottom-0 h-72" from={0} to={parallaxRise}>
        <div className="absolute inset-x-0 bottom-0 h-72 overflow-hidden [mask-image:linear-gradient(to_top,black_0%,black_78%,transparent_100%)]">
          <div className="edge-pulse absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold-2)]/80 to-transparent" style={{ animationDuration: "8.8s" }} />
          {towers.map((tower) => (
            <div
              key={`${tower.left}-${tower.height}`}
              className="edge-pulse absolute bottom-0 rounded-t-sm border-x border-t border-[color:var(--gold-1)]/30 bg-gradient-to-t from-[color:var(--color-card)]/65 via-[color:var(--color-card)]/30 to-transparent"
              style={{
                left: tower.left,
                width: tower.width,
                height: tower.height,
                animationDuration: `${tower.duration}s`,
                animationDelay: `${tower.delay}s`,
              }}
            >
              <span className="absolute inset-x-[28%] top-[12%] bottom-[8%] bg-[repeating-linear-gradient(to_bottom,color-mix(in_oklab,var(--gold-glow)_50%,transparent)_0px,color-mix(in_oklab,var(--gold-glow)_50%,transparent)_1px,transparent_1px,transparent_8px)] opacity-45" />
            </div>
          ))}
        </div>
      </ScrollParallax>
    </div>
  );
}
