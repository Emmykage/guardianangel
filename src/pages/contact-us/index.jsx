import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Navbar from "../../components/nav/Navbar";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Our Address",
    value:
      "Plot C144 Church Street at Imeko Close (B&B Junction), Off Sultan Dasuki Road, Phase 2, Site 2, Kubwa, Abuja.",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+234 803 337 6983",
    href: "tel:+2348033376983",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "info@guardianangelschool.com",
    href: "mailto:info@guardianangelschool.com",
  },
  {
    icon: <FaClock />,
    label: "Office Hours",
    value: "Monday – Friday: 8:00 AM – 4:00 PM",
  },
];

const ContactUs = () => {
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
        style={{ minHeight: "320px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Contact banner"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.14 }}
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
            Contact Us
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
            We're always happy to answer questions about admissions, curriculum,
            or any general inquiry. Reach out — we'd love to hear from you.
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

      {/* ── Contact Info + Form ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
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
                Get in Touch
              </span>
            </div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
            >
              We'd Love to Hear From You
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Whether you have questions about admissions, our curriculum, or
              want to schedule a school visit, our team is ready to help.
            </p>

            <div className="space-y-4">
              {contactDetails.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl p-4 transition-all duration-200"
                  style={{
                    background: "white",
                    border: "1px solid #e8e2d8",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(26,46,74,0.08)")
                  }
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  {/* Icon badge */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm"
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
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium transition-colors duration-150"
                        style={{ color: "#1a2e4a" }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.color = "#2d4a73")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.color = "#1a2e4a")
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#475569" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
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
              style={{
                background: "linear-gradient(90deg, #f0c040, #e8a820)",
              }}
            />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="h-0.5 w-8 rounded-full"
                  style={{ background: "#f0c040" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#f0c040" }}
                >
                  Message Us
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}
              >
                Send Us a Message
              </h3>

              <form className="space-y-5">
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: "#1a2e4a" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-150"
                    style={{
                      border: "1px solid #e8e2d8",
                      background: "#f9f6f0",
                      color: "#1a2e4a",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1px solid #f0c040";
                      e.currentTarget.style.background = "white";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = "1px solid #e8e2d8";
                      e.currentTarget.style.background = "#f9f6f0";
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: "#1a2e4a" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-150"
                    style={{
                      border: "1px solid #e8e2d8",
                      background: "#f9f6f0",
                      color: "#1a2e4a",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1px solid #f0c040";
                      e.currentTarget.style.background = "white";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = "1px solid #e8e2d8";
                      e.currentTarget.style.background = "#f9f6f0";
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: "#1a2e4a" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 000 000 0000"
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-150"
                    style={{
                      border: "1px solid #e8e2d8",
                      background: "#f9f6f0",
                      color: "#1a2e4a",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1px solid #f0c040";
                      e.currentTarget.style.background = "white";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = "1px solid #e8e2d8";
                      e.currentTarget.style.background = "#f9f6f0";
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: "#1a2e4a" }}
                  >
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-150"
                    style={{
                      border: "1px solid #e8e2d8",
                      background: "#f9f6f0",
                      color: "#1a2e4a",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1px solid #f0c040";
                      e.currentTarget.style.background = "white";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = "1px solid #e8e2d8";
                      e.currentTarget.style.background = "#f9f6f0";
                    }}
                  >
                    <option value="">Select a topic…</option>
                    <option value="admission">Admission Enquiry</option>
                    <option value="curriculum">Curriculum Information</option>
                    <option value="fees">Fees & Payment</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: "#1a2e4a" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message here…"
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-150 resize-none"
                    style={{
                      border: "1px solid #e8e2d8",
                      background: "#f9f6f0",
                      color: "#1a2e4a",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = "1px solid #f0c040";
                      e.currentTarget.style.background = "white";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = "1px solid #e8e2d8";
                      e.currentTarget.style.background = "#f9f6f0";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full font-bold text-sm transition-all duration-200"
                  style={{ background: "#1a2e4a", color: "white" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#2d4a73")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#1a2e4a")
                  }
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="h-0.5 w-8 rounded-full"
            style={{ background: "#f0c040" }}
          />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#f0c040" }}
          >
            Find Us
          </span>
        </div>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid #e8e2d8",
            boxShadow: "0 8px 32px rgba(26,46,74,0.08)",
          }}
        >
          {/* Map header strip */}
          <div
            className="px-6 py-4 flex items-center gap-3"
            style={{ background: "#1a2e4a" }}
          >
            <FaMapMarkerAlt style={{ color: "#f0c040" }} />
            <span className="text-white text-sm font-semibold">
              Kubwa, Abuja — Phase 2, Site 2
            </span>
          </div>
          <iframe
            title="School Location"
            className="w-full border-0"
            style={{ height: "380px", display: "block" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.822331967282!2d7.362!3d9.181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0000000000%3A0x0000000000000000!2sKubwa%2C%20Abuja!5e0!3m2!1sen!2sng!4v1696645567890!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
