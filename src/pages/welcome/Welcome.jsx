import React from "react";
import Navbar from "../../components/nav/Navbar";

const WelcomePage = () => {
  return (
    <main className="bg-gray-50">
        <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Welcome to <br /> Guardian Angel Nursery & Primary School
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-8">
              We are more than just a school — we are a family where children
              grow, learn, and thrive. With a blend of the Nigerian and
              Montessori curricula, we nurture every child to reach their full
              potential while fostering creativity, independence, and
              responsibility.
            </p>
            <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
              Discover More
            </button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90e1c9f9c4fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
              alt="Happy school children"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 text-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            A Warm Welcome
          </h2>
          <p className="text-lg text-gray-600">
            At Guardian Angel Nursery & Primary School, every child is seen as a
            unique individual with limitless potential. Our dedicated teachers
            and caring staff are committed to providing a holistic educational
            experience that balances academics, creativity, moral values, and
            social development.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div className="bg-white rounded-xl shadow-md p-6">
            <img
              src="https://images.unsplash.com/photo-1588075592446-2628ef58fbfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Classroom"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Our Environment
            </h3>
            <p className="text-gray-600">
              We provide a safe, nurturing, and engaging learning environment
              that encourages curiosity, teamwork, and respect for others.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <img
              src="https://images.unsplash.com/photo-1601944177325-44a3a93f1e1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Learning"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Our Promise
            </h3>
            <p className="text-gray-600">
              We promise to equip your child with the knowledge, skills, and
              values that prepare them for future success — academically and
              socially.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WelcomePage;
