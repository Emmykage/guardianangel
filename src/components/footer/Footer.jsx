import { NavLink } from "react-router-dom";
import { IoMailSharp } from "react-icons/io5";
import logo from "../../assets/logo/logo.png";
import {
  FaFacebook,
  FaHouseChimney,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Admissions", path: "/admission" },
  { label: "Curriculum", path: "/curriculum" },
  { label: "News & Events", path: "/news-events" },
  { label: "Contact Us", path: "/contact-us" },
];

const socialLinks = [
  { icon: <FaFacebook />, href: "#", label: "Facebook" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
  { icon: <FaTiktok />, href: "#", label: "TikTok" },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #0f1e33 0%, #1a2e4a 60%, #162840 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Gold top accent */}
      <div
        className="w-full h-1"
        style={{ background: "linear-gradient(90deg, #f0c040, #e8a820, #f0c040)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* ── School Info ── */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="flex justify-center sm:justify-start mb-5">
              <img
                src={logo}
                alt="Guardian Angel School Logo"
                className="w-36 transition-opacity duration-200 hover:opacity-80"
              />
            </NavLink>
            <p className="text-sm leading-relaxed text-center sm:text-left"
              style={{ color: "rgba(191,210,230,0.8)" }}>
              Guardian Angel Nursery & Primary School provides a nurturing
              environment where children thrive academically, socially, and
              spiritually — through a unique blend of the Nigerian curriculum
              and Montessori method.
            </p>

            {/* Motto */}
            <div
              className="mt-5 px-3 py-2 rounded-lg text-center sm:text-left"
              style={{
                background: "rgba(240,192,64,0.08)",
                border: "1px solid rgba(240,192,64,0.2)",
              }}
            >
              <p className="text-xs italic font-medium" style={{ color: "#f0c040" }}>
                ✦ "Learning, Caring and Sharing Together"
              </p>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="mb-1 font-bold text-white text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <div className="h-0.5 w-8 rounded-full mb-5" style={{ background: "#f0c040" }} />
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    className="flex items-center gap-2 text-sm transition-all duration-150 group"
                    style={{ color: "rgba(191,210,230,0.8)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-150 group-hover:w-3"
                      style={{ background: "#f0c040" }}
                    />
                    <span className="group-hover:text-white transition-colors duration-150">
                      {link.label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h3 className="mb-1 font-bold text-white text-sm uppercase tracking-widest">
              Contact Us
            </h3>
            <div className="h-0.5 w-8 rounded-full mb-5" style={{ background: "#f0c040" }} />

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(240,192,64,0.12)", color: "#f0c040" }}
                >
                  <FaHouseChimney className="text-xs" />
                </div>
                <address
                  className="not-italic text-xs leading-relaxed"
                  style={{ color: "rgba(191,210,230,0.8)" }}
                >
                  Plot C144 Church Street at Imeko Close (B&B Junction),
                  Off Sultan Dasuki Road, Phase 2, Site 2, Kubwa, Abuja.
                </address>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(240,192,64,0.12)", color: "#f0c040" }}
                >
                  <FaPhoneAlt className="text-xs" />
                </div>
                <a
                  href="tel:+2348000000000"
                  className="text-xs transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(191,210,230,0.8)" }}
                >
                  +234 800 000 0000
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(240,192,64,0.12)", color: "#f0c040" }}
                >
                  <IoMailSharp className="text-xs" />
                </div>
                <a
                  href="mailto:support@guardianangelschool.com"
                  className="text-xs transition-colors duration-150 hover:text-white break-all"
                  style={{ color: "rgba(191,210,230,0.8)" }}
                >
                  support@guardianangelschool.com
                </a>
              </div>

              {/* Hours */}
              <div
                className="rounded-lg px-3 py-2.5 text-xs"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(191,210,230,0.7)",
                }}
              >
                🕐 Mon – Fri &nbsp;·&nbsp; 8:00 AM – 4:00 PM
              </div>
            </div>
          </div>

          {/* ── Follow Us ── */}
          <div>
            <h3 className="mb-1 font-bold text-white text-sm uppercase tracking-widest">
              Follow Us
            </h3>
            <div className="h-0.5 w-8 rounded-full mb-5" style={{ background: "#f0c040" }} />

            <p className="text-xs mb-5" style={{ color: "rgba(191,210,230,0.7)" }}>
              Stay connected for news, updates, and highlights from our school community.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "rgba(191,210,230,0.8)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(240,192,64,0.15)";
                    e.currentTarget.style.borderColor = "rgba(240,192,64,0.4)";
                    e.currentTarget.style.color = "#f0c040";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                    e.currentTarget.style.color = "rgba(191,210,230,0.8)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Admission CTA */}
            <div className="mt-8">
              <p className="text-xs mb-3" style={{ color: "rgba(191,210,230,0.6)" }}>
                Ready to enrol your child?
              </p>
              <NavLink
                to="/admission"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs transition-all duration-200"
                style={{ background: "#f0c040", color: "#1a2e4a" }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#e8a820")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#f0c040")}
              >
                Apply Now →
              </NavLink>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(191,210,230,0.5)",
          }}
        >
          <p>
            © {new Date().getFullYear()} Guardian Angel Nursery & Primary School
            &nbsp;·&nbsp; All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <NavLink
              to="/information"
              className="transition-colors duration-150 hover:text-white"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/contact-us"
              className="transition-colors duration-150 hover:text-white"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
