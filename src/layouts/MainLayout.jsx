// import React from 'react'

import { Outlet } from "react-router-dom"
import SideNav from "../components/sideNav/SideNav"

const MainLayout = ({children}) => {
  return (
    <main className="grid grid-cols-theme-layout -500 h-screen">
        <SideNav/>
        <div>
            {children}
            {/* <Outlet/> */}
        </div>
        
        
    </main>
  )
}

export default MainLayout