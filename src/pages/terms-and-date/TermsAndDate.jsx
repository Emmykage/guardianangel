import React from "react";
import Navbar from "../../components/nav/Navbar";
import calendarYear from "../../assets/documents/school-calendar-2025.pdf";

const terms = [
  {
    number: "01",
    season: "🍂",
    term: "First Term",
    year: "2025 / 2026",
    begins: "8th September, 2025",
    ends: "12th December, 2025",
    duration: "14 weeks",
    desc: "This term blends academic rigor with holistic child development, integrating the Nigerian and Montessori approaches in a nurturing environment. Children settle into their classes, build new friendships, and begin the year's learning journey.",
    dates: [
      { label: "School Opens", date: "8th September 2025" },
      { label: "Mid-term Break", date: "Late October 2025" },
      { label: "End of Term Exams", date: "December 2025" },
      { label: "Term Closes", date: "12th December 2025" },
      { label: "Christmas Holiday", date: "13th Dec – 11th Jan" },
    ],
  },
  {
    number: "02",
    season: "🌤️",
    term: "Second Term",
    year: "2025 / 2026",
    begins: "12th January, 2026",
    ends: "27th March, 2026",
    duration: "11 weeks",
    desc: "The second term continues the academic programme with renewed energy after the Christmas break. Children deepen their learning, participate in assessments, and engage in enrichment activities leading into Easter.",
    dates: [
      { label: "School Opens", date: "12th January 2026" },
      { label: "Mid-term Break", date: "Mid February 2026" },
      { label: "End of Term Exams", date: "March 2026" },
      { label: "Term Closes", date: "27th March 2026" },
      { label: "Easter Holiday", date: "28th Mar – 19th Apr" },
    ],
  },
  {
    number: "03",
    season: "☀️",
    term: "Third Term",
    year: "2025 / 2026",
    begins: "20th April, 2026",
    ends: "17th July, 2026",
    duration: "13 weeks",
    desc: "The final term of the session culminates in exciting events including Sports Day, Cultural Day, and Prize Giving. It is a time of celebration as pupils reflect on the year's achievements and prepare for the next stage of their journey.",
    dates: [
      { label: "School Opens", date: "20th April 2026" },
      { label: "Sports Day", date: "June 2026" },
      { label: "Cultural Day", date: "June 2026" },
      { label: "Prize Giving & Graduation", date: "July 2026" },
      { label: "Term Closes", date: "17th July 2026" },
    ],
  },
];

export default function TermDates() {
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
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
          alt="School classroom"
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
            Academic Term Dates
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
            Stay updated with our official school calendar and term schedules
            for the 2025 / 2026 academic session.
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

      {/* ── Term sections ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 space-y-16">
        {terms.map((term, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-12 items-start ${
              i % 2 !== 0
                ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                : ""
            }`}
          >
            {/* Text side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="h-0.5 w-8 rounded-full"
                  style={{ background: "#f0c040" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#f0c040" }}
                >
                  {term.year} · Term {term.number}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{term.season}</span>
                <h2
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "'Georgia', serif",
                    color: "#1a2e4a",
                    lineHeight: 1.2,
                  }}
                >
                  {term.term}
                </h2>
              </div>

              <div
                className="h-0.5 w-12 rounded-full mb-5"
                style={{ background: "#f0c040" }}
              />

              <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                {term.desc}
              </p>

              {/* Duration badge */}
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-6"
                style={{
                  background: "rgba(240,192,64,0.15)",
                  color: "#b8860b",
                  border: "1px solid rgba(240,192,64,0.3)",
                }}
              >
                {term.duration}
              </span>
            </div>

            {/* Dates card */}
            <div
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: "white",
                border: "1px solid #e8e2d8",
                boxShadow: "0 4px 16px rgba(26,46,74,0.06)",
              }}
            >
              {/* Gold top bar */}
              <div
                className="h-1"
                style={{
                  background: "linear-gradient(90deg, #f0c040, #e8a820)",
                }}
              />

              {/* Card header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderBottom: "1px solid #e8e2d8" }}
              >
                <h3
                  className="font-bold text-base"
                  style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
                >
                  Important Dates
                </h3>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "#1a2e4a", color: "#f0c040" }}
                >
                  {term.number}
                </span>
              </div>

              <div className="p-6 space-y-3">
                {term.dates.map((d, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 rounded-lg px-4 py-3"
                    style={{
                      background:
                        j === 0 || j === term.dates.length - 1
                          ? "rgba(26,46,74,0.04)"
                          : "#f9f6f0",
                      border: "1px solid #e8e2d8",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background:
                          j === 0 || j === term.dates.length - 1
                            ? "#1a2e4a"
                            : "#f0c040",
                      }}
                    />
                    <span
                      className="text-sm font-semibold flex-1"
                      style={{ color: "#1a2e4a" }}
                    >
                      {d.label}
                    </span>
                    <span className="text-sm text-gray-500">{d.date}</span>
                  </div>
                ))}
              </div>

              {/* Download link */}
              <div className="px-6 pb-6">
                <a
                  href={calendarYear}
                  download
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-bold text-sm transition-all duration-200"
                  style={{ background: "#1a2e4a", color: "white" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#2d4a73")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#1a2e4a")
                  }
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
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                    />
                  </svg>
                  Download Full Calendar
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a2e4a 0%, #2d4a73 100%)",
        }}
      >
        <div
          className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none"
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
            Plan Ahead
          </p>
          <h2
            className="text-3xl font-bold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Have Questions About Our Terms?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 max-w-lg mx-auto">
            Download the full academic calendar or reach out to our admin team
            for any queries about the school schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={calendarYear}
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all duration-200"
              style={{ background: "#f0c040", color: "#1a2e4a" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#e8a820")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#f0c040")}
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
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
              Download Calendar
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
