import React from 'react'
import { useNavigate } from 'react-router-dom'
// import {ButtonsContainer, GuestButton, HomeContainer, LoginButton, Logo, LoremTextContainer, NavLink as Linker, Navbar, NavigationLinks, SchoolImage, SchoolInfo, Title} from '../styles/styles'
import { LoremIpsum } from 'lorem-ipsum'
import Nav from '../components/navigation/Navigation'
import { HomeContainer, LoremTextContainer, SchoolImage, SchoolInfo } from '../styles/styles'
import { Title } from '../styles/ChooseUserStyles'
// import bg from '../assets/bg.png'
// import Nav from './navigation/Navigation'
// import bg from '../assets/bg.png'
import bg from '../assets/bg.png'

const Home = () => {
    const lorem = new LoremIpsum()

    
    const navigate = useNavigate()
    const loremText = lorem.generateParagraphs(1)

    const handleLoginClick = ()=> {
        navigate('/choose-user')

    }
  return (

    <>
    <Nav/>
    <HomeContainer>
        <div className='h-[960px] w-full bg-[#6BD4E7] py-40'>
            

        </div>


         <SchoolInfo>
            <Title>
                School Management System
            </Title>
            <LoremTextContainer>
                <p>{loremText}</p>
            </LoremTextContainer>
        </SchoolInfo>
        <SchoolImage src={bg} alt='pupils'/> 

    </HomeContainer>

    </>)
}

export default Home