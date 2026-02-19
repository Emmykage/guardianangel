import React from "react";
import Navbar from "../../components/nav/Navbar";
import calendarYear from "../../assets/documents/school-calendar-2025.pdf";

const terms = [
  {
    number: "01",
    season: "🍂",
    term: "First Term",
    begins: "8th September 2025",
    ends: "12th December 2025",
    duration: "14 weeks",
    highlights: [
      "Welcome Assembly",
      "Mid-term Break",
      "End of Term Exams",
      "Christmas Break",
    ],
  },
  {
    number: "02",
    season: "🌤️",
    term: "Second Term",
    begins: "12th January 2026",
    ends: "27th March 2026",
    duration: "11 weeks",
    highlights: [
      "New Year Assembly",
      "Mid-term Break",
      "End of Term Exams",
      "Easter Break",
    ],
  },
  {
    number: "03",
    season: "☀️",
    term: "Third Term",
    begins: "20th April 2026",
    ends: "17th July 2026",
    duration: "13 weeks",
    highlights: [
      "Sports Day",
      "Cultural Day",
      "Prize Giving",
      "Graduation & Closing",
    ],
  },
];

const SchoolCalendar = () => {
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
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
          alt="School calendar banner"
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
        <div
          className="absolute bottom-12 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,192,64,0.05), transparent 70%)",
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
            Academic Session Calendar
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Stay updated with key term dates and academic events for the 2025 /
            2026 session.
          </p>
          <a
            href={calendarYear}
            download
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all duration-200"
            style={{ background: "#f0c040", color: "#1a2e4a" }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#e8a820")}
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
            Download Full Calendar
          </a>
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

      {/* ── Session heading ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="h-0.5 w-8 rounded-full"
            style={{ background: "#f0c040" }}
          />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#f0c040" }}
          >
            Academic Year
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-12">
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
          >
            2025 / 2026 Session
          </h2>
          <span
            className="text-sm font-semibold px-3 py-1 rounded-full self-start sm:self-auto"
            style={{ background: "rgba(240,192,64,0.15)", color: "#b8860b" }}
          >
            3 Terms · 38 Weeks
          </span>
        </div>

        {/* Term cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {terms.map((term, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-200"
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

              <div className="p-6">
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{term.season}</span>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: "#f9f6f0",
                      color: "#1a2e4a",
                      border: "1px solid #e8e2d8",
                    }}
                  >
                    {term.duration}
                  </span>
                </div>

                <div
                  className="h-0.5 w-8 rounded-full mb-3"
                  style={{ background: "#f0c040" }}
                />

                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
                >
                  {term.term}
                </h3>

                {/* Dates */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wide w-12 flex-shrink-0"
                      style={{ color: "#1a2e4a" }}
                    >
                      Start
                    </span>
                    <span
                      className="h-px flex-1"
                      style={{ background: "#e8e2d8" }}
                    />
                    <span className="text-sm text-gray-600">{term.begins}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wide w-12 flex-shrink-0"
                      style={{ color: "#1a2e4a" }}
                    >
                      End
                    </span>
                    <span
                      className="h-px flex-1"
                      style={{ background: "#e8e2d8" }}
                    />
                    <span className="text-sm text-gray-600">{term.ends}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: "#f9f6f0", border: "1px solid #e8e2d8" }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "#f0c040" }}
                  >
                    Key Events
                  </p>
                  <ul className="space-y-1.5">
                    {term.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#f0c040" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full year timeline ── */}
      <section className="py-16" style={{ background: "white" }}>
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
              At a Glance
            </span>
          </div>
          <h2
            className="text-3xl font-bold mb-10"
            style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
          >
            Full Year Overview
          </h2>

          <div className="space-y-4">
            {[
              { period: "Sep 2025", event: "First Term Opens", type: "term" },
              {
                period: "Oct 2025",
                event: "First Term Mid-Break",
                type: "break",
              },
              {
                period: "Dec 2025",
                event: "First Term Closes · Christmas Holiday",
                type: "holiday",
              },
              { period: "Jan 2026", event: "Second Term Opens", type: "term" },
              {
                period: "Feb 2026",
                event: "Second Term Mid-Break",
                type: "break",
              },
              {
                period: "Mar 2026",
                event: "Second Term Closes · Easter Holiday",
                type: "holiday",
              },
              { period: "Apr 2026", event: "Third Term Opens", type: "term" },
              {
                period: "Jun 2026",
                event: "Sports Day & Cultural Day",
                type: "event",
              },
              {
                period: "Jul 2026",
                event: "Prize Giving · Graduation · Long Holiday",
                type: "holiday",
              },
            ].map((row, i) => {
              const colors = {
                term: {
                  bg: "rgba(26,46,74,0.08)",
                  dot: "#1a2e4a",
                  text: "#1a2e4a",
                },
                break: {
                  bg: "rgba(240,192,64,0.12)",
                  dot: "#f0c040",
                  text: "#b8860b",
                },
                holiday: {
                  bg: "rgba(16,185,129,0.08)",
                  dot: "#10b981",
                  text: "#065f46",
                },
                event: {
                  bg: "rgba(139,92,246,0.08)",
                  dot: "#8b5cf6",
                  text: "#5b21b6",
                },
              };
              const c = colors[row.type];
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl px-5 py-3"
                  style={{ background: c.bg, border: `1px solid ${c.dot}22` }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: c.dot }}
                  />
                  <span
                    className="text-xs font-bold w-20 flex-shrink-0"
                    style={{ color: c.text }}
                  >
                    {row.period}
                  </span>
                  <span
                    className="h-px flex-1"
                    style={{ background: `${c.dot}33` }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#1a2e4a" }}
                  >
                    {row.event}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { label: "Term Open / Close", color: "#1a2e4a" },
              { label: "Mid-term Break", color: "#f0c040" },
              { label: "Holiday", color: "#10b981" },
              { label: "Special Event", color: "#8b5cf6" },
            ].map((l, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-gray-500"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: l.color }}
                />
                {l.label}
              </div>
            ))}
          </div>
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
          className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
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
            Download the Full Calendar
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 max-w-lg mx-auto">
            Get the complete academic calendar with all term dates, holidays,
            and key events for the 2025 / 2026 session as a PDF.
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
              Download PDF
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
};

export default SchoolCalendar;
