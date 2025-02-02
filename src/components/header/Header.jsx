import Navbar from '../nav/Navbar'
import './style.scss'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-[500px] main flex justify-between flex-col bg-gray-600 overflow-hidd'>
    <Navbar/>

     <div className='py-10 ml-4 '>


      <NavLink to={"/"} className={"rounded border h-40 w-40 block py-0"}>
          <img src={logo} alt=""  className='h-full w-full '/>
      </NavLink>       
            <h1 className='mt-auto text-white text-3xl md:text-6xl font-bold'>Guardian Angel Nursery and Primary School</h1>

        </div>
  </header>  )
}

export default Header