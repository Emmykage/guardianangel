import { COLORS, FONTS } from "../../app/constants/colors";

function ProgressBar({ value, total }) {
  const pct = total ? Math.round((value / total) * 100) : 0;
  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-full overflow-hidden"
        style={{ width: 90, height: 6, background: COLORS.paperDeep }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: pct >= 60 ? COLORS.pass : COLORS.gold,
          }}
        />
      </div>
      <span
        className="text-xs"
        style={{ fontFamily: FONTS.mono, color: COLORS.slate }}
      >
        {value}/{total}
      </span>
    </div>
  );
}

export default ProgressBar;
