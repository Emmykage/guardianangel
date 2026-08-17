/* ------------------------------------------------------------------ */
/* Deterministic seeded score generator, reused from the staff view    */

import { COLORS } from "../app/constants/colors";

/* ------------------------------------------------------------------ */
export function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(seed) {
  let t = seed;
  return function () {
    t |= 0;
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
export function scoreFor(studentId, subject, termId, baseline) {
  const rng = mulberry32(hashSeed(`${studentId}-${subject}-${termId}`));
  const drift = termId === "first" ? -3 : termId === "second" ? 1 : 4;
  const variance = Math.round((rng() - 0.5) * 20);
  return Math.max(28, Math.min(99, baseline + drift + variance));
}
export function gradeFor(score) {
  if (score >= 75)
    return { code: "A1", label: "Excellent", color: COLORS.pass };
  if (score >= 70)
    return { code: "B2", label: "Very Good", color: COLORS.pass };
  if (score >= 65) return { code: "B3", label: "Good", color: COLORS.pass };
  if (score >= 60) return { code: "C4", label: "Credit", color: COLORS.gold };
  if (score >= 55) return { code: "C5", label: "Credit", color: COLORS.gold };
  if (score >= 50) return { code: "C6", label: "Credit", color: COLORS.gold };
  if (score >= 45) return { code: "D7", label: "Pass", color: COLORS.slate };
  if (score >= 40) return { code: "E8", label: "Pass", color: COLORS.slate };
  return { code: "F9", label: "Fail", color: COLORS.fail };
}
export function mmss(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */
