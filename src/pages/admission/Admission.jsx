import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";

const steps = [
  {
    number: "01",
    icon: "📞",
    title: "Initial Inquiry",
    desc: "Parents or guardians can contact the school via phone, email, or by visiting our campus to request information about classes and available programs.",
    img: "https://cdn.pixabay.com/photo/2015/07/28/22/01/phone-865091_1280.jpg",
  },
  {
    number: "02",
    icon: "🏫",
    title: "School Tour & Consultation",
    desc: "Parents are invited to tour the school and meet our admissions team to learn about our Nigerian and Montessori blended curriculum.",
    img: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
  },
  {
    number: "03",
    icon: "📝",
    title: "Application Form",
    desc: "Complete the admission form (online or at the office) and submit required documents: birth certificate, passport photograph, and previous school records if applicable.",
    img: "https://cdn.pixabay.com/photo/2014/04/03/11/51/form-312086_1280.png",
  },
  {
    number: "04",
    icon: "🔍",
    title: "Assessment & Observation",
    desc: "Montessori (early years) students undergo a play-based observation, while Nigerian curriculum applicants sit a placement test in literacy and numeracy.",
    img: "https://cdn.pixabay.com/photo/2016/03/27/20/54/school-1280964_1280.jpg",
  },
  {
    number: "05",
    icon: "🤝",
    title: "Parent Interview",
    desc: "A brief meeting with parents to discuss expectations, shared values, and our collaborative role in each child's educational journey.",
    img: "https://cdn.pixabay.com/photo/2016/03/26/22/13/silhouettes-1280434_1280.jpg",
  },
  {
    number: "06",
    icon: "✉️",
    title: "Admission Decision & Offer",
    desc: "Successful applicants receive a formal admission letter together with the fee schedule and next steps for enrollment.",
    img: "https://cdn.pixabay.com/photo/2015/07/28/22/01/hand-865091_1280.jpg",
  },
  {
    number: "07",
    icon: "🎒",
    title: "Enrollment & Orientation",
    desc: "Parents confirm acceptance by paying the enrollment fee. New pupils and their parents are then invited to an orientation session before school resumption.",
    img: "https://cdn.pixabay.com/photo/2016/08/05/10/40/classroom-1571148_1280.jpg",
    wide: true,
  },
];

const Admission = () => {
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
          src="https://cdn.pixabay.com/photo/2016/03/27/21/16/back-to-school-1280966_1280.jpg"
          alt="Admissions banner"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.15 }}
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
          className="absolute bottom-10 -left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,192,64,0.06), transparent 70%)",
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
            Admissions
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Join our learning community where academic excellence meets
            creativity, independence, and holistic child development.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 rounded-full font-bold text-sm transition-all duration-200"
            style={{ background: "#f0c040", color: "#1a2e4a" }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#e8a820")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#f0c040")}
          >
            Enquire Now
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

      {/* ── Intro ── */}
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
            How It Works
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
          >
            The Admission Process
          </h2>
          <span
            className="text-sm font-semibold px-3 py-1 rounded-full"
            style={{ background: "rgba(240,192,64,0.15)", color: "#b8860b" }}
          >
            7 Simple Steps
          </span>
        </div>
        <p className="text-gray-500 leading-relaxed max-w-2xl">
          We believe in making admissions a smooth and transparent journey for
          parents and pupils. Here is everything you need to know about joining
          the Guardian Angel family.
        </p>
      </section>

      {/* ── Steps Grid ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden group transition-all duration-200 ${
                step.wide ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
              style={{
                background: "white",
                border: "1px solid #e8e2d8",
              }}
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

              {/* Image — only show full-width on wide card, hide on small cards for cleaner look */}
              {step.wide && (
                <div className="h-52 overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className={`p-6 ${step.wide ? "md:flex md:items-start md:gap-8" : ""}`}>
                {/* Step number badge */}
                <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold"
                    style={{ background: "#1a2e4a", color: "#f0c040" }}
                  >
                    {step.number}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>

                <div>
                  <div
                    className="h-0.5 w-8 rounded-full mb-3"
                    style={{ background: "#f0c040" }}
                  />
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      fontFamily: "'Georgia', serif",
                      color: "#1a2e4a",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Requirements strip ── */}
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
              What to Bring
            </span>
          </div>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
          >
            Required Documents
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "📄", label: "Birth Certificate", desc: "Original or certified copy of the child's birth certificate." },
              { icon: "📷", label: "Passport Photograph", desc: "Two recent passport-sized photographs of the child." },
              { icon: "🏫", label: "Previous School Records", desc: "Latest report card or transfer letter (where applicable)." },
              { icon: "💉", label: "Immunisation Card", desc: "Up-to-date immunisation record for the child." },
            ].map((doc, i) => (
              <div
                key={i}
                className="rounded-xl p-5 flex items-start gap-4"
                style={{ background: "#f9f6f0", border: "1px solid #e8e2d8" }}
              >
                <span className="text-2xl flex-shrink-0">{doc.icon}</span>
                <div>
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: "#1a2e4a" }}
                  >
                    {doc.label}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {doc.desc}
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
            Begin the Journey
          </p>
          <h2
            className="text-3xl font-bold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Ready to Apply?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 max-w-lg mx-auto">
            Our admissions team is happy to guide you through every step. Get
            in touch today or download the registration form to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact-us"
              className="px-8 py-3 rounded-full font-bold text-sm transition-all duration-200"
              style={{ background: "#f0c040", color: "#1a2e4a" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#e8a820")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "#f0c040")
              }
            >
              Contact Us
            </a>
            <a
              href="/information"
              className="px-8 py-3 rounded-full font-bold text-sm border-2 transition-all duration-200"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "white",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.borderColor = "white")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")
              }
            >
              Download Form →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Admission;
