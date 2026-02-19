import React from "react";
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/Footer";

const nigerianSubjects = [
  { icon: "📖", label: "English Language & Literacy" },
  { icon: "🔢", label: "Mathematics & Problem Solving" },
  { icon: "🔬", label: "Basic Science & Technology" },
  { icon: "⚖️", label: "Civic & Moral Education" },
  { icon: "🌍", label: "Social Studies & National Values" },
];

const montessoriPillars = [
  { icon: "🖐️", label: "Hands-on practical life activities" },
  { icon: "🧘", label: "Concentration & self-discipline" },
  { icon: "💡", label: "Creativity, critical thinking & collaboration" },
  { icon: "🌱", label: "Respect for individuality & holistic growth" },
];

const enrichment = [
  {
    icon: "🎨",
    title: "Arts & Creativity",
    desc: "Developing imagination and expression through music, art, and drama.",
    img: "https://cdn.pixabay.com/photo/2017/02/01/22/02/painting-2035333_1280.jpg",
  },
  {
    icon: "⚽",
    title: "Sports & Fitness",
    desc: "Encouraging teamwork, resilience, and healthy lifestyles through sports and outdoor activities.",
    img: "https://cdn.pixabay.com/photo/2016/11/29/10/07/fun-1869206_1280.jpg",
  },
  {
    icon: "💻",
    title: "ICT & Innovation",
    desc: "Preparing children for the digital future with technology and problem-solving skills.",
    img: "https://cdn.pixabay.com/photo/2014/04/03/11/51/computer-312091_1280.jpg",
  },
];

const Curriculum = () => {
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
        style={{ minHeight: "380px" }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2017/04/05/01/06/blackboard-2207411_1280.jpg"
          alt="School children in classroom"
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
          className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
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
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{
              fontFamily: "'Georgia', serif",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Our Curriculum
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Blending the Nigerian curriculum with the Montessori method to
            nurture confident, creative, and independent learners.
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

      {/* ── Intro ── */}
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
            Our Approach
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl font-bold mb-5"
              style={{
                fontFamily: "'Georgia', serif",
                color: "#1a2e4a",
                lineHeight: 1.2,
              }}
            >
              A Dual Approach to Learning
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our school runs a{" "}
              <strong className="text-gray-700">dual curriculum</strong> that
              integrates the{" "}
              <strong className="text-gray-700">
                Nigerian National Curriculum
              </strong>{" "}
              with the{" "}
              <strong className="text-gray-700">Montessori method</strong>. This
              unique blend ensures academic excellence while fostering
              independence, creativity, critical thinking, and holistic child
              development.
            </p>
          </div>

          {/* Two-badge summary */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "🇳🇬",
                title: "Nigerian Curriculum",
                desc: "National academic standards & structured learning",
              },
              {
                icon: "🌿",
                title: "Montessori Method",
                desc: "Child-led exploration & hands-on discovery",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{ background: "white", border: "1px solid #e8e2d8" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background: "linear-gradient(90deg, #f0c040, #e8a820)",
                  }}
                />
                <div className="text-3xl mb-3 mt-1">{item.icon}</div>
                <h4
                  className="font-bold text-sm mb-1"
                  style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nigerian Curriculum ── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Text */}
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
                  Academic Foundation
                </span>
              </div>
              <h3
                className="text-3xl font-bold mb-4"
                style={{
                  fontFamily: "'Georgia', serif",
                  color: "#1a2e4a",
                  lineHeight: 1.2,
                }}
              >
                Nigerian Curriculum
              </h3>
              <div
                className="h-0.5 w-10 rounded-full mb-5"
                style={{ background: "#f0c040" }}
              />
              <p className="text-gray-500 leading-relaxed mb-7 text-sm">
                The Nigerian curriculum provides a strong academic foundation in
                literacy, numeracy, science, and social studies. It ensures that
                our pupils meet national standards while being prepared for
                secondary education and future opportunities.
              </p>

              <div className="space-y-2">
                {nigerianSubjects.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{
                      background: "#f9f6f0",
                      border: "1px solid #e8e2d8",
                    }}
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#1a2e4a" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-2xl pointer-events-none"
                style={{
                  border: "3px solid rgba(240,192,64,0.35)",
                  borderRadius: "1rem",
                }}
              />
              <img
                src="https://cdn.pixabay.com/photo/2015/09/09/20/30/children-932115_1280.jpg"
                alt="Children learning in classroom"
                className="relative rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Montessori ── */}
      <section className="py-20" style={{ background: "#f9f6f0" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative order-2 md:order-1">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl pointer-events-none"
                style={{
                  border: "3px solid rgba(240,192,64,0.35)",
                  borderRadius: "1rem",
                }}
              />
              <img
                src="https://cdn.pixabay.com/photo/2018/01/14/12/59/child-3086710_1280.jpg"
                alt="Montessori learning materials"
                className="relative rounded-2xl shadow-xl w-full object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="h-0.5 w-8 rounded-full"
                  style={{ background: "#f0c040" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#f0c040" }}
                >
                  Child-Led Discovery
                </span>
              </div>
              <h3
                className="text-3xl font-bold mb-4"
                style={{
                  fontFamily: "'Georgia', serif",
                  color: "#1a2e4a",
                  lineHeight: 1.2,
                }}
              >
                Montessori Method
              </h3>
              <div
                className="h-0.5 w-10 rounded-full mb-5"
                style={{ background: "#f0c040" }}
              />
              <p className="text-gray-500 leading-relaxed mb-7 text-sm">
                The Montessori method nurtures independence, curiosity, and
                creativity. Children learn at their own pace in a structured yet
                flexible environment that encourages exploration and
                problem-solving.
              </p>

              <div className="space-y-2">
                {montessoriPillars.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{ background: "white", border: "1px solid #e8e2d8" }}
                  >
                    <span className="text-lg">{p.icon}</span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#1a2e4a" }}
                    >
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Enrichment ── */}
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
              Enrichment
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
            >
              Beyond the Classroom
            </h2>
          </div>
          <p className="text-gray-500 leading-relaxed max-w-2xl mb-12 text-sm">
            Our curriculum is complemented by a wide range of enrichment
            programmes that ensure every child grows into a well-rounded
            individual.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            {enrichment.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden group transition-all duration-200"
                style={{ background: "#f9f6f0", border: "1px solid #e8e2d8" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(26,46,74,0.12)")
                }
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                {/* Image */}
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background: "linear-gradient(90deg, #f0c040, #e8a820)",
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div
                      className="h-0.5 flex-1 rounded-full"
                      style={{ background: "#f0c040" }}
                    />
                  </div>
                  <h4
                    className="font-bold text-lg mb-2"
                    style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
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
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
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
            Want to Learn More?
          </p>
          <h2
            className="text-3xl font-bold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Discover the Full Learning Experience
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 max-w-lg mx-auto">
            Book a school tour to see our dual curriculum in action, or speak
            with our admissions team to learn how we can support your child's
            growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/admission"
              className="px-8 py-3 rounded-full font-bold text-sm transition-all duration-200"
              style={{ background: "#f0c040", color: "#1a2e4a" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#e8a820")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#f0c040")}
            >
              Apply Now
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

      <Footer />
    </main>
  );
};

export default Curriculum;
