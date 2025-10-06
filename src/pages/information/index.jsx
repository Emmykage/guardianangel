import React from "react";
import Navbar from "../../components/nav/Navbar";
import registrationForm from "../../assets/documents/Registration-Form.pdf"
import calendarYear from "../../assets/documents/school-calendar-2025.pdf"

export default function InformationPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
          <Navbar/>

      {/* Banner */}
      <section className="relative bg-blue-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1606327054574-56b8bb08a9d3?q=80&w=1600&auto=format&fit=crop"
          alt="School info banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold">School Information</h1>
          <p className="mt-4 text-lg md:text-xl">
            Everything you need to know about Guardian Angel Nursery & Primary
            School at a glance.
          </p>
        </div>
      </section>

      {/* Registration Form Download */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Registration Form
          </h2>
          <p className="text-gray-700 mb-6">
            Start your child’s learning journey with us by downloading and
            filling out the official registration form.
          </p>
          <a
            href={registrationForm}
            download
            className="px-8 py-3 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800 transition"
          >
            📑 Download Registration Form
          </a>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Academic Calendar
        </h2>
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 text-center">
          <p className="text-lg text-gray-700 mb-6">
            View our structured academic calendar for the 2025/2026 session,
            highlighting key term dates and events.
          </p>
          <a
            href={calendarYear}
            download
            className="px-8 py-3 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800 transition"
          >
            📅 Download Full Calendar
          </a>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Tuition Fee & Other Fees
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold">Guardian Angel Nursery & Primary School</span>, we believe that exceptional education should be accessible without financial strain. 
            Our tuition is pocket-friendly, offering a high-value blend of the Nigerian and Montessori curricula — where structured learning meets child-centered discovery at rates significantly below average private school fees in Abuja.
          </p>
        </div>
      </section>

      {/* Term Dates */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Term’s Date
          </h2>
          <p className="text-lg text-gray-700">
            This first term begins on{" "}
            <span className="font-semibold">8th September, 2025</span> and runs
            until <span className="font-semibold">12th December, 2025</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
