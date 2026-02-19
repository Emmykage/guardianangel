import React from "react";
import "./sideNav.scss";
import { FaHospitalUser, FaPhoneAlt, FaSchool } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <aside className="sm:grid  blur-non hidden overflow-y-auto gap-0">
      <div className="box-items item-1 relative g-[url('/src/assets/background/library.jpg')] bg-cover bg-center flex items-center text-white justify-center">
        <button className="text-white  hover:text-gray-950">
          <FaSchool className="text-6xl" />
          <span className="text-3xl font-semibold          ">Welcome</span>
        </button>
      </div>
      <div className="box-items item-2 relative g-[url('/src/assets/background/library.jpg')] bg-cover bg-center flex items-center text-white justify-center">
        <button className="text-white hover:text-gray-950">
          <GiReturnArrow className="text-6xl" />
          <NavLink
            to={"/prospectus"}
            className="text-3xl font-semibold          "
          >
            Prospectus
          </NavLink>
        </button>
      </div>
      <div className="box-items item-3 relative g-[url('/src/assets/background/library.jpg')] bg-cover bg-center flex items-center text-white justify-center">
        <button className="text-white  hover:text-gray-950">
          <TbReport className="text-6xl" />
          <span className="text-3xl font-semibold          ">Reports</span>
        </button>
      </div>
      <div className="box-items item-4 relative g-[url('/src/assets/background/library.jpg')] bg-cover bg-center flex items-center text-white justify-center">
        <button className="text-white  hover:text-gray-950">
          <FaHospitalUser className="text-6xl" />
          <span className="text-3xl font-semibold z-10 ">Hospitality </span>
        </button>
      </div>
      <div className="box-items item-5 relative g-[url('/src/assets/background/library.jpg')] bg-cover bg-center flex items-center text-white justify-center">
        <button className="text-white  hover:text-gray-950">
          <FaPhoneAlt className="text-6xl" />
          <span className="text-3xl font-semibold">Contact</span>
        </button>
      </div>
    </aside>
  );
};

export default SideNav;
