import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import './navbar.scss'

const Navbar = () => {
    const navigate = useNavigate()

    const active = "text-primary"
    const inActive = "text-alt"

    const handleLoginClick = ()=> {
        navigate('/choose-user')

    }
  return (
    <header className='navigation top py-5'>

    <nav className='flex py-10 justify-end items-center  px-20'>

        <div className='flex gap-4 bg-gray-00/20 px-20 py-10 rounded'>
            <ul className='flex gap-6 text-white text-lg font-medium'>

        <li  className='navlink relative'> 
            <NavLink className={({isActive})=> isActive ? active : inActive} to="/about-us">About Us </NavLink>
            <ul className='bg-theme/60 max-w-72 w-max text-white top-full left-0 absolute border border-gray-200/30 shadow pl-3 pr-20 py-4 rounded-bl-xl rounded-br-xl'>
                <li><NavLink to={""}>Welcome </NavLink> </li>
                <li><NavLink to={""}>Vission and Mission </NavLink> </li>
                {/* <li><NavLink to={""}>Meet Our Team </NavLink> </li>
                <li><NavLink to={""}>Board </NavLink> </li>
                <li><NavLink to={""}>Our Nursery </NavLink> </li> */}
           
            </ul>
            </li>
        <li  className='navlink relative '>
        <NavLink  className={({isActive})=> isActive ? active : inActive} to="/information">Information </NavLink>

        
        <ul className='bg-theme/60 max-w-72 w-max text-white top-full left-0 absolute border border-gray-200 shadow pl-3 pr-10 py-4 rounded-bl-xl rounded-br-xl'>
                <li><NavLink>Admission </NavLink> </li>
                <li><NavLink>Curriculum </NavLink> </li>
                {/* <li><NavLink>Policies and Documents  </NavLink></li>
                <li><NavLink>Data Protection               </NavLink></li>
                <li><NavLink>Attendance  </NavLink></li>
                <li><NavLink>Feedback and Comliaints  </NavLink>        </li> */}
           
            </ul>
        
        
        </li>
        <li  className='navlink relative'>
        <NavLink  className={({isActive})=> isActive ? active : inActive} to="/news-events">     News and Events    </NavLink>

        <ul className='bg-theme/60 max-w-72 w-max text-white top-full left-0 absolute border border-gray-200 shadow pl-3 pr-10 py-4 rounded-bl-xl rounded-br-xl'>
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
            <ul className='bg-theme/60 w-max text-white top-full right-0 absolute border border-gray-200 shadow pl-3 pr-10 py-4 rounded-bl-xl rounded-br-xl'>
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
                
            
                </ul>    
         </li>
        {/* <li href="#" className='navlink relative '>
            <NavLink to={""}>Children</NavLink>
            
            
        <ul className='bg-theme/60  text-white top-full left-0 absolute border border-gray-200 shadow pl-3 pr-10 py-4 rounded-bl-xl rounded-br-xl'>
                <li><NavLink>School Ambassador

                </NavLink> </li>
                <li><NavLink>Keeping Safe

                </NavLink> </li>
                <li><NavLink>School Council

                </NavLink> </li>
                
             
           
            </ul> 
        </li> */}
        {/* <li  className='navlink relative bg-green'><NavLink to="#">Gallery</NavLink> </li> */}
        {/* <li  className='navlink relative'>
            <NavLink to="#">   Join Us</NavLink>
        
        
        <ul className='bg-purple-900 text-white top-full left-0 absolute border border-gray-200 shadow pl-3 pr-10 py-4 rounded-bl-xl rounded-br-xl'>
                <li><NavLink>Teacher Training


                </NavLink> </li>
                <li><NavLink>Vacancy 

                </NavLink> </li>
                <li><NavLink>volunteers

                </NavLink> </li>
                
             
           
            </ul>
          </li> */}

            </ul>


        </div>
        {/* <div>
            <button onClick={handleLoginClick}>Sign In</button>
            <button onClick={handleLoginClick}>Guest Mode</button>
            
        </div> */}
        
    </nav>

    </header>

  )
}

export default Navbar