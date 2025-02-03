import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.scss'
import { AiOutlineMenuFold } from 'react-icons/ai'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const active = "text-primary"
    const inActive = "hover:text-primary"




    // const handleLoginClick = ()=> {
    //     navigate('/choose-user')

    // }
  return (
    <header className='navigation top py-5'>

    <nav className='bg-re'>
        <span onClick={() => setToggle(prev => !prev)} className='h-10 flex sm:hidden justify-center items-center w-10 '>
            <AiOutlineMenuFold className='text-white font-bold text-3xl'/>

        </span>
        <div className={`gap-4 bg-gray-00/20 sm:px-12 md:px-20 py-10 rounded`}>
            <ul className={`${toggle ? "right-0" : "right-full"} py-10 sm:py-1 bg-theme/90 sm:bg-transparent justify-end  transition-all ease-linear duration-300 w-full sm:flex px-6 fixed sm:static min-h-96 sm:min-h-10  sm:h-max  block  text-white gap-6 text-lg font-medium link`}>

                <li  className='navlink relative'> 
                    <NavLink className={({isActive})=> isActive ? active : inActive} to="/about-us">About Us </NavLink>
                    <ul className='bg-theme/60 max-w-full sm:min-w-max text-nowrap text-white top-full left-0 sm:absolute border transition-all ease-linear duration-300 border-gray-200/30 shadow pl-3 pr-20 py-4 sm:rounded-bl-xl sm:rounded-br-xl'>
                        <li className='transition-all text-primary ease-linear duration-300'><NavLink to={""}>Welcome </NavLink> </li>
                        <li><NavLink to={""}>Vission and Mission </NavLink> </li>                     
                
                    </ul>
                </li>
                <li className='navlink relative transition-all ease-linear duration-300 '>
                <NavLink  className={({isActive})=> isActive ? active : inActive} to="/information">Information </NavLink>

                
                <ul className='bg-theme/60 max-w-full sm:w-max sm:min-w-max text-white top-full left-0 sm:absolute border transition-all ease-linear duration-300 border-gray-200/30 shadow pl-3 pr-20 py-4 sm:rounded-bl-xl sm:rounded-br-xl'>
                        <li><NavLink>Admission </NavLink> </li>
                        <li><NavLink>Curriculum </NavLink> </li>
                    
                
                    </ul>
                
                
                </li>
        <li  className='navlink relative'>
        <NavLink  className={({isActive})=> isActive ? active : inActive} to="/news-events">     News and Events    </NavLink>

        <ul className='bg-theme/60 max-w-full sm:w-max sm:min-w-max text-white top-full left-0 sm:absolute border transition-all ease-linear duration-300 border-gray-200/30 shadow pl-3 pr-20 py-4 sm:rounded-bl-xl sm:rounded-br-xl'>
                <li><NavLink>School Calendar Us </NavLink> </li>
                <li><NavLink>Term Dates </NavLink> </li>
                <li><NavLink>Curriculum </NavLink> </li>
                <li><NavLink>Policies and Documents  </NavLink></li>
                <li><NavLink>Data Protection               </NavLink></li>
                <li><NavLink>Attendance  </NavLink></li>
                <li><NavLink>Feedback and Comliaints  </NavLink>
                 </li>
           
            </ul>     
        </li>
        <li   className='navlink relative'>
            <NavLink className={({isActive})=> isActive ? active : inActive} to="/contact-us">Contact Us </NavLink> 
            {/* <ul className='bg-theme/60 max-w-72 w-max text-white top-full left-0 sm:absolute border transition-all ease-linear duration-300 border-gray-200/30 shadow pl-3 pr-20 py-4 sm:rounded-bl-xl sm:rounded-br-xl'>
                    <li><NavLink>Parent Information Hub
                    </NavLink> </li>
                    <li><NavLink>Forms and Application Packs
                    </NavLink> </li>
                    <li><NavLink>Uniform Ordering
                    </NavLink> </li>
                    <li><NavLink>Health Issues
                    </NavLink></li>
                    <li><NavLink>Parent Teacher Association (PTA)
                    </NavLink></li>
                    <li><NavLink>School Clubs  </NavLink></li>
                
            
                </ul>     */}
         </li>
       

            </ul>


        </div>
     
        
    </nav>

    </header>

  )
}

export default Navbar