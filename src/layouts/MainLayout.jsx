import PropTypes from "prop-types"
import SideNav from "../components/sideNav/SideNav"

const MainLayout = ({children}) => {
  return (
    <main className="grid sm:grid-cols-theme-layout -500 h-screen">
        <SideNav/>
        <div className="w-full">
            {children}
        </div>
        
        
    </main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}
export default MainLayout