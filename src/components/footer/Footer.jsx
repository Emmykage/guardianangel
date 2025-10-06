import { NavLink } from "react-router-dom";
import { IoMailSharp } from "react-icons/io5";
import logo from '../../assets/logo/logo.png'
import { FaFacebook, FaHouseChimney, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* School Info */}
        <div>
          <NavLink to={"/"} className="flex justify-center sm:justify-start mb-4">
            <img src={logo} alt="Guardian Angel School Logo" className="w-40" />
          </NavLink>
          <p className="text-sm leading-relaxed text-center sm:text-left">
            Guardian Angel Nursery & Primary School provides a nurturing environment
            where children thrive academically, socially, and spiritually.
            <br />
            <br />
            With a unique blend of the Nigerian curriculum and Montessori method, 
            we inspire independence, creativity, and a lifelong love of learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-white font-semibold text-lg text-center sm:text-left">
            Quick Links
          </h3>
          <ul className="space-y-3 text-center sm:text-left">
            <li>
              <NavLink className="hover:text-primary" to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-primary" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-primary" to="/information">
                Information
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-primary" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-6 text-white font-semibold text-lg text-center sm:text-left">
            Contact Us
          </h3>
          <div className="flex gap-4 my-4 items-start">
            <FaHouseChimney className="text-primary mt-1" />
            <address className="not-italic text-sm">
              Plot C144 Church Street at Imeko Close (B&B Junction),<br />
              Off Sultan Dasuki Road, Phase 2, Site 2, Kubwa, Abuja.
            </address>
          </div>
          <div className="flex gap-4 my-4 items-center">
            <FaPhoneAlt className="text-primary" />
            <a href="tel:+2348000000000" className="hover:text-primary text-sm">
              +234 800 000 0000
            </a>
          </div>
          <div className="flex gap-4 my-4 items-center">
            <IoMailSharp className="text-primary" />
            <a
              href="mailto:support@guardianangelschool.com"
              className="hover:text-primary text-sm"
            >
              support@guardianangelschool.com
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-6 text-white font-semibold text-lg text-center sm:text-left">
            Follow Us
          </h3>
          <div className="flex gap-6 justify-center sm:justify-start">
            <a href="#" target="_blank" rel="noreferrer">
              <FaFacebook className="text-2xl hover:text-primary transition" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-primary transition" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl hover:text-primary transition" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaTiktok className="text-2xl hover:text-primary transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Guardian Angel Nursery & Primary School – All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
