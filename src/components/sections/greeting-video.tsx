"use client";

import { useEffect, useRef, useState } from "react";

type GreetingVideoProps = {
  src: string;
  poster: string;
  delayAfterEndMs: number;
};

export function GreetingVideo({ src, poster, delayAfterEndMs }: GreetingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const replayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [needsManualPlay, setNeedsManualPlay] = useState(false);
  const [isRestartWaiting, setIsRestartWaiting] = useState(false);
  const [countdownMs, setCountdownMs] = useState(0);

  const clearReplayTimer = () => {
    if (replayTimerRef.current) {
      clearTimeout(replayTimerRef.current);
      replayTimerRef.current = null;
    }
  };

  const clearCountdownInterval = () => {
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
  };

  const clearTimers = () => {
    clearReplayTimer();
    clearCountdownInterval();
  };

  const attemptPlay = async () => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    videoElement.muted = false;
    videoElement.volume = 1;

    try {
      await videoElement.play();
      setNeedsManualPlay(false);
    } catch {
      setNeedsManualPlay(true);
    }
  };

  useEffect(() => {
    return () => {
      if (replayTimerRef.current) {
        clearTimeout(replayTimerRef.current);
      }
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    };
  }, []);

  const onEnded = () => {
    clearTimers();
    setIsRestartWaiting(true);
    setCountdownMs(delayAfterEndMs);

    const startTime = Date.now();
    countdownIntervalRef.current = setInterval(() => {
      const elapsedMs = Date.now() - startTime;
      const remainingMs = Math.max(delayAfterEndMs - elapsedMs, 0);
      setCountdownMs(remainingMs);

      if (remainingMs === 0) {
        clearCountdownInterval();
      }
    }, 100);

    replayTimerRef.current = setTimeout(() => {
      clearCountdownInterval();
      setIsRestartWaiting(false);
      setCountdownMs(0);
      void attemptPlay();
    }, delayAfterEndMs);
  };

  const onPlay = () => {
    clearTimers();
    setIsRestartWaiting(false);
    setCountdownMs(0);
  };

  const countdownProgress = delayAfterEndMs > 0 ? Math.max(0, Math.min(1, countdownMs / delayAfterEndMs)) : 0;
  const circleRadius = 12;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const circleOffset = circleCircumference * (1 - countdownProgress);

  return (
    <div className="w-full max-w-[720px] rounded-3xl lg:ml-auto">
      <div className="relative overflow-hidden rounded-2xl bg-transparent">
        <div className="w-full aspect-video bg-transparent">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="h-full w-full object-contain object-center"
            autoPlay
            playsInline
            preload="metadata"
            controls={false}
            onLoadedData={() => void attemptPlay()}
            onPlay={onPlay}
            onEnded={onEnded}
            aria-label="Greeting video"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
        {isRestartWaiting ? (
          <div className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/90 backdrop-blur">
            <svg className="-rotate-90" width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
              <circle cx="14" cy="14" r={circleRadius} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.2" />
              <circle
                cx="14"
                cy="14"
                r={circleRadius}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray={circleCircumference}
                strokeDashoffset={circleOffset}
              />
            </svg>
            <span className="sr-only">Greeting video restarting</span>
          </div>
        ) : null}
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
