import { COLORS } from "../../app/constants/colors";

function Toast({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12, x: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="fixed top-6 right-6 px-4 py-3 rounded-lg text-sm text-white flex items-center gap-2 z-50"
      style={{ background: COLORS.ink }}
    >
      <span style={{ color: COLORS.gold }}>✓</span> {message}
    </motion.div>
  );
}

export default Toast;
