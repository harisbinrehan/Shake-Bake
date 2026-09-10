import { useEffect, useState } from "react";

export interface CountdownPart {
  value: string;
  label: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

function computeParts(targetIso: string): CountdownPart[] {
  const remaining = Math.max(0, new Date(targetIso).getTime() - Date.now());
  const d = Math.floor(remaining / 86400000);
  const h = Math.floor((remaining % 86400000) / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  return [
    { value: pad(d), label: "Days" },
    { value: pad(h), label: "Hrs" },
    { value: pad(m), label: "Min" },
    { value: pad(s), label: "Sec" },
  ];
}

/** Live countdown to the next show's start time (e.g. "2026-09-26T10:00:00-05:00"). */
export function useCountdown(targetIso: string): CountdownPart[] {
  const [parts, setParts] = useState(() => computeParts(targetIso));

  useEffect(() => {
    const id = window.setInterval(() => setParts(computeParts(targetIso)), 1000);
    return () => window.clearInterval(id);
  }, [targetIso]);

  return parts;
}
