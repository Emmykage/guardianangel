import PropTypes from "prop-types";
import SideNav from "../components/sideNav/SideNav";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
export default MainLayout;
