import Navbar from "../../components/nav/Navbar";

export default function MissionVisionPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
        <Navbar/>
      {/* Hero */}
      <section className="relative bg-indigo-700 text-white py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Mission & Vision</h1>
          <p className="mt-4 text-lg text-gray-200">
            Guiding every child towards excellence, creativity, and lifelong learning.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto py-16 px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1588075592446-240a5bfa84e4?auto=format&fit=crop&w=1200&q=80"
            alt="Mission Image"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            At <strong>Guardian Angel Nursery & Primary School</strong>, our mission is to provide
            a nurturing, safe, and stimulating learning environment where children can grow
            academically, socially, morally, and emotionally.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Deliver high-quality education blending the Nigerian and Montessori curricula.</li>
            <li>Encourage independence, responsibility, and curiosity in every child.</li>
            <li>Instill lifelong values of honesty, kindness, and resilience.</li>
            <li>Support children to discover and maximize their God-given potential.</li>
          </ul>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Our vision is to be recognized as a leading school in Abuja and beyond,
              raising confident, disciplined, and innovative young leaders who will
              positively impact their communities and the world.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>To foster creativity and critical thinking for tomorrow’s challenges.</li>
              <li>To build strong foundations for lifelong learning and leadership.</li>
              <li>To remain an inclusive institution where every child feels valued.</li>
              <li>To raise children who embody excellence, integrity, and compassion.</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1596464716121-8b94a7ef0a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Vision Image"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-indigo-50 py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-700">Excellence</h3>
              <p className="text-gray-600 mt-3">
                Striving for the highest academic and moral standards in all we do.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-700">Creativity</h3>
              <p className="text-gray-600 mt-3">
                Empowering children to think independently, solve problems, and innovate.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-700">Integrity</h3>
              <p className="text-gray-600 mt-3">
                Building character through honesty, respect, and responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Partner With Us in Shaping the Future</h2>
          <p className="mt-4 text-lg">
            Every child deserves the best start in life. Join the Guardian Angel family and
            let’s raise tomorrow’s leaders together.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
