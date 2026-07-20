"use client";

import { useEffect, useState } from "react";
import { countdown, urgencyBar } from "@/lib/content";

const BRT_OFFSET_MS = 3 * 60 * 60 * 1000;

function nextMondaySevenBRT(reference: Date): Date {
  const brtWallClock = new Date(reference.getTime() - BRT_OFFSET_MS);
  const day = brtWallClock.getUTCDay();
  let daysUntilMonday = (8 - day) % 7;
  let target = new Date(
    Date.UTC(
      brtWallClock.getUTCFullYear(),
      brtWallClock.getUTCMonth(),
      brtWallClock.getUTCDate() + daysUntilMonday,
      7,
      0,
      0
    )
  );
  if (daysUntilMonday === 0 && brtWallClock.getUTCHours() >= 7) {
    target = new Date(target.getTime() + 7 * 24 * 60 * 60 * 1000);
  }
  return new Date(target.getTime() + BRT_OFFSET_MS);
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function CountdownBar() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const target = nextMondaySevenBRT(new Date());
    const tick = () => setRemaining(Math.max(0, target.getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const days = remaining !== null ? Math.floor(remaining / (24 * 3600 * 1000)) : null;
  const hours = remaining !== null ? Math.floor((remaining / (3600 * 1000)) % 24) : null;
  const minutes = remaining !== null ? Math.floor((remaining / (60 * 1000)) % 60) : null;
  const seconds = remaining !== null ? Math.floor((remaining / 1000) % 60) : null;

  return (
    <div className="bg-ink px-4 py-2 text-center text-ink-foreground">
      <p className="text-[11px] font-bold uppercase tracking-widest sm:text-xs">
        {urgencyBar.text}
      </p>
      <p className="mt-1 flex items-center justify-center gap-2 text-[11px] sm:text-xs">
        <span className="uppercase tracking-wide text-ink-foreground/80">
          {countdown.label}:
        </span>
        <span className="font-mono text-sm font-bold tabular-nums sm:text-base" suppressHydrationWarning>
          {remaining === null
            ? "--:--:--:--"
            : `${pad(days ?? 0)}d ${pad(hours ?? 0)}h ${pad(minutes ?? 0)}m ${pad(seconds ?? 0)}s`}
        </span>
      </p>
    </div>
  );
}
