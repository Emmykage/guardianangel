import React from 'react'
import {ButtonsContainer, GuestButton, HomeContainer, LoginButton, Logo, LoremTextContainer, NavLink, Navbar, NavigationLinks, SchoolImage, SchoolInfo, Title} from '../styles/styles'
import { useNavigate } from 'react-router-dom'
import { LoremIpsum } from 'lorem-ipsum'
import bg1 from '../assets/bg1.png'
import bg from '../assets/bg.png'

const lorem = new LoremIpsum()
const Home = () => {

    const navigate = useNavigate()
    const loremText = lorem.generateParagraphs(1)

    const handleLoginClick = ()=> {
        navigate('/choose-user')

    }
  return (

    <>
    <Navbar>
        <Logo src={bg1} alt=''/>
        <NavigationLinks>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Products</NavLink>
        <NavLink href="#">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
            <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
            <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
            
        </ButtonsContainer>
    </Navbar>
    <HomeContainer>
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
    </>
  )
}

export default Home  