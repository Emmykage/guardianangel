import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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
    { label: "Contact Us", path: "/contact-us" },
  ];

  const active = "text-primary font-semibold";
  const inActive = "hover:text-primary transition-colors";

  return (
    <header className=" bg-gradient-to-b from-theme via-theme/80 to-theme/40 text-white shadow-md fixed top-0 w-full z-50">
      <nav className="flex w-full justify-between items-center px-6 md:px-12 py-4">

        <NavLink to={"/"} className="text-2xl font-bold tracking-wide">
        <img src={"/logo.png"} alt="logo" className="h-12"/></NavLink>

        {/* Desktop Nav */}
        <ul className="hidden  sm:flex flex-1 items-center justify-center gap-8 text-lg">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? active : inActive
                }
              >
                {link.label}
              </NavLink>

              {/* Dropdown */}
              {link.submenu && (
                <ul className="absolute left-0 top-full mt-2 bg-white text-gray-700 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 min-w-[200px]">
                  {link.submenu.map((sub, j) => (
                    <li key={j}>
                      <NavLink
                        to={sub.path}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-3xl"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}

      <div
      className={`bg-theme/40 w-full h-full inset-0 z-40 fixed top-0 left-0 sm:hidden ${toggle ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={()=> setToggle(false)}
>
          </div>


      <div
        className={`fixed top-0 right-0 w-3/4 h-full z-50 bg-theme/95 backdrop-blur-lg shadow-lg transition-transform duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-6 text-lg font-medium">
          {navLinks.map((link, i) => (
            <div key={i}>
              <NavLink
                to={link.path}
                onClick={() => setToggle(false)}
                className={({ isActive }) =>
                  isActive ? active : inActive
                }
              >
                {link.label}
              </NavLink>

              {/* Submenu */}
              {link.submenu && (
                <div className="ml-4 mt-2 flex flex-col gap-2 text-gray-300">
                  {link.submenu.map((sub, j) => (
                    <NavLink
                      key={j}
                      to={sub.path}
                      onClick={() => setToggle(false)}
                      className="hover:text-primary transition"
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
            </div>

    </header>
  );
};

export default Navbar;
