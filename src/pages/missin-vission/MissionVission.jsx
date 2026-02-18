import Navbar from "../../components/nav/Navbar";

const coreValues = [
  {
    icon: "🏆",
    title: "Excellence",
    desc: "Striving for the highest academic and moral standards in everything we do.",
  },
  {
    icon: "🎨",
    title: "Creativity",
    desc: "Empowering children to think independently, solve problems, and innovate.",
  },
  {
    icon: "⚖️",
    title: "Integrity",
    desc: "Building character through honesty, respect, and personal responsibility.",
  },
];

const missionPoints = [
  "Deliver high-quality education blending the Nigerian and Montessori curricula.",
  "Encourage independence, responsibility, and curiosity in every child.",
  "Instill lifelong values of honesty, kindness, and resilience.",
  "Support children to discover and maximize their God-given potential.",
];

const visionPoints = [
  "Foster creativity and critical thinking for tomorrow's challenges.",
  "Build strong foundations for lifelong learning and leadership.",
  "Remain an inclusive institution where every child feels valued.",
  "Raise children who embody excellence, integrity, and compassion.",
];

export default function MissionVisionPage() {
  return (
    <div style={{ background: "#f9f6f0", fontFamily: "system-ui, sans-serif", color: "#1a2e4a", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-24"
        style={{
          background: "linear-gradient(135deg, #1a2e4a 0%, #2d4a73 60%, #1a3a5c 100%)",
          minHeight: "320px",
        }}
      >
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(240,192,64,0.10), transparent 70%)" }}
        />
        <div
          className="absolute bottom-8 left-1/3 w-80 h-32 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.04), transparent)" }}
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
            style={{ fontFamily: "'Georgia', serif", lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            Our Mission & Vision
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Guiding every child towards excellence, creativity, and lifelong learning.
          </p>
        </div>

        <svg
          className="w-full block"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ height: 48, marginBottom: -2 }}
        >
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="#f9f6f0" />
        </svg>
      </section>

      {/* ── Mission ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl pointer-events-none"
              style={{ border: "3px solid rgba(240,192,64,0.35)", borderRadius: "1rem" }}
            />
            <img
              src="https://images.unsplash.com/photo-1588075592446-240a5bfa84e4?auto=format&fit=crop&w=1200&q=80"
              alt="Mission"
              className="relative rounded-2xl shadow-xl w-full object-cover"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-8 rounded-full" style={{ background: "#f0c040" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f0c040" }}>
                Our Mission
              </span>
            </div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a", lineHeight: 1.2 }}
            >
              What We Set Out to Do
            </h2>
            <p className="text-gray-500 leading-relaxed mb-7">
              At <strong className="text-gray-700">Guardian Angel Nursery & Primary School</strong>, our mission is to provide a nurturing, safe, and stimulating learning environment where children can grow academically, socially, morally, and emotionally.
            </p>

            <ul className="space-y-3">
              {missionPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#f0c040" }}
                  />
                  <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-0.5 w-8 rounded-full" style={{ background: "#f0c040" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f0c040" }}>
                  Our Vision
                </span>
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a", lineHeight: 1.2 }}
              >
                Where We Are Heading
              </h2>
              <p className="text-gray-500 leading-relaxed mb-7">
                Our vision is to be recognized as a leading school in Abuja and beyond — raising confident, disciplined, and innovative young leaders who will positively impact their communities and the world.
              </p>

              <ul className="space-y-3">
                {visionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "#f0c040" }}
                    />
                    <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative order-1 md:order-2">
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-2xl pointer-events-none"
                style={{ border: "3px solid rgba(240,192,64,0.35)", borderRadius: "1rem" }}
              />
              <img
                src="https://images.unsplash.com/photo-1596464716121-8b94a7ef0a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Vision"
                className="relative rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20" style={{ background: "#f9f6f0" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-0.5 w-8 rounded-full" style={{ background: "#f0c040" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f0c040" }}>
              What We Stand For
            </span>
          </div>
          <h2
            className="text-3xl font-bold mb-12"
            style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
          >
            Our Core Values
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 transition-all duration-200 relative overflow-hidden"
                style={{ background: "white", border: "1px solid #e8e2d8" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,46,74,0.12)")
                }
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: "linear-gradient(90deg, #f0c040, #e8a820)" }}
                />
                <div className="text-3xl mb-4 mt-1">{val.icon}</div>
                <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: "#f0c040" }} />
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
                >
                  {val.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
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
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(240,192,64,0.08), transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#f0c040" }}
          >
            Join Our Family
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Partner With Us in Shaping the Future
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 max-w-lg mx-auto">
            Every child deserves the best start in life. Join the Guardian Angel family and
            let's raise tomorrow's leaders together.
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
              onMouseOut={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")}
            >
              Apply Now →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
