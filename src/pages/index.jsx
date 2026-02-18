import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import logo from "../assets/logo/logo.png";
import Footer from "../components/footer/Footer";

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "500+", label: "Happy Graduates" },
  { value: "2", label: "Blended Curricula" },
  { value: "100%", label: "Dedicated Staff" },
];

const quickLinks = [
  { icon: "📋", label: "Admissions", path: "/admission" },
  { icon: "📅", label: "School Calendar", path: "/calendar" },
  { icon: "📚", label: "Curriculum", path: "/curriculum" },
  { icon: "📞", label: "Contact Us", path: "/contact-us" },
];

const highlights = [
  {
    icon: "🎓",
    title: "Dual Curriculum",
    desc: "Nigerian national standards blended seamlessly with the Montessori method.",
  },
  {
    icon: "❤️",
    title: "Caring Community",
    desc: "Every child is known by name — our school is a warm, safe second home.",
  },
  {
    icon: "🌱",
    title: "Holistic Growth",
    desc: "Academic excellence, moral values, creativity, and social development.",
  },
];

const Home = () => {
  const navigate = useNavigate();

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

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden "
        style={{
          background:
            "linear-gradient(135deg, #1a2e4a 0%, #2d4a73 60%, #1a3a5c 100%)",
          minHeight: "100vh",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,192,64,0.10), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(240,192,64,0.06), transparent 70%)",
          }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-36 pb-24 flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#f0c040" }}
            >
              Kubwa, Abuja · Est. 2015
            </p>

            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img
                src={logo}
                alt="Guardian Angel logo"
                className="h-20 drop-shadow-lg"
              />
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{
                fontFamily: "'Georgia', serif",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Guardian Angel <br />
              <span style={{ color: "#f0c040" }}>Nursery & Primary</span>{" "}
              School
            </h1>

            {/* Motto */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(240,192,64,0.12)",
                border: "1px solid rgba(240,192,64,0.3)",
              }}
            >
              <span style={{ color: "#f0c040" }}>✦</span>
              <p
                className="text-sm font-semibold italic"
                style={{ color: "#f0c040" }}
              >
                "Learning, Caring and Sharing Together"
              </p>
              <span style={{ color: "#f0c040" }}>✦</span>
            </div>

            <p className="text-blue-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              We are more than just a school — a family where children grow,
              learn, and thrive through a unique blend of the Nigerian and
              Montessori curricula.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/admission")}
                className="px-8 py-3 rounded-full font-bold text-sm transition-all duration-200"
                style={{ background: "#f0c040", color: "#1a2e4a" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#e8a820")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#f0c040")
                }
              >
                Apply Now
              </button>
              <button
                onClick={() => navigate("/about-us")}
                className="px-8 py-3 rounded-full font-bold text-sm border-2 transition-all duration-200"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "white",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.borderColor = "white")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.35)")
                }
              >
                Discover More →
              </button>
            </div>
          </div>

          {/* Stats panel */}
          <div className="flex-shrink-0 w-full lg:w-72">
            <div
              className="rounded-2xl p-6 grid grid-cols-2 gap-4"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p
                    className="text-2xl font-bold mb-1"
                    style={{
                      fontFamily: "'Georgia', serif",
                      color: "#f0c040",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-blue-200 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {quickLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => navigate(link.path)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(240,192,64,0.15)";
                    e.currentTarget.style.borderColor =
                      "rgba(240,192,64,0.4)";
                    e.currentTarget.style.color = "#f0c040";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.07)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.10)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                  }}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <svg
          className="w-full block absolute bottom-0"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ height: 56 }}
        >
          <path
            d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
            fill="#f9f6f0"
          />
        </svg>
      </section>

      {/* ── Why Guardian Angel ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="h-0.5 w-8 rounded-full"
            style={{ background: "#f0c040" }}
          />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#f0c040" }}
          >
            Why Choose Us
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
              className="rounded-2xl p-7 transition-all duration-200 relative overflow-hidden"
              style={{ background: "white", border: "1px solid #e8e2d8" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(26,46,74,0.12)")
              }
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{
                  background: "linear-gradient(90deg, #f0c040, #e8a820)",
                }}
              />
              <div className="text-3xl mb-4 mt-1">{h.icon}</div>
              <div
                className="h-0.5 w-8 rounded-full mb-4"
                style={{ background: "#f0c040" }}
              />
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
              >
                {h.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Welcome strip ── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-14 items-center">
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
                Our School
              </span>
            </div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
            >
              A Warm Welcome to Guardian Angel
            </h2>
            <div
              className="h-0.5 w-10 rounded-full mb-5"
              style={{ background: "#f0c040" }}
            />
            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              Located in Kubwa, Abuja, Guardian Angel Nursery & Primary School
              has been shaping young lives for over a decade. We blend the
              structured rigour of the Nigerian national curriculum with the
              child-centred discovery of the Montessori method.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm mb-8">
              Our dedicated staff build genuine relationships with every family,
              ensuring each child feels safe, valued, and inspired to grow both
              academically and as a person.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/about-us")}
                className="px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200"
                style={{ background: "#1a2e4a", color: "white" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#2d4a73")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#1a2e4a")
                }
              >
                About Us
              </button>
              <button
                onClick={() => navigate("/about-us/vision-mission")}
                className="px-6 py-2.5 rounded-full font-bold text-sm border-2 transition-all duration-200"
                style={{ borderColor: "#1a2e4a", color: "#1a2e4a" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#1a2e4a";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1a2e4a";
                }}
              >
                Our Mission →
              </button>
            </div>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: "📍",
                label: "Location",
                value:
                  "Plot C144, Church Street (B&B Junction), Kubwa, Abuja.",
              },
              {
                icon: "🕐",
                label: "School Hours",
                value: "Monday – Friday · 8:00 AM – 3:00 PM",
              },
              {
                icon: "📞",
                label: "Admissions",
                value: "Call or visit our office to enroll your child today.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl p-4"
                style={{ background: "#f9f6f0", border: "1px solid #e8e2d8" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: "#1a2e4a", color: "#f0c040" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-0.5"
                    style={{ color: "#f0c040" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-500">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
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
            Join Our Family
          </p>
          <h2
            className="text-3xl font-bold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Give Your Child the Best Start
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 max-w-lg mx-auto">
            Spaces are limited. Reach out to our admissions team today and
            take the first step toward a brighter future for your child.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/admission")}
              className="px-8 py-3 rounded-full font-bold text-sm transition-all duration-200"
              style={{ background: "#f0c040", color: "#1a2e4a" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#e8a820")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "#f0c040")
              }
            >
              Apply Now
            </button>
            <button
              onClick={() => navigate("/contact-us")}
              className="px-8 py-3 rounded-full font-bold text-sm border-2 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.borderColor = "white")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")
              }
            >
              Contact Us →
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default Home;
