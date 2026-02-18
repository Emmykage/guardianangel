import React from "react";
import Navbar from "../../components/nav/Navbar";

const highlights = [
  {
    icon: "📚",
    title: "Dual Curriculum",
    desc: "Seamlessly blending the Nigerian national curriculum with Montessori principles for a rich, balanced education.",
  },
  {
    icon: "🌱",
    title: "Holistic Growth",
    desc: "We nurture academic excellence alongside creativity, moral values, and social development.",
  },
  {
    icon: "❤️",
    title: "Caring Community",
    desc: "Every child is known by name. Our staff build genuine relationships with families we serve.",
  },
];

const WelcomePage = () => {
  return (
    <main style={{ background: "#f9f6f0", fontFamily: "system-ui, sans-serif", color: "#1a2e4a" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-24"
        style={{
          background: "linear-gradient(135deg, #1a2e4a 0%, #2d4a73 60%, #1a3a5c 100%)",
          minHeight: "520px",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(240,192,64,0.10), transparent 70%)" }}
        />
        <div
          className="absolute bottom-10 left-0 w-80 h-40 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.04), transparent)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#f0c040" }}
            >
              Guardian Angel Nursery & Primary School
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Georgia', serif", lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              Where Every Child <br /> Finds Their Wings
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">
              We are more than just a school — we are a family where children grow, learn,
              and thrive. With a blend of the Nigerian and Montessori curricula, we nurture
              every child to reach their full potential.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="/admission"
                className="px-7 py-3 rounded-full font-bold text-sm transition-all duration-200"
                style={{ background: "#f0c040", color: "#1a2e4a" }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#e8a820")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#f0c040")}
              >
                Apply Now
              </a>
              <a
                href="/about-us"
                className="px-7 py-3 rounded-full font-bold text-sm border-2 transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = "white")}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")}
              >
                Discover More →
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div
              className="absolute -top-3 -right-3 w-full h-full rounded-2xl pointer-events-none"
              style={{ border: "3px solid rgba(240,192,64,0.35)", borderRadius: "1rem" }}
            />
            <img
              src="https://images.unsplash.com/photo-1600880292089-90e1c9f9c4fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
              alt="Happy school children"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
              style={{ maxHeight: "380px" }}
            />
          </div>
        </div>

        {/* Wave */}
        <svg
          className="w-full block"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ height: 48, marginBottom: -2 }}
        >
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="#f9f6f0" />
        </svg>
      </section>

      {/* ── Highlight Stats ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 -mt-6 pb-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { stat: "10+", label: "Years of Excellence" },
            { stat: "500+", label: "Happy Graduates" },
            { stat: "2", label: "Accredited Curricula" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "white",
                border: "1px solid #e8e2d8",
                boxShadow: "0 4px 16px rgba(26,46,74,0.08)",
              }}
            >
              <p
                className="text-3xl font-bold mb-1"
                style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
              >
                {item.stat}
              </p>
              <div className="h-0.5 w-8 rounded-full mx-auto mb-2" style={{ background: "#f0c040" }} />
              <p className="text-sm text-gray-500 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Warm Welcome ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-0.5 w-8 rounded-full" style={{ background: "#f0c040" }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f0c040" }}>
            Our Welcome
          </span>
        </div>
        <h2
          className="text-3xl font-bold mb-5"
          style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
        >
          A Warm Welcome
        </h2>
        <p className="text-gray-500 leading-relaxed max-w-2xl mb-14 text-base">
          At Guardian Angel, every child is seen as a unique individual with limitless
          potential. Our dedicated teachers and caring staff are committed to providing a
          holistic educational experience that balances academics, creativity, moral values,
          and social development.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              img: "https://images.unsplash.com/photo-1588075592446-2628ef58fbfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              alt: "Classroom environment",
              title: "Our Environment",
              desc: "We provide a safe, nurturing, and engaging learning environment that encourages curiosity, teamwork, and respect for others.",
            },
            {
              img: "https://images.unsplash.com/photo-1601944177325-44a3a93f1e1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              alt: "Children learning",
              title: "Our Promise",
              desc: "We equip your child with the knowledge, skills, and values that prepare them for future success — academically and socially.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden group cursor-default transition-all duration-200"
              style={{
                background: "white",
                border: "1px solid #e8e2d8",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,46,74,0.12)")
              }
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gold top bar on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: "linear-gradient(90deg, #f0c040, #e8a820)" }}
                />
              </div>
              <div className="p-7">
                <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: "#f0c040" }} />
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-0.5 w-8 rounded-full" style={{ background: "#f0c040" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f0c040" }}>
              Why Guardian Angel
            </span>
          </div>
          <h2
            className="text-3xl font-bold mb-12"
            style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
          >
            Built for Every Child
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 transition-all duration-200"
                style={{
                  background: "#f9f6f0",
                  border: "1px solid #e8e2d8",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,46,74,0.10)")
                }
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className="text-3xl mb-4">{h.icon}</div>
                <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: "#f0c040" }} />
                <h4
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
                >
                  {h.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a2e4a 0%, #2d4a73 100%)" }}
      >
        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(240,192,64,0.08), transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#f0c040" }}
          >
            Ready to Join Us?
          </p>
          <h2
            className="text-3xl font-bold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Give Your Child the Best Start
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 max-w-lg mx-auto">
            Spaces are limited. Reach out to our admissions team today and take the
            first step toward a brighter future for your child.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/admission"
              className="px-8 py-3 rounded-full font-bold text-sm transition-all duration-200"
              style={{ background: "#f0c040", color: "#1a2e4a" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#e8a820")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#f0c040")}
            >
              Apply Now
            </a>
            <a
              href="/contact-us"
              className="px-8 py-3 rounded-full font-bold text-sm border-2 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = "white")}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")}
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WelcomePage;
