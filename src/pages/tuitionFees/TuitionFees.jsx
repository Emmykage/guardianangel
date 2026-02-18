import React from "react";
import Navbar from "../../components/nav/Navbar";

const feeRows = [
  { category: "Nursery 1 & 2", fee: "₦50,000", icon: "🌱" },
  { category: "Primary 1 – 3", fee: "₦65,000", icon: "📚" },
  { category: "Primary 4 – 6", fee: "₦70,000", icon: "🎓" },
  { category: "Uniform & Books", fee: "Varies", icon: "👕" },
];

const highlights = [
  {
    icon: "💰",
    title: "Below Market Rates",
    desc: "Tuition set significantly below average private school fees in Abuja.",
  },
  {
    icon: "📅",
    title: "Flexible Payments",
    desc: "Installment payment plans available to ease financial planning.",
  },
  {
    icon: "🚌",
    title: "Optional Add-ons",
    desc: "Transport, meals, and after-school care available at extra cost.",
  },
  {
    icon: "🎨",
    title: "All-Inclusive Learning",
    desc: "Full access to Montessori resources and extracurricular activities.",
  },
];

export default function TuitionFees() {
  return (
    <main
      style={{
        background: "#f9f6f0",
        fontFamily: "system-ui, sans-serif",
        color: "#1a2e4a",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* ── Hero Banner ── */}
      <section
        className="relative overflow-hidden pt-24"
        style={{ minHeight: "330px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
          alt="School children learning"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.13 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,46,74,0.97) 0%, rgba(45,74,115,0.94) 60%, rgba(26,58,92,0.97) 100%)",
          }}
        />
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,192,64,0.10), transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#f0c040" }}
          >
            Guardian Angel Nursery & Primary School
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{
              fontFamily: "'Georgia', serif",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Tuition & Other Fees
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
            Quality education without financial strain — because every child
            deserves the very best start in life.
          </p>
        </div>

        <svg
          className="w-full block relative"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ height: 48, marginBottom: -2 }}
        >
          <path
            d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
            fill="#f9f6f0"
          />
        </svg>
      </section>

      {/* ── Main Content ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left — description + highlights */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-8 rounded-full" style={{ background: "#f0c040" }} />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#f0c040" }}
              >
                Affordable Excellence
              </span>
            </div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a", lineHeight: 1.2 }}
            >
              World-Class Education at an Accessible Cost
            </h2>
            <div className="h-0.5 w-10 rounded-full mb-5" style={{ background: "#f0c040" }} />
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              At <strong className="text-gray-700">Guardian Angel</strong>, we believe that
              every child deserves access to high-quality education at an affordable cost.
              Our tuition is pocket-friendly while delivering a unique blend of the{" "}
              <strong className="text-gray-700">Nigerian and Montessori curricula</strong> —
              structured learning meets child-centred discovery.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl px-4 py-3 transition-all duration-200"
                  style={{ background: "white", border: "1px solid #e8e2d8" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(26,46,74,0.08)")
                  }
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <span className="text-xl flex-shrink-0">{h.icon}</span>
                  <div>
                    <p
                      className="font-semibold text-sm mb-0.5"
                      style={{ color: "#1a2e4a" }}
                    >
                      {h.title}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — fee table card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "white",
              border: "1px solid #e8e2d8",
              boxShadow: "0 8px 32px rgba(26,46,74,0.08)",
            }}
          >
            {/* Gold top bar */}
            <div
              className="h-1"
              style={{ background: "linear-gradient(90deg, #f0c040, #e8a820)" }}
            />

            {/* Card header */}
            <div
              className="px-6 py-5"
              style={{ borderBottom: "1px solid #e8e2d8" }}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="h-0.5 w-6 rounded-full" style={{ background: "#f0c040" }} />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#f0c040" }}
                >
                  Per Term
                </span>
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
              >
                Sample Fee Structure
              </h3>
            </div>

            {/* Table rows */}
            <div className="divide-y" style={{ borderColor: "#e8e2d8" }}>
              {/* Column headers */}
              <div
                className="grid grid-cols-2 px-6 py-3"
                style={{ background: "#f9f6f0" }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#1a2e4a" }}
                >
                  Category
                </span>
                <span
                  className="text-xs font-bold uppercase tracking-widest text-right"
                  style={{ color: "#1a2e4a" }}
                >
                  Fee (per term)
                </span>
              </div>

              {feeRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 items-center px-6 py-4 transition-colors duration-100"
                  style={{
                    background: i % 2 === 0 ? "white" : "#fdfcf9",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "rgba(240,192,64,0.06)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background =
                      i % 2 === 0 ? "white" : "#fdfcf9")
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{row.icon}</span>
                    <span className="text-sm font-medium" style={{ color: "#1a2e4a" }}>
                      {row.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <span
                      className="text-sm font-bold"
                      style={{ color: row.fee === "Varies" ? "#94a3b8" : "#1a2e4a" }}
                    >
                      {row.fee}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="px-6 py-4" style={{ borderTop: "1px solid #e8e2d8" }}>
              <p className="text-xs text-gray-400 leading-relaxed">
                * Fees shown are per term. Prices are subject to review.
                Contact our office for the most up-to-date fee schedule.
              </p>
            </div>

            {/* CTA button */}
            <div className="px-6 pb-6">
              <a
                href="/contact-us"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-bold text-sm transition-all duration-200"
                style={{ background: "#1a2e4a", color: "white" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#2d4a73")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#1a2e4a")
                }
              >
                Request Detailed Fee Breakdown →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Payment info strip ── */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-0.5 w-8 rounded-full" style={{ background: "#f0c040" }} />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#f0c040" }}
            >
              Payment Information
            </span>
          </div>
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
          >
            How to Pay
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: "🏦",
                title: "Bank Transfer",
                desc: "Pay directly into our school bank account. Contact the office for account details.",
              },
              {
                icon: "🧾",
                title: "Cash at Office",
                desc: "Visit our school office during working hours (Mon–Fri, 8 AM – 4 PM) to pay in person.",
              },
              {
                icon: "📞",
                title: "Payment Plan",
                desc: "Speak to our admin team to arrange a structured installment plan that suits your budget.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5 relative overflow-hidden transition-all duration-200"
                style={{ background: "#f9f6f0", border: "1px solid #e8e2d8" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(26,46,74,0.08)")
                }
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                  style={{ background: "linear-gradient(90deg, #f0c040, #e8a820)" }}
                />
                <div className="text-3xl mb-3 mt-1">{item.icon}</div>
                <h4
                  className="font-bold text-sm mb-1"
                  style={{ color: "#1a2e4a" }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a2e4a 0%, #2d4a73 100%)" }}
      >
        <div
          className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(240,192,64,0.08), transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#f0c040" }}
          >
            Get Started
          </p>
          <h2
            className="text-3xl font-bold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Ready to Enrol Your Child?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 max-w-lg mx-auto">
            Contact our admissions team for a full fee breakdown, payment
            options, and to book a school tour.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact-us"
              className="px-8 py-3 rounded-full font-bold text-sm transition-all duration-200"
              style={{ background: "#f0c040", color: "#1a2e4a" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#e8a820")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#f0c040")}
            >
              Contact Us
            </a>
            <a
              href="/admission"
              className="px-8 py-3 rounded-full font-bold text-sm border-2 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = "white")}
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")
              }
            >
              Apply Now →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
