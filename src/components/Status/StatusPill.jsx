import { motion } from "framer-motion";
import { COLORS, FONTS } from "../../app/constants/colors";

export function StatusPill({ status }) {
  const map = {
    live: { label: "Live now", bg: "#F6E6E1", fg: COLORS.live },
    upcoming: { label: "Upcoming", bg: "#EAEDF3", fg: COLORS.inkSoft },
    ended: { label: "Ended", bg: COLORS.paperDeep, fg: COLORS.slate },
  };
  const s = map[status] || map.upcoming;
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-full inline-flex items-center gap-1.5"
      style={{ background: s.bg, color: s.fg, fontFamily: FONTS.mono }}
    >
      {status === "live" && (
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="rounded-full"
          style={{
            width: 6,
            height: 6,
            background: COLORS.live,
            display: "inline-block",
          }}
        />
      )}
      {s.label}
    </span>
  );
}
export default StatusPill;
