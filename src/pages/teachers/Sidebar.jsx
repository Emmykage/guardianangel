import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarIcon,
  SidebarNav,
  SidebarNavItem,
  StyledLink,
  ToggleButton,
  ToggleIcon,
} from "../../styles/SidebarStyles";
import {
  BsBook,
  BsCalendarEvent,
  BsChatDots,
  BsFileText,
  BsGear,
  BsGraphDown,
  BsGraphUp,
  BsPeople,
} from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SidebarContainer style={{ width: isOpen ? "250px" : "80px" }}>
      <SidebarHeader>{/* <Logo src="" /> */}</SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/dashboard"}>Dashboard</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/classes"}>Classes</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/students"}>Students</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPeople />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/teachers"}>Teachers</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsFileText />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/assignments"}>Assignment</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsBook />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/exams"}>Exams</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphDown />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/performances"}>Performance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/attendances"}>Attendance</StyledLink>
        </SidebarNavItem>

        {/* <SidebarNavItem>
                <SidebarIcon><BsBook/> </SidebarIcon>
                <StyledLink to={'/teacher/library'}>Library</StyledLink>
            </SidebarNavItem> */}
        <SidebarNavItem>
          <SidebarIcon>
            <BsChatDots />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/announcements"}>Announcement</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendarEvent />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/events"}>Events and Calendar</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGear />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/settings"}>Settings and Profile</StyledLink>
        </SidebarNavItem>

        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}></ToggleIcon>
        </ToggleButton>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
