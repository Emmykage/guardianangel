import React from 'react'
import {ButtonsContainer, GuestButton, HomeContainer, LoginButton, Logo, LoremTextContainer, NavLink as Linker, Navbar, NavigationLinks, SchoolImage, SchoolInfo, Title} from '../styles/styles'
import { useNavigate } from 'react-router-dom'
import { LoremIpsum } from 'lorem-ipsum'


const lorem = new LoremIpsum()
const Home = () => {

    const navigate = useNavigate()
    const loremText = lorem.generateParagraphs(1)

    const handleLoginClick = ()=> {
        navigate('/choose-user')

    }
  return (

    <>
        <h2> hey</h2>
    </>
  )
}

export default Home  