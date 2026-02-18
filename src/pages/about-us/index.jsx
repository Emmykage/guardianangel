import aboutImg from "../../assets/images/guardian-about.jpg";
import Navbar from "../../components/nav/Navbar";

const coreValues = [
  { title: "Honesty", desc: "We uphold integrity in everything we do, building trust with every family we serve.", icon: "⚖️" },
  { title: "Discipline", desc: "We believe discipline is the bedrock of excellence and lifelong achievement.", icon: "🎯" },
  { title: "Service", desc: "We serve our community with passion, humility, and unwavering dedication.", icon: "🤝" },
  { title: "Innovation", desc: "We foster creativity and forward-thinking to prepare children for tomorrow.", icon: "💡" },
];

const AboutUsPage = () => {
  return (
    <main style={{ background: "#f9f6f0", fontFamily: "system-ui, sans-serif", color: "#1a2e4a" }}>
      <Navbar />

      {/* ── Hero Banner: real photo background ── */}
      <section className="relative overflow-hidden pt-24" style={{ minHeight: "420px" }}>
        {/* Real school children photo */}
        <img
          src="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=1600&q=80"
          alt="School children learning together"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(15,30,51,0.88) 0%, rgba(26,46,74,0.78) 60%, rgba(15,30,51,0.70) 100%)" }}
        />
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(240,192,64,0.10), transparent 70%)" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#f0c040" }}>
            Guardian Angel Nursery & Primary School
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Georgia', serif", lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            About Us
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Nurturing young minds through a perfect blend of the Nigerian and Montessori curricula — 
            fostering excellence, independence, and holistic child development.
          </p>
        </div>

        <svg className="w-full block relative" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: 48, marginBottom: -2 }}>
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="#f9f6f0" />
        </svg>
      </section>

      {/* ── Welcome / Our Story ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-0.5 w-8 rounded-full" style={{ background: "#f0c040" }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f0c040" }}>Who We Are</span>
        </div>

        <div className="grid gap-14 md:grid-cols-2 items-center">
          {/* Image with offset border + floating badge */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl pointer-events-none"
              style={{ border: "3px solid rgba(240,192,64,0.4)", borderRadius: "1rem" }}
            />
            <img
              src={aboutImg}
              alt="School children learning"
              className="relative rounded-2xl w-full object-cover shadow-xl"
              style={{ maxHeight: "420px" }}
            />
            {/* Floating stat badge */}
            <div
              className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-4 shadow-xl"
              style={{ background: "#1a2e4a", border: "2px solid #f0c040" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#f0c040" }}>Serving</p>
              <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>10+ Yrs</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a", lineHeight: 1.2 }}>
              Welcome to Guardian Angel
            </h2>
            <div className="h-1 w-12 rounded-full mb-6" style={{ background: "#f0c040" }} />
            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              With over a decade of experience in quality education, Guardian Angel stands as a beacon
              of learning in Kubwa, Abuja. We combine strong academics with creativity, moral discipline,
              and a nurturing environment where every child can thrive.
            </p>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1a2e4a" }}>Our Story</h3>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              Founded to provide accessible, high-quality education to families in Abuja, Guardian Angel
              is rooted in values of honesty, discipline, and service. We are committed to developing
              young leaders with strong academic foundations and a lifelong love of learning.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Our dedicated teachers and caregivers bring warmth and professionalism into every classroom —
              ensuring each child feels loved, supported, and encouraged to grow.
            </p>
          </div>
        </div>
      </section>

      {/* ── Photo strip: real school life images ── */}
      <section className="py-4 pb-20" style={{ background: "#f9f6f0" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80", alt: "Child reading" },
              { src: "https://images.unsplash.com/photo-1560785496-3c9d7ecf5f46?w=500&q=80", alt: "Kids doing crafts" },
              { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=80", alt: "Classroom learning" },
              { src: "https://images.unsplash.com/photo-1510531704581-5b2870972060?w=500&q=80", alt: "Children playing" },
              { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&q=80", alt: "Teacher and students" },
            ].map((photo, i) => (
              <div key={i} className="rounded-xl overflow-hidden group" style={{ height: "120px" }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-0.5 w-8 rounded-full" style={{ background: "#f0c040" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f0c040" }}>Our Purpose</span>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { label: "Our Mission", text: "To nurture every child academically, morally, and socially by providing a safe, innovative, and inclusive environment that bridges the gap between structured learning and creative discovery.", icon: "🎓" },
              { label: "Our Vision", text: "To be a leading school in Nigeria that develops responsible, confident, and resourceful young learners who are prepared to succeed in life and make meaningful contributions to society.", icon: "🔭" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-8 relative overflow-hidden"
                style={{ background: "#f9f6f0", border: "1px solid #e8e2d8" }}>
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: "linear-gradient(90deg, #f0c040, #e8a820)" }} />
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}>
                  {item.label}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20" style={{ background: "#f9f6f0" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-0.5 w-8 rounded-full" style={{ background: "#f0c040" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f0c040" }}>What We Stand For</span>
          </div>
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: "'Georgia', serif", color: "#1a2e4a" }}>
            Our Core Values
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val, i) => (
              <div key={i} className="group rounded-2xl p-6 cursor-default transition-all duration-200"
                style={{ background: "white", border: "1px solid #e8e2d8" }}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,46,74,0.12)")}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className="text-3xl mb-4">{val.icon}</div>
                <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: "#f0c040" }} />
                <h4 className="text-lg font-bold mb-2" style={{ color: "#1a2e4a", fontFamily: "'Georgia', serif" }}>{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width children photo break ── */}
      <section className="relative overflow-hidden" style={{ height: "320px" }}>
        <img
          src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?w=1600&q=80"
          alt="Children happy at school"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(26,46,74,0.55)" }}
        >
          <div className="text-center px-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#f0c040" }}>Our Promise</p>
            <p
              className="text-2xl md:text-3xl font-bold text-white max-w-2xl mx-auto italic"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              "Every child who walks through our doors is family."
            </p>
          </div>
        </div>
      </section>

      {/* ── Visit Us ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a2e4a 0%, #2d4a73 100%)" }}>
        <div
          className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(240,192,64,0.10), transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#f0c040" }}>Find Us</p>
          <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Visit Our School
          </h2>
          <div className="rounded-2xl p-8 mb-8"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <p className="text-blue-100 leading-relaxed mb-2">
              📍 Plot C144 Church Street at Imeko Close (B&B Junction),
            </p>
            <p className="text-blue-100 leading-relaxed">
              Off Sultan Dasuki Road, Phase 2, Site 2, Kubwa, Abuja.
            </p>
          </div>
          <p className="text-blue-200 mb-8 leading-relaxed text-sm">
            Contact our admissions office to learn more about our programmes and how to enrol your child.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact-us"
              className="px-7 py-3 rounded-full font-bold text-sm transition-all duration-200"
              style={{ background: "#f0c040", color: "#1a2e4a" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#e8a820")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#f0c040")}
            >Contact Us</a>
            <a href="/admission"
              className="px-7 py-3 rounded-full font-bold text-sm border-2 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = "white")}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
            >Apply Now →</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
