
// import Header from '../../components/header/Header'
import aboutImg from "../../assets/images/guardian-about.jpg"
// import Footer from '../../components/footer/Footer'
// const AboutUs = () => {
//   return (
// <main>
//   <Header />

//   <section className="px-4 py-20 bg-gray-50">
//     <div className="max-w-7xl mx-auto">
//       {/* Page Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">
//           About Us
//         </h2>
//         <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
//           Over 12 years of impactful service built on God’s grace, dedication,
//           hard work, and rewarding partnerships. Our future is evergreen,
//           prosperous, and full of breakthroughs.
//         </p>
//       </div>

//       {/* About Section */}
//       <div className="grid gap-12 sm:grid-cols-2 items-center mb-20">
//         <div className="space-y-5">
//           <p className="text-gray-700 text-lg leading-relaxed">
//             We are passionate, humble, and constantly training to remain
//             resourceful in achieving our periodic targets through innovative
//             discipleship leadership.
//           </p>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             Our commitment is to excellence, service, and growth, built on
//             values that last generations.
//           </p>
//         </div>
//         <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
//           <img
//             src={aboutImg}
//             alt="About our school"
//             className="w-full h-[450px] object-cover"
//           />
//         </div>
//       </div>

//       {/* Section Reusable Component */}
//       {[
//         {
//           title: "Our Mission",
//           text: "We walk with you to bridge the gap in managing success already achieved—helping you maximize and sustain excellence.",
//           img: aboutImg,
//           reverse: true,
//         },
//         {
//           title: "Our Strength",
//           text: "Our strength is rooted in God Almighty, reflected through our passionate and excellent service delivery.",
//           img: aboutImg,
//         },
//         {
//           title: "Our Core Values",
//           text: "Honesty, discipline, and excellence in resource management—while delivering consistent quality and helping you sustain success.",
//           img: aboutImg,
//           reverse: true,
//         },
//         {
//           title: "Our Vision",
//           text: "To passionately guide, train, and empower people in achieving sustainable success through excellence and godly principles.",
//           img: aboutImg,
//         },
//       ].map(({ title, text, img, reverse }, idx) => (
//         <div
//           key={idx}
//           className={`grid gap-12 sm:grid-cols-2 items-center mb-20 ${
//             reverse ? "sm:flex-row-reverse" : ""
//           }`}
//         >
//           <div className="space-y-4 text-center sm:text-left">
//             <h3 className="text-3xl font-bold text-gray-900 relative inline-block">
//               {title}
//               <span className="block h-1 w-16 bg-blue-600 mt-2 mx-auto sm:mx-0 rounded"></span>
//             </h3>
//             <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
//           </div>
//           <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
//             <img
//               src={img}
//               alt={`${title} illustration`}
//               className="w-full h-[450px] object-cover"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>

//   <Footer />
// </main>


//   )
// }

// export default AboutUs


import React from "react";
import Navbar from "../../components/nav/Navbar";

const AboutUsPage = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      <Navbar/>
      {/* Hero / Banner */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Guardian Angel Nursery & Primary School
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100">
            Nurturing young minds through a perfect blend of the Nigerian and
            Montessori curricula — fostering excellence, independence, and
            holistic child development.
          </p>
        </div>
      </section>

      {/* Welcome */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            Welcome to Guardian Angel
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            With over a decade of experience in quality education, Guardian Angel
            Nursery & Primary School stands as a beacon of learning in Kubwa,
            Abuja. We are passionate about shaping the future by combining
            strong academics with creativity, moral discipline, and a nurturing
            environment where every child can thrive.

            
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <img
            src={aboutImg}
            alt="School children learning"
            className="rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Guardian Angel was founded to provide accessible, high-quality
              education to families in Abuja. Rooted in values of honesty,
              discipline, and service, we are committed to developing young
              leaders with strong academic foundations and lifelong curiosity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our dedicated teachers and caregivers bring warmth and
              professionalism into the classroom, ensuring that every child
              feels loved, supported, and encouraged to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid gap-12 md:grid-cols-2">
          <div className="p-8 rounded-xl shadow-md bg-gray-50">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To nurture every child academically, morally, and socially by
              providing a safe, innovative, and inclusive environment that
              bridges the gap between structured learning and creative discovery.
            </p>
          </div>
          <div className="p-8 rounded-xl shadow-md bg-gray-50">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a leading school in Nigeria that develops responsible,
              confident, and resourceful young learners who are prepared to
              succeed in life and make meaningful contributions to society.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-8">
            Our Core Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Honesty", desc: "We uphold integrity in all we do." },
              {
                title: "Discipline",
                desc: "We believe discipline is key to achieving excellence.",
              },
              {
                title: "Service",
                desc: "We serve with passion, humility, and dedication.",
              },
              {
                title: "Innovation",
                desc: "We encourage creativity and forward-thinking in learning.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                  {val.title}
                </h4>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Address: Plot C144 Church Street at Imeko Close (B&B Junction), Off
            Sultan Dasuki Road, Phase 2, Site 2, Kubwa, Abuja.
          </p>
          <p className="text-lg text-gray-600">
            Contact: Call or email our admissions office to learn more about our
            programs and how to enroll your child.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
