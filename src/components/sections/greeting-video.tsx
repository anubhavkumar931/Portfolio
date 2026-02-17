"use client";

import { useEffect, useRef, useState } from "react";

type GreetingVideoProps = {
  src: string;
  poster: string;
  title: string;
  subtitle: string;
  delayAfterEndMs: number;
};

export function GreetingVideo({ src, poster, title, subtitle, delayAfterEndMs }: GreetingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const replayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [needsManualPlay, setNeedsManualPlay] = useState(false);
  const [isRestartWaiting, setIsRestartWaiting] = useState(false);

  const clearReplayTimer = () => {
    if (replayTimerRef.current) {
      clearTimeout(replayTimerRef.current);
      replayTimerRef.current = null;
    }
  };

  const attemptPlay = async () => {
    if (!videoRef.current) {
      return;
    }

    try {
      await videoRef.current.play();
      setNeedsManualPlay(false);
    } catch {
      setNeedsManualPlay(true);
    }
  };

  useEffect(
    () => () => {
      clearReplayTimer();
    },
    [],
  );

  const onEnded = () => {
    clearReplayTimer();
    setIsRestartWaiting(true);
    replayTimerRef.current = setTimeout(() => {
      setIsRestartWaiting(false);
      void attemptPlay();
    }, delayAfterEndMs);
  };

  const onPlay = () => {
    clearReplayTimer();
    setIsRestartWaiting(false);
  };

  return (
    <div className="ib-card rounded-3xl p-4">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]">
        <div className="mx-auto aspect-[9/16] max-h-[80vh] min-h-[420px] w-full max-w-[430px] bg-black/50 sm:min-h-[520px]">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="h-full w-full object-contain"
            autoPlay
            muted
            playsInline
            preload="metadata"
            controls
            onLoadedData={() => void attemptPlay()}
            onPlay={onPlay}
            onEnded={onEnded}
            aria-label="Greeting video"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">{title}</p>
            <p className="mt-1 text-xs text-white/75">{subtitle}</p>
          </div>
          {isRestartWaiting ? (
            <span className="rounded-full bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
              Restarting in 10s
            </span>
          ) : null}
        </div>
      </div>
      {needsManualPlay ? (
        <button
          type="button"
          onClick={() => void attemptPlay()}
          className="ib-btn mt-3 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text)]"
        >
          Play Greeting
        </button>
      ) : null}
    </div>
  );
}
