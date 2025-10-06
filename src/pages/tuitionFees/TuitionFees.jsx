import React from "react";
import Navbar from "../../components/nav/Navbar";

export default function TuitionFees() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar/>
      {/* Banner */}
      <section className="relative bg-blue-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
          alt="School children learning"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Tuition & Other Fees
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Guardian Angel Nursery & Primary School ensures quality education
            without financial strain.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Affordable Excellence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At <span className="font-semibold">Guardian Angel</span>, we
              believe that every child deserves access to high-quality education
              at an affordable cost. Our tuition is pocket-friendly while
              delivering a unique blend of{" "}
              <span className="font-medium">Nigerian and Montessori curricula</span>.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold">•</span> Tuition fees
                set below average private school rates in Abuja
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold">•</span> Flexible
                installment payment plans available
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold">•</span> Optional
                add-ons: transport, meals, after-school care
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold">•</span> All-inclusive
                access to Montessori learning resources & extracurriculars
              </li>
            </ul>
          </div>

          {/* Card */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-center text-blue-700 mb-6">
                Sample Fee Structure
              </h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="py-3 px-4 text-gray-700 font-semibold">
                      Category
                    </th>
                    <th className="py-3 px-4 text-gray-700 font-semibold">
                      Fee (₦)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-t">
                    <td className="py-3 px-4">Nursery</td>
                    <td className="py-3 px-4">50,000</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Primary 1 – 3</td>
                    <td className="py-3 px-4">65,000</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Primary 4 – 6</td>
                    <td className="py-3 px-4">70,000</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-4">Other Fees (uniform, books)</td>
                    <td className="py-3 px-4">Varies</td>
                  </tr>
                </tbody>
              </table>
              <button className="mt-8 w-full py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition">
                Request Detailed Fee Breakdown
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
