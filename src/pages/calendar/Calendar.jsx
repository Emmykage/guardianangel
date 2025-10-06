import React from 'react'

const SchoolCalendar = () => {
  return (
<main className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <section className="relative bg-blue-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
          alt="School calendar banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Academic Session Calendar
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Guardian Angel Nursery & Primary School – Stay updated with key term
            dates and academic events.
          </p>
        </div>
      </section>

      {/* Calendar Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          2025 / 2026 Academic Session
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* First Term */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              First Term
            </h3>
            <p className="text-gray-700">
              <span className="font-semibold">Begins:</span> 8th September 2025
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Ends:</span> 12th December 2025
            </p>
          </div>

          {/* Second Term */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              Second Term
            </h3>
            <p className="text-gray-700">
              <span className="font-semibold">Begins:</span> 12th January 2026
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Ends:</span> 27th March 2026
            </p>
          </div>

          {/* Third Term */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              Third Term
            </h3>
            <p className="text-gray-700">
              <span className="font-semibold">Begins:</span> 20th April 2026
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Ends:</span> 17th July 2026
            </p>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-12">
          <a
            href="/calendar/GuardianAngelSchoolCalendar2025.pdf"
            download
            className="px-8 py-3 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800 transition"
          >
            📅 Download Full Calendar
          </a>
        </div>
      </section>
    </main>  )
}

export default SchoolCalendar