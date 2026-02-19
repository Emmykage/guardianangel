import React from "react";
import Navbar from "../../components/nav/Navbar";
import registrationForm from "../../assets/documents/Registration-Form.pdf";
import calendarYear from "../../assets/documents/school-calendar-2025.pdf";

const infoCards = [
  {
    icon: "📑",
    label: "Quick Download",
    title: "Registration Form",
    desc: "Start your child's learning journey with us by downloading and filling out the official registration form.",
    cta: "Download Registration Form",
    href: registrationForm,
    download: true,
  },
  {
    icon: "📅",
    label: "2025 / 2026 Session",
    title: "Academic Calendar",
    desc: "View our structured academic calendar highlighting key term dates, events, and important school milestones.",
    cta: "Download Full Calendar",
    href: calendarYear,
    download: true,
  },
];

const termDates = [
  {
    term: "First Term",
    start: "8th September, 2025",
    end: "12th December, 2025",
    icon: "🍂",
  },
  {
    term: "Second Term",
    start: "12th January, 2026",
    end: "27th March, 2026",
    icon: "🌤️",
  },
  {
    term: "Third Term",
    start: "20th April, 2026",
    end: "18th July, 2026",
    icon: "☀️",
  },
];

export default function InformationPage() {
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
        style={{ minHeight: "340px" }}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1606327054574-56b8bb08a9d3?q=80&w=1600&auto=format&fit=crop"
          alt="School info banner"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.18 }}
        />
        {/* Navy overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,46,74,0.97) 0%, rgba(45,74,115,0.94) 60%, rgba(26,58,92,0.97) 100%)",
          }}
        />
        {/* Decorative blob */}
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
            School Information
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Guardian Angel at a glance —
            forms, calendars, fees, and term dates.
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

      {/* ── Downloads ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="h-0.5 w-8 rounded-full"
            style={{ background: "#f0c040" }}
          />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#f0c040" }}
          >
            Downloads
          </span>
        </div>
        <h2
          className="text-3xl font-bold mb-10"
          style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
        >
          Forms & Documents
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {infoCards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200 relative"
              style={{ background: "white", border: "1px solid #e8e2d8" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(26,46,74,0.12)")
              }
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              {/* Gold top bar */}
              <div
                className="h-1"
                style={{
                  background: "linear-gradient(90deg, #f0c040, #e8a820)",
                }}
              />
              <div className="p-8">
                <div className="text-4xl mb-4">{card.icon}</div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: "#f0c040" }}
                >
                  {card.label}
                </p>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    fontFamily: "'Georgia', serif",
                    color: "#1a2e4a",
                  }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
                <a
                  href={card.href}
                  download={card.download}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200"
                  style={{ background: "#1a2e4a", color: "white" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#2d4a73")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#1a2e4a")
                  }
                >
                  {card.cta}
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
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tuition ── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-0.5 w-8 rounded-full"
              style={{ background: "#f0c040" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#f0c040" }}
            >
              Fees
            </span>
          </div>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
          >
            Tuition & Other Fees
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-500 leading-relaxed mb-6">
                At{" "}
                <strong className="text-gray-700">
                  Guardian Angel Nursery & Primary School
                </strong>
                , we believe that exceptional education should be accessible
                without financial strain. Our tuition is pocket-friendly,
                offering a high-value blend of the Nigerian and Montessori
                curricula — structured learning meets child-centered discovery.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our rates are significantly below the average private school
                fees in Abuja, making quality early education available to every
                family that values their child's future.
              </p>
            </div>

            {/* Fee highlights */}
            <div className="space-y-4">
              {[
                {
                  label: "Pocket-Friendly Rates",
                  desc: "Below average Abuja private school fees.",
                },
                {
                  label: "No Hidden Charges",
                  desc: "Transparent billing with no surprises.",
                },
                {
                  label: "Flexible Payment Plans",
                  desc: "Contact us to discuss payment options.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl p-4"
                  style={{ background: "#f9f6f0", border: "1px solid #e8e2d8" }}
                >
                  <span
                    className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#f0c040" }}
                  />
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#1a2e4a" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Term Dates ── */}
      <section className="py-20" style={{ background: "#f9f6f0" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-0.5 w-8 rounded-full"
              style={{ background: "#f0c040" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#f0c040" }}
            >
              2025 / 2026 Session
            </span>
          </div>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
          >
            Term Dates
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {termDates.map((term, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{ background: "white", border: "1px solid #e8e2d8" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(26,46,74,0.10)")
                }
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div
                  className="h-1"
                  style={{
                    background: "linear-gradient(90deg, #f0c040, #e8a820)",
                  }}
                />
                <div className="p-6">
                  <div className="text-3xl mb-3">{term.icon}</div>
                  <h3
                    className="font-bold text-lg mb-3"
                    style={{
                      fontFamily: "'Georgia', serif",
                      color: "#1a2e4a",
                    }}
                  >
                    {term.term}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: "#1a2e4a", minWidth: "36px" }}
                      >
                        Start
                      </span>
                      <span
                        className="h-px flex-1"
                        style={{ background: "#e8e2d8" }}
                      />
                      <span>{term.start}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: "#1a2e4a", minWidth: "36px" }}
                      >
                        End
                      </span>
                      <span
                        className="h-px flex-1"
                        style={{ background: "#e8e2d8" }}
                      />
                      <span>{term.end}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-xs mt-6 text-center">
            * Dates are subject to change. Please download the full academic
            calendar for confirmed dates.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a2e4a 0%, #2d4a73 100%)",
        }}
      >
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,192,64,0.08), transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#f0c040" }}
          >
            Ready to Enroll?
          </p>
          <h2
            className="text-3xl font-bold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Secure Your Child's Place Today
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 max-w-lg mx-auto">
            Download the registration form, fill it out, and reach out to our
            admissions team — we're happy to walk you through every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={registrationForm}
              download
              className="px-8 py-3 rounded-full font-bold text-sm transition-all duration-200"
              style={{ background: "#f0c040", color: "#1a2e4a" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#e8a820")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#f0c040")}
            >
              Download Form
            </a>
            <a
              href="/contact-us"
              className="px-8 py-3 rounded-full font-bold text-sm border-2 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = "white")}
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")
              }
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
