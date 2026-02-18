import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "About Us",
      path: "/about-us",
      submenu: [
        { label: "Welcome", path: "/about-us/welcome" },
        { label: "Vision & Mission", path: "/about-us/vision-mission" },
      ],
    },
    {
      label: "Information",
      path: "/information",
      submenu: [
        { label: "Admission", path: "/admission" },
        { label: "Curriculum", path: "/curriculum" },
      ],
    },
    {
      label: "News & Events",
      path: "/news-events",
      submenu: [
        { label: "School Calendar", path: "/calendar" },
        { label: "Term Dates", path: "/terms-and-dates" },
        { label: "Curriculum", path: "/curriculum" },
        { label: "Tuition Fees", path: "/tuition-fees" },
      ],


    },

     {
      label: "Portal",
      path: "/portal",
     
    },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? 
            "rgba(26, 46, 74, 0.97)"
           : "linear-gradient(135deg, white 0%, #2d4a73 60%, #1a3a5c 100%)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 4px 24px rgba(26,46,74,0.25)" : "none",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          className="w-full h-0.5"
          style={{ background: "linear-gradient(90deg, #f0c040, #e8a820, #f0c040)" }}
        />

        <nav className="flex w-full justify-between items-center px-6 md:px-12 py-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="logo"
              className="h-20 transition-transform duration-200 group-hover:scale-105"
            />
          </NavLink>

          {/* Desktop Nav */}
          <ul className="hidden sm:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className="relative group"
                onMouseEnter={() => link.submenu && setOpenDropdown(i)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-150 ${
                      isActive
                        ? "text-yellow-300 font-semibold"
                        : "text-blue-100 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {link.label}
                  {link.submenu && (
                    <svg
                      className="w-3 h-3 opacity-60 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </NavLink>

                {/* Dropdown */}
                {link.submenu && (
                  <ul
                    className="absolute left-0 top-full pt-2 min-w-[210px] transition-all duration-200"
                    style={{
                      opacity: openDropdown === i ? 1 : 0,
                      pointerEvents: openDropdown === i ? "auto" : "none",
                      transform: openDropdown === i ? "translateY(0)" : "translateY(-6px)",
                    }}
                  >
                    <div
                      className="rounded-xl overflow-hidden py-1"
                      style={{
                        background: "white",
                        boxShadow: "0 8px 32px rgba(26,46,74,0.18)",
                        border: "1px solid #e8e2d8",
                      }}
                    >
                      {/* Gold accent top */}
                      <div className="h-0.5 mx-3 mb-1 rounded-full" style={{ background: "#f0c040" }} />
                      {link.submenu.map((sub, j) => (
                        <li key={j}>
                          <NavLink
                            to={sub.path}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-blue-50 transition-colors duration-100"
                            style={{ fontFamily: "system-ui, sans-serif" }}
                          >
                            <span
                              className="w-1 h-1 rounded-full flex-shrink-0"
                              style={{ background: "#f0c040" }}
                            />
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            ))}

            {/* CTA Button */}
            <li className="ml-3">
              <NavLink
                to="/admission"
                className="px-5 py-2 rounded-full text-sm font-bold transition-all duration-200"
                style={{
                  background: "#f0c040",
                  color: "#1a2e4a",
                  letterSpacing: "0.01em",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#e8a820")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#f0c040")}
              >
                Apply Now
              </NavLink>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-150"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            {toggle ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-all duration-300 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ background: "rgba(26,46,74,0.5)", backdropFilter: "blur(4px)" }}
        onClick={() => setToggle(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full z-50 sm:hidden transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          width: "78%",
          maxWidth: "320px",
          background: "linear-gradient(160deg, #1a2e4a 0%, #2d4a73 100%)",
          boxShadow: "-8px 0 32px rgba(26,46,74,0.3)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <img src="/logo.png" alt="logo" className="h-9" />
          <button
            onClick={() => setToggle(false)}
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
          >
            <AiOutlineClose size={16} />
          </button>
        </div>

        {/* Gold line */}
        <div className="h-0.5 mx-5 mb-5" style={{ background: "linear-gradient(90deg, #f0c040, transparent)" }} />

        <div className="flex flex-col gap-1 px-4 overflow-y-auto">
          {navLinks.map((link, i) => (
            <div key={i}>
              <NavLink
                to={link.path}
                onClick={() => setToggle(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-all duration-150 ${
                    isActive
                      ? "text-yellow-300 bg-white/10"
                      : "text-blue-100 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {link.label}
                {link.submenu && (
                  <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </NavLink>

              {link.submenu && (
                <div
                  className="ml-3 mb-1 flex flex-col rounded-lg overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)", borderLeft: "2px solid #f0c040" }}
                >
                  {link.submenu.map((sub, j) => (
                    <NavLink
                      key={j}
                      to={sub.path}
                      onClick={() => setToggle(false)}
                      className="block px-4 py-2 text-sm text-blue-200 hover:text-white hover:bg-white/10 transition-colors duration-100"
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="mt-4 px-1">
            <NavLink
              to="/admission"
              onClick={() => setToggle(false)}
              className="block text-center py-3 rounded-full font-bold text-sm"
              style={{ background: "#f0c040", color: "#1a2e4a" }}
            >
              Apply Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
