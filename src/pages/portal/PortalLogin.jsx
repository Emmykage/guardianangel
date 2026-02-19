import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Navbar from "../../components/nav/Navbar";

const ROLES = [
  {
    id: "student",
    label: "Student",
    icon: "🎒",
    tagline: "Access your grades, timetable & assignments",
    accent: "#f0c040",
    bg: "rgba(240,192,64,0.10)",
    border: "rgba(240,192,64,0.35)",
  },
  {
    id: "teacher",
    label: "Teacher",
    icon: "📖",
    tagline: "Manage classes, attendance & reports",
    accent: "#60a5fa",
    bg: "rgba(96,165,250,0.10)",
    border: "rgba(96,165,250,0.35)",
  },
];

export default function PortalLogin() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [step, setStep] = useState("choose"); // "choose" | "login"
  const [form, setForm] = useState({ id: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const role = ROLES.find((r) => r.id === selectedRole);

  const handleRoleSelect = (id) => {
    setSelectedRole(id);
    setError("");
    setTimeout(() => setStep("login"), 180);
  };

  const handleBack = () => {
    setStep("choose");
    setForm({ id: "", password: "" });
    setError("");
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id.trim() || !form.password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    // Simulate auth — replace with real API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to respective dashboard
      navigate(
        selectedRole === "teacher"
          ? "/dashboard/teacher"
          : "/dashboard/student",
      );
    }, 1500);
  };

  const idLabel = selectedRole === "teacher" ? "Staff ID" : "Admission Number";
  const idPlaceholder =
    selectedRole === "teacher" ? "e.g. TCH-2024-001" : "e.g. STU-2025-042";

  return (
    <main
      className="min-h-screen flex"
      style={{ fontFamily: "system-ui, sans-serif", background: "#0f1e33" }}
    >
      <Navbar />

      {/* ── Left panel: branding + school photo ── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col">
        <img
          src="./logo.png"
          alt="Students in classroom"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(15,30,51,0.10) 0%, rgba(26,46,74,0.80) 50%, rgba(15,30,51,0.65) 100%)",
          }}
        />
        {/* Decorative dots grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Gold blob */}
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,192,64,0.12), transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative flex flex-col h-full px-12 py-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group w-fit">
            <img
              src={logo}
              alt="logo"
              className="h-12 transition-opacity group-hover:opacity-80"
            />
          </a>

          {/* Mid content */}
          <div className="flex-1 flex flex-col justify-center">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#f0c040" }}
            >
              School Portal
            </p>
            <h1
              className="text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "'Georgia', serif", lineHeight: 1.2 }}
            >
              Welcome Back to <br />
              <span style={{ color: "#f0c040" }}>Guardian Angel</span>
            </h1>
            <p className="text-blue-200 leading-relaxed max-w-sm text-sm mb-10">
              Your secure gateway to academic records, timetables, assignments,
              attendance, and school communications.
            </p>

            {/* Feature list */}
            <div className="space-y-3">
              {[
                { icon: "📊", text: "View grades and academic progress" },
                { icon: "🗓️", text: "Check timetables and term dates" },
                { icon: "📢", text: "Receive school announcements" },
                { icon: "📝", text: "Submit and track assignments" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                    style={{
                      background: "rgba(240,192,64,0.12)",
                      border: "1px solid rgba(240,192,64,0.2)",
                    }}
                  >
                    {f.icon}
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(191,210,230,0.85)" }}
                  >
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div
            className="pt-6 text-xs"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(191,210,230,0.4)",
            }}
          >
            © {new Date().getFullYear()} Guardian Angel Nursery & Primary
            School
          </div>
        </div>
      </div>

      {/* ── Right panel: login form ── */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
        style={{ background: "#f9f6f0" }}
      >
        {/* Top-right blob */}
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(26,46,74,0.06), transparent 70%)",
          }}
        />

        {/* Mobile logo */}
        <div className="lg:hidden mb-8 text-center">
          <img src={logo} alt="logo" className="h-12 mx-auto mb-3" />
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#f0c040" }}
          >
            School Portal
          </p>
        </div>

        <div className="w-full max-w-md relative">
          {/* ── Step 1: Choose role ── */}
          {step === "choose" && (
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="h-0.5 w-8 rounded-full"
                  style={{ background: "#f0c040" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#f0c040" }}
                >
                  Portal Access
                </span>
              </div>
              <h2
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
              >
                Who are you?
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Select your role to continue to the login screen.
              </p>

              <div className="space-y-4">
                {ROLES.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => handleRoleSelect(r.id)}
                    className="w-full flex items-center gap-5 rounded-2xl p-5 text-left transition-all duration-200 group"
                    style={{
                      background: "white",
                      border: `2px solid #e8e2d8`,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.border = `2px solid ${r.border}`;
                      e.currentTarget.style.background = r.bg;
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(26,46,74,0.10)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.border = `2px solid #e8e2d8`;
                      e.currentTarget.style.background = "white";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Icon badge */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-200"
                      style={{
                        background: r.bg,
                        border: `1px solid ${r.border}`,
                      }}
                    >
                      {r.icon}
                    </div>

                    <div className="flex-1">
                      <p
                        className="font-bold text-lg mb-0.5"
                        style={{ color: "#1a2e4a" }}
                      >
                        {r.label}
                      </p>
                      <p className="text-xs text-gray-400">{r.tagline}</p>
                    </div>

                    <svg
                      className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "#1a2e4a", opacity: 0.4 }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>

              <p className="text-center text-xs text-gray-400 mt-8">
                Having trouble?{" "}
                <a
                  href="/contact-us"
                  className="font-semibold"
                  style={{ color: "#1a2e4a" }}
                >
                  Contact the school office
                </a>
              </p>
            </div>
          )}

          {/* ── Step 2: Login form ── */}
          {step === "login" && role && (
            <div>
              {/* Back button */}
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-xs font-semibold mb-8 transition-colors duration-150"
                style={{ color: "#94a3b8" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#1a2e4a")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>

              {/* Role badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                style={{
                  background: role.bg,
                  border: `1px solid ${role.border}`,
                }}
              >
                <span>{role.icon}</span>
                <span
                  className="text-xs font-bold"
                  style={{ color: "#1a2e4a" }}
                >
                  {role.label} Login
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span
                  className="h-0.5 w-8 rounded-full"
                  style={{ background: "#f0c040" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#f0c040" }}
                >
                  Portal Access
                </span>
              </div>
              <h2
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
              >
                Sign In
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Enter your credentials to access the {role.label.toLowerCase()}{" "}
                portal.
              </p>

              {/* Form card */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid #e8e2d8",
                  boxShadow: "0 8px 32px rgba(26,46,74,0.08)",
                }}
              >
                <div
                  className="h-1"
                  style={{
                    background: "linear-gradient(90deg, #f0c040, #e8a820)",
                  }}
                />
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  {/* ID field */}
                  <div>
                    <label
                      className="block text-xs font-bold uppercase tracking-widest mb-1.5"
                      style={{ color: "#1a2e4a" }}
                    >
                      {idLabel}
                    </label>
                    <input
                      type="text"
                      value={form.id}
                      onChange={(e) => setForm({ ...form, id: e.target.value })}
                      placeholder={idPlaceholder}
                      autoComplete="username"
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-150"
                      style={{
                        border: "1px solid #e8e2d8",
                        background: "#f9f6f0",
                        color: "#1a2e4a",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border = "1px solid #f0c040";
                        e.currentTarget.style.background = "white";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = "1px solid #e8e2d8";
                        e.currentTarget.style.background = "#f9f6f0";
                      }}
                    />
                  </div>

                  {/* Password field */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        className="block text-xs font-bold uppercase tracking-widest"
                        style={{ color: "#1a2e4a" }}
                      >
                        Password
                      </label>
                      <button
                        type="button"
                        className="text-xs font-semibold transition-colors duration-150"
                        style={{ color: "#94a3b8" }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.color = "#1a2e4a")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.color = "#94a3b8")
                        }
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        className="w-full px-4 py-2.5 pr-11 rounded-xl text-sm outline-none transition-all duration-150"
                        style={{
                          border: "1px solid #e8e2d8",
                          background: "#f9f6f0",
                          color: "#1a2e4a",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.border = "1px solid #f0c040";
                          e.currentTarget.style.background = "white";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.border = "1px solid #e8e2d8";
                          e.currentTarget.style.background = "#f9f6f0";
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: "rgba(239,68,68,0.08)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        color: "#b91c1c",
                      }}
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
                    style={{
                      background: loading ? "#94a3b8" : "#1a2e4a",
                      color: "white",
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                    onMouseOver={(e) => {
                      if (!loading)
                        e.currentTarget.style.background = "#2d4a73";
                    }}
                    onMouseOut={(e) => {
                      if (!loading)
                        e.currentTarget.style.background = "#1a2e4a";
                    }}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Signing in…
                      </>
                    ) : (
                      <>Sign In →</>
                    )}
                  </button>
                </form>
              </div>

              {/* Help note */}
              <p className="text-center text-xs text-gray-400 mt-6">
                Need your login credentials?{" "}
                <a
                  href="/contact-us"
                  className="font-semibold"
                  style={{ color: "#1a2e4a" }}
                >
                  Contact the school office
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
