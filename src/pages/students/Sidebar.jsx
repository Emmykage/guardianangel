import React, { useState } from 'react'
import { SidebarContainer, SidebarHeader, SidebarIcon, SidebarNav, SidebarNavItem, StyledLink, ToggleButton, ToggleIcon } from '../../styles/SidebarStyles'
import { BsBook, BsCalendarEvent, BsChatDots, BsFileText, BsGear, BsGraphDown, BsGraphUp, BsPeople } from 'react-icons/bs'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
  return (
    <SidebarContainer style={{width: isOpen ? "250px" : "80px"}}>
        <SidebarHeader>
            {/* <Logo src="" /> */}
        </SidebarHeader>
        <SidebarNav>
            <SidebarNavItem>
                <SidebarIcon><BsGraphUp/> </SidebarIcon>
                <StyledLink to={'/student/dashboard'}>Dashboard</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsGraphUp/> </SidebarIcon>
                <StyledLink to={'/student/classes'}>Classes</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsGraphUp/> </SidebarIcon>
                <StyledLink to={'/student/students'}>Students</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsPeople/> </SidebarIcon>
                <StyledLink to={'/student/teachers'}>Teachers</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsFileText/> </SidebarIcon>
                <StyledLink to={'/student/assignments'}>Assignment</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsBook/> </SidebarIcon>
                <StyledLink to={'/student/exams'}>Exams</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsGraphDown/> </SidebarIcon>
                <StyledLink to={'/student/performance'}>Performance</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsGraphUp/> </SidebarIcon>
                <StyledLink to={'/student/attendance'}>Attendance</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsBook/> </SidebarIcon>
                <StyledLink to={'/student/library'}>Library</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsChatDots/> </SidebarIcon>
                <StyledLink to={'/student/announcement'}>Announcement</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsCalendarEvent/> </SidebarIcon>
                <StyledLink to={'/admin/event'}>Events and Profile</StyledLink>
            </SidebarNavItem>
            <SidebarNavItem>
                <SidebarIcon><BsGear/> </SidebarIcon>
                <StyledLink to={'/student/settings'}>Settings and Profile</StyledLink>
            </SidebarNavItem>

            <ToggleButton onClick={toggleSidebar}>
                <ToggleIcon isOpen={isOpen}></ToggleIcon>

            </ToggleButton>
        </SidebarNav>
    </SidebarContainer>
  )
}

export default Sidebar