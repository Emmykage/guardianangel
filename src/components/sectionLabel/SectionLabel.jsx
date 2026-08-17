import { COLORS, FONTS } from "../../app/constants/colors";

const SectionLabel = ({ children }) => {
  return (
    <div
      className="text-xs uppercase tracking-widest mb-3"
      style={{
        color: COLORS.slate,
        fontFamily: FONTS.mono,
        letterSpacing: "0.14em",
      }}
    >
      {children}
    </div>
  );
};
export default SectionLabel;
