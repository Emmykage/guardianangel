import React from 'react'
import { useNavigate } from 'react-router-dom'
// import {ButtonsContainer, GuestButton, HomeContainer, LoginButton, Logo, LoremTextContainer, NavLink as Linker, Navbar, NavigationLinks, SchoolImage, SchoolInfo, Title} from '../styles/styles'
import { LoremIpsum } from 'lorem-ipsum'
// import Nav from '../components/nav/Navigation'
// import { HomeContainer, LoremTextContainer, SchoolImage, SchoolInfo } from '../styles/styles'
// import { Title } from '../styles/ChooseUserStyles'
// import bg from '../assets/bg.png'
// import Nav from './navigation/Navigation'
// import bg from '../assets/bg.png'
// import bg from '../assets/bg.png'
import Navbar from '../components/nav/Navbar'
import logo from '../assets/logo/logo.png'
import SideNav from '../components/sideNav/SideNav'

const Home = () => {
    const lorem = new LoremIpsum()

    
    const navigate = useNavigate()
    const loremText = lorem.generateParagraphs(1)

    const handleLoginClick = ()=> {
        navigate('/choose-user')

    }
  return (
      <main className="grid sm:grid-cols-theme-layout -500 h-screen">
        <SideNav/>
        <div className="w-full">
      


    <div className='px-0 bg-custom w-full bg-red-600 h-full flex justify-between flex-col'>

    <Navbar/>
    <div className='ml-4 '>
        <img src={logo} alt=""  className='h-80'/>
        <h1 className='mt-auto text-white text-6xl font-bold'>Guardian Angel Nursery and Primary School</h1>
        <p className='text-6xl w-max bg-black/20 py-2 rounded px-1 font-semibold text-yellow-300 my-4 text-wrap hidden'>“Learning, Caring and Sharing Together”</p>
    </div>
    <div>

    </div>
    {/* <HomeContainer>
        <div className='w-full bg-red '>
            



         <SchoolInfo>
            <Title>
                School Management System
            </Title>
            <LoremTextContainer>
                <p>{loremText}</p>
            </LoremTextContainer>
        </SchoolInfo>
        <SchoolImage src={bg} alt='pupils'/> 
        </div>

    </HomeContainer> */}

    </div></div> </main>)
}

export default Home