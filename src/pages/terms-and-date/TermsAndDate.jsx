import React from "react";

export default function TermDates() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <section className="relative bg-blue-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
          alt="School classroom"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Academic Term Dates</h1>
          <p className="mt-4 text-lg md:text-xl">
            Stay updated with our official school calendar and term schedules.
          </p>
        </div>
      </section>

      {/* Term Date Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              First Term (2025/2026 Academic Year)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The first term begins on{" "}
              <span className="font-semibold">8th September, 2025</span> and runs
              until <span className="font-semibold">12th December, 2025</span>.
            </p>
            <p className="mt-4 text-gray-600">
              This term is designed to blend both academic rigor and holistic
              child development, integrating the Nigerian and Montessori
              approaches in a nurturing environment.
            </p>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-blue-700">
                Important Dates
              </h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <span className="font-semibold">Term Begins:</span> 8th
                  September 2025
                </li>
                <li>
                  <span className="font-semibold">Term Ends:</span> 12th
                  December 2025
                </li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition">
                Download Calendar
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
