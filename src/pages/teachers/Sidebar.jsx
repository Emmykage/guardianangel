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
    <SidebarContainer style={{ width: isOpen ? "350px" : "80px" }}>
      <SidebarHeader>{/* <Logo src="" /> */}</SidebarHeader>
      <div>
        <div className="flex items-center gap-3 mb-10 px-1">
          <div className="flex items-center w-8 h-6 font-semibold justify-center rounded-full">
            GA
          </div>
          <div>
            <div
              style={{
                fontWeight: 600,
                fontSize: 15,
                lineHeight: 1.1,
              }}
            >
              Greenway Academy
            </div>
            <div className="text-xs" style={{ color: "#8C97B3" }}>
              Teacher Portal
            </div>
          </div>
        </div>
      </div>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/dashboard"}>Dashboard</StyledLink>
        </SidebarNavItem>{" "}
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphDown />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/add-result"}>Add Result</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsFileText />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/assignments"}>Assignment</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/classes"}>Online Classes</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPeople />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/tests"}>Test</StyledLink>
        </SidebarNavItem>
        {/* <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/attendances"}>Attendance</StyledLink>
        </SidebarNavItem> */}
        {/* <SidebarNavItem>
          <SidebarIcon>
            <BsBook />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/exams"}>Exams</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGear />{" "}
          </SidebarIcon>
          <StyledLink to={"/teacher/settings"}>Settings and Profile</StyledLink>
        </SidebarNavItem> */}
        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}></ToggleIcon>
        </ToggleButton>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
