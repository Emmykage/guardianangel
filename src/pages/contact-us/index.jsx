
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import Header from '../../components/header/Header'
import Navbar from '../../components/nav/Navbar'

const ContactUs = () => {
  return (
   <main className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="relative h-72 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-4xl font-bold text-white text-center">
          Contact Us
        </h1>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Left side - info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed">
            At Guardian Angel Nursery & Primary School, we’re always happy to answer
            questions about admissions, curriculum, or general inquiries. 
            Reach out to us by phone, email, or visit us at our school campus.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary text-xl mt-1" />
              <p className="text-gray-700">
                Plot C144 Church Street at Imeko Close (B&B Junction), Off Sultan
                Dasuki Road, Phase 2, Site 2, Kubwa, Abuja.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary text-lg" />
              <p className="text-gray-700">
                Home & Office: <span className="font-medium">+234 800 000 0000</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-lg" />
              <p className="text-gray-700">info@guardianangelschool.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-primary text-lg" />
              <p className="text-gray-700">
                Monday – Friday: 8:00 AM – 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Right side - form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-96">
        <iframe
          title="School Location"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.822331967282!2d7.362!3d9.181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0000000000%3A0x0000000000000000!2sKubwa%2C%20Abuja!5e0!3m2!1sen!2sng!4v1696645567890!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  )
}

export default ContactUs