import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Admission = () => {
  return (
<main>
  <Header />

  {/* Banner */}
  <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
    <img
      src="https://cdn.pixabay.com/photo/2016/03/27/21/16/back-to-school-1280966_1280.jpg"
      alt="Admissions banner"
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold">Admissions</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl">
        Join our learning community where academic excellence meets creativity,
        independence, and holistic child development.
      </p>
    </div>
  </section>

  {/* Intro */}
  <section className="px-4 py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
        Admission Process
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        We believe in making admissions a smooth and transparent journey for
        parents and pupils. Here are the steps to joining our school family:
      </p>
    </div>
  </section>

  {/* Steps */}
  <section className="px-4 py-16">
    <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {/* Step 1 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <img
          src="https://cdn.pixabay.com/photo/2015/07/28/22/01/phone-865091_1280.jpg"
          alt="Initial Inquiry"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">1. Initial Inquiry</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Parents/guardians can contact the school via phone, email, or by
          visiting our campus to request information about classes and programs.
        </p>
      </div>

      {/* Step 2 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <img
          src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
          alt="School Tour"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">
          2. School Tour / Consultation
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Parents are invited to tour the school and meet our admissions team to
          learn about our Nigerian and Montessori blended curriculum.
        </p>
      </div>

      {/* Step 3 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <img
          src="https://cdn.pixabay.com/photo/2014/04/03/11/51/form-312086_1280.png"
          alt="Application Form"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">3. Application Form</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Parents complete the admission form (online or at the office) and
          submit required documents: birth certificate, passport photograph, and
          previous school records (if applicable).
        </p>
      </div>

      {/* Step 4 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/27/20/54/school-1280964_1280.jpg"
          alt="Assessment"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">4. Assessment / Observation</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          <strong>Montessori (early years):</strong> Play-based observation.{" "}
          <br />
          <strong>Nigerian curriculum:</strong> Placement test in literacy and
          numeracy.
        </p>
      </div>

      {/* Step 5 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/26/22/13/silhouettes-1280434_1280.jpg"
          alt="Parent Interview"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">5. Parent Interview</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          A brief meeting with parents to discuss expectations, values, and our
          shared role in the child’s education.
        </p>
      </div>

      {/* Step 6 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <img
          src="https://cdn.pixabay.com/photo/2015/07/28/22/01/hand-865091_1280.jpg"
          alt="Admission Decision"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">
          6. Admission Decision & Offer
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Successful applicants receive an admission letter along with the fee
          schedule.
        </p>
      </div>

      {/* Step 7 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition sm:col-span-2 lg:col-span-3">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/05/10/40/classroom-1571148_1280.jpg"
          alt="Enrollment"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">
          7. Enrollment & Orientation
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Parents confirm acceptance by paying the enrollment fee. New pupils
          and parents are then invited to an orientation session before school
          resumption.
        </p>
      </div>
    </div>
  </section>

  <Footer />
</main>
  )
}

export default Admission