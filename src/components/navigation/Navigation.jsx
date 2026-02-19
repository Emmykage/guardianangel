import React from "react";
import {
  ButtonsContainer,
  GuestButton,
  LoginButton,
  Logo,
  NavLink as Linker,
  Navbar,
  NavigationLinks,
} from "../../styles/styles";
import { NavLink, useNavigate } from "react-router-dom";
import bg1 from "../../assets/bg1.png";

const Nav = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/choose-user");
  };
  return (
    <Navbar>
      <Logo src={bg1} alt="" />
      <NavigationLinks>
        <Linker href="#" className="navlink relative">
          About Us
          <ul className="bg-theme/60 text-white top-full left-0 absolute border border-gray-200/30 shadow pl-3 pr-20 py-4 rounded-bl-xl rounded-br-xl">
            <li>
              <NavLink>Welcome </NavLink>{" "}
            </li>
            <li>
              <NavLink>Vission and Mission </NavLink>{" "}
            </li>
            <li>
              <NavLink>Meet Our Team </NavLink>{" "}
            </li>
            <li>
              <NavLink>Board </NavLink>{" "}
            </li>
            <li>
              <NavLink>Our Nursery </NavLink>{" "}
            </li>
          </ul>
        </Linker>
        {/* <Linker href="#" className='navlink relative bg-green-400'>
        Information
        <ul className='bg-theme text-white top-full left-0 absolute border border-gray-200 shadow pl-3 pr-10 py-4 rounded-bl-xl rounded-br-xl'>
                <li><NavLink>Contact Us </NavLink> </li>
                <li><NavLink>Admission </NavLink> </li>
                <li><NavLink>Curriculum </NavLink> </li>
                <li><NavLink>Policies and Documents  </NavLink></li>
                <li><NavLink>Data Protection               </NavLink></li>
                <li><NavLink>Attendance  </NavLink></li>
                <li><NavLink>Feedback and Comliaints  </NavLink>
                 </li>
           
            </ul>
        
        
        </Linker> */}
        <Linker href="#" className="navlink relative bg-green-400">
          News and Events
          <ul className="bg-purple-900 text-white top-full left-0 absolute border border-gray-200 shadow pl-3 pr-10 py-4 rounded-bl-xl rounded-br-xl">
            <li>
              <NavLink>School Calendar Us </NavLink>{" "}
            </li>
            <li>
              <NavLink>Term Dates </NavLink>{" "}
            </li>
            <li>
              <NavLink>Curriculum </NavLink>{" "}
            </li>
            <li>
              <NavLink>Policies and Documents </NavLink>
            </li>
            <li>
              <NavLink>Data Protection </NavLink>
            </li>
            <li>
              <NavLink>Attendance </NavLink>
            </li>
            <li>
              <NavLink>Feedback and Comliaints </NavLink>
            </li>
          </ul>{" "}
        </Linker>
        <Linker href="#" className="navlink relative bg-green-400">
          Parents
          <ul className="bg-purple-900 text-white top-full left-0 absolute border border-gray-200 shadow pl-3 pr-10 py-4 rounded-bl-xl rounded-br-xl">
            <li>
              <NavLink>Parent Information Hub</NavLink>{" "}
            </li>
            <li>
              <NavLink>Forms and Application Packs</NavLink>{" "}
            </li>
            <li>
              <NavLink>Uniform Ordering</NavLink>{" "}
            </li>
            <li>
              <NavLink>Health Issues</NavLink>
            </li>
            <li>
              <NavLink>Parent Teacher Association (PTA)</NavLink>
            </li>
            <li>
              <NavLink>School Clubs </NavLink>
            </li>
          </ul>
        </Linker>
        <Linker href="#" className="navlink relative bg-green-400">
          Children
          <ul className="bg-purple-900 text-white top-full left-0 absolute border border-gray-200 shadow pl-3 pr-10 py-4 rounded-bl-xl rounded-br-xl">
            <li>
              <NavLink>School Ambassador</NavLink>{" "}
            </li>
            <li>
              <NavLink>Keeping Safe</NavLink>{" "}
            </li>
            <li>
              <NavLink>School Council</NavLink>{" "}
            </li>
          </ul>{" "}
        </Linker>
        <Linker href="#" className="navlink relative bg-green-400">
          Gallery
        </Linker>
        <Linker href="#" className="navlink relative bg-green-400">
          Join Us
          <ul className="bg-purple-900 text-white top-full left-0 absolute border border-gray-200 shadow pl-3 pr-10 py-4 rounded-bl-xl rounded-br-xl">
            <li>
              <NavLink>Teacher Training</NavLink>{" "}
            </li>
            <li>
              <NavLink>Vacancy</NavLink>{" "}
            </li>
            <li>
              <NavLink>volunteers</NavLink>{" "}
            </li>
          </ul>{" "}
        </Linker>
      </NavigationLinks>
      <ButtonsContainer>
        <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
        <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
      </ButtonsContainer>
    </Navbar>
  );
};

export default Nav;
