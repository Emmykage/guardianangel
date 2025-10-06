import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Curriculum = () => {
  return (
<main>
  <Header />

  {/* Banner Section */}
  <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
    <img
      src="https://cdn.pixabay.com/photo/2017/04/05/01/06/blackboard-2207411_1280.jpg"
      alt="School children in classroom banner"
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold">Our Curriculum</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl">
        Blending the Nigerian curriculum with the Montessori method to nurture confident, creative, and independent learners.
      </p>
    </div>
  </section>

  {/* Introduction */}
  <section className="px-4 py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
        A Dual Approach to Learning
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Our school runs a <strong>dual curriculum</strong> that integrates the <strong>Nigerian National Curriculum</strong> with the <strong>Montessori method</strong>. This unique blend ensures academic excellence while fostering independence, creativity, critical thinking, and holistic child development.
      </p>
    </div>
  </section>

  {/* Nigerian Curriculum Section */}
  <section className="px-4 py-16">
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          Nigerian Curriculum
        </h3>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          The Nigerian curriculum provides a strong academic foundation in literacy, numeracy, science, and social studies. It ensures that our pupils meet national standards while being prepared for secondary education and future opportunities.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>English Language & Literacy</li>
          <li>Mathematics & Problem Solving</li>
          <li>Basic Science & Technology</li>
          <li>Civic & Moral Education</li>
          <li>Social Studies & National Values</li>
        </ul>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src="https://cdn.pixabay.com/photo/2015/09/09/20/30/children-932115_1280.jpg"
          alt="Children learning in classroom"
          className="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  </section>

  {/* Montessori Curriculum Section */}
  <section className="px-4 py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-12 items-center">
      <div className="order-2 sm:order-1 rounded-2xl overflow-hidden shadow-md">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/14/12/59/child-3086710_1280.jpg"
          alt="Montessori learning materials"
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="order-1 sm:order-2">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          Montessori Method
        </h3>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          The Montessori method nurtures independence, curiosity, and creativity. Children learn at their own pace in a structured yet flexible environment that encourages exploration and problem-solving.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Hands-on learning with practical life activities</li>
          <li>Development of concentration and self-discipline</li>
          <li>Creativity, critical thinking, and collaboration</li>
          <li>Respect for individuality and holistic growth</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Enrichment Section */}
  <section className="px-4 py-16">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
        Beyond the Classroom
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
        Our curriculum is complemented by a wide range of enrichment programs that ensure every child grows into a well-rounded individual.
      </p>
      <div className="grid sm:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://cdn.pixabay.com/photo/2017/02/01/22/02/painting-2035333_1280.jpg"
            alt="Arts and creativity"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h4 className="font-semibold text-xl mb-2">Arts & Creativity</h4>
          <p className="text-gray-600 text-sm">
            Developing imagination and expression through music, art, and drama.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/10/07/fun-1869206_1280.jpg"
            alt="Sports and physical activity"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h4 className="font-semibold text-xl mb-2">Sports & Fitness</h4>
          <p className="text-gray-600 text-sm">
            Encouraging teamwork, resilience, and healthy lifestyles through sports and outdoor activities.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://cdn.pixabay.com/photo/2014/04/03/11/51/computer-312091_1280.jpg"
            alt="ICT learning"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h4 className="font-semibold text-xl mb-2">ICT & Innovation</h4>
          <p className="text-gray-600 text-sm">
            Preparing children for the digital future with technology and problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</main>
  )
}

export default Curriculum