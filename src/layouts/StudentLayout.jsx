import PropTypes from "prop-types";
import SideNav from "../components/sideNav/SideNav";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/students/Sidebar";
// import Sidebar from "../pages/teachers/Sidebar";

const StudentLayout = ({ children }) => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <Outlet />
    </main>
  );
};

StudentLayout.propTypes = {
  children: PropTypes.node,
};
export default StudentLayout;
