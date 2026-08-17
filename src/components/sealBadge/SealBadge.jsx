import { motion, AnimatePresence } from "framer-motion";
import { COLORS, FONTS } from "../../app/constants/colors";

const SealBadge = ({ score, grade, seed }) => {
  return (
    <motion.div
      key={seed}
      initial={{ scale: 0.4, rotate: -18, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 16 }}
      className="relative flex items-center justify-center shrink-0"
      style={{ width: 92, height: 92 }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: `2px solid ${grade.color}` }}
      />
      <div
        className="absolute rounded-full"
        style={{ inset: 6, border: `1px dashed ${grade.color}`, opacity: 0.5 }}
      />
      <div className="flex flex-col items-center">
        <span
          style={{
            fontFamily: FONTS.display,
            fontWeight: 700,
            fontSize: 22,
            color: grade.color,
          }}
        >
          {grade.code}
        </span>
        <span
          style={{ fontFamily: FONTS.mono, fontSize: 11, color: COLORS.slate }}
        >
          {score}%
        </span>
      </div>
    </motion.div>
  );
};

export default SealBadge;
