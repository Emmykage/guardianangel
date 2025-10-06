
import Header from '../../components/header/Header'
import aboutImg from "../../assets/images/guardian-about.jpg"
import Footer from '../../components/footer/Footer'
const AboutUs = () => {
  return (
<main>
  <Header />

  <section className="px-4 py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">
          About Us
        </h2>
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Over 12 years of impactful service built on God’s grace, dedication,
          hard work, and rewarding partnerships. Our future is evergreen,
          prosperous, and full of breakthroughs.
        </p>
      </div>

      {/* About Section */}
      <div className="grid gap-12 sm:grid-cols-2 items-center mb-20">
        <div className="space-y-5">
          <p className="text-gray-700 text-lg leading-relaxed">
            We are passionate, humble, and constantly training to remain
            resourceful in achieving our periodic targets through innovative
            discipleship leadership.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our commitment is to excellence, service, and growth, built on
            values that last generations.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img
            src={aboutImg}
            alt="About our school"
            className="w-full h-[450px] object-cover"
          />
        </div>
      </div>

      {/* Section Reusable Component */}
      {[
        {
          title: "Our Mission",
          text: "We walk with you to bridge the gap in managing success already achieved—helping you maximize and sustain excellence.",
          img: aboutImg,
          reverse: true,
        },
        {
          title: "Our Strength",
          text: "Our strength is rooted in God Almighty, reflected through our passionate and excellent service delivery.",
          img: aboutImg,
        },
        {
          title: "Our Core Values",
          text: "Honesty, discipline, and excellence in resource management—while delivering consistent quality and helping you sustain success.",
          img: aboutImg,
          reverse: true,
        },
        {
          title: "Our Vision",
          text: "To passionately guide, train, and empower people in achieving sustainable success through excellence and godly principles.",
          img: aboutImg,
        },
      ].map(({ title, text, img, reverse }, idx) => (
        <div
          key={idx}
          className={`grid gap-12 sm:grid-cols-2 items-center mb-20 ${
            reverse ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-3xl font-bold text-gray-900 relative inline-block">
              {title}
              <span className="block h-1 w-16 bg-blue-600 mt-2 mx-auto sm:mx-0 rounded"></span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img
              src={img}
              alt={`${title} illustration`}
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  </section>

  <Footer />
</main>


  )
}

export default AboutUs