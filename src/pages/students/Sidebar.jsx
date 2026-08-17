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
import { COLORS, FONTS } from "../../app/constants/colors";
import { ASSIGNMENTS, TESTS } from "../../app/constants/global";
import { useLocation } from "react-router-dom";
import NavIcon from "../../components/NavIcon/NavIcon";
import { IoHome } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [localAssignments, setLocalAssignments] = useState(ASSIGNMENTS);
  const { pathname } = useLocation();
  console.log(pathname);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const pendingCount = localAssignments.filter(
    (a) => a.status === "pending",
  ).length;
  const availableTestsCount = TESTS.filter(
    (t) => t.status === "available",
  ).length;

  const navItems = [
    { id: "overview", label: "Overview", icon: <IoHome /> },
    { id: "results", label: "Results", icon: <BsFileText/> },
    {
      id: "assignments",
      label: "Assignments",
      icon: <BsBook/>,
      badge: pendingCount,
    },
    { id: "classes", label: "Online Classes", icon: <BsPeople/> },
    { id: "tests", label: "Tests", icon: <BsGraphDown/>, badge: availableTestsCount },
  ];

  return (
    <SidebarContainer style={{ width: isOpen ? "350px" : "80px" }}>
      <SidebarHeader>{/* <Logo src="" /> */}</SidebarHeader>
      <SidebarNav>
        {navItems.map((item) => {
          const active = pathname.includes(item.id);
          return (
            <SidebarNavItem>
              <StyledLink to={"/student/overview"}>
                <span className="relative z-10 flex items-center gap-3">
                  <SidebarIcon>{item.icon}</SidebarIcon>
                  {item.label}
                </span>
                {!!item.badge && (
                  <span
                    className="relative z-10 text-xs w-5 h-5 flex items-center justify-center rounded-full"
                    style={{
                      background: active ? COLORS.ink : COLORS.live,
                      color: "#fff",
                      fontFamily: FONTS.mono,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </StyledLink>
            </SidebarNavItem>
          );
        })}

        {/* <SidebarNavItem>
          <SidebarIcon>
            <BsFileText />{" "}
          </SidebarIcon>
          <StyledLink to={"/student/result"}>Result</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsBook />{" "}
          </SidebarIcon>
          <StyledLink to={"/student/assignment"}>Assignments</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphDown />{" "}
          </SidebarIcon>
          <StyledLink to={"/student/classes"}>Online Classes</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />{" "}
          </SidebarIcon>
          <StyledLink to={"/student/tests"}>Tests 
                            </StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsBook />{" "}
          </SidebarIcon>
          <StyledLink to={"/student/library"}>Library</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsChatDots />{" "}
          </SidebarIcon>
          <StyledLink to={"/student/announcement"}>Announcement</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
          <SidebarIcon>
            <BsGear />{" "}
          </SidebarIcon>
          <StyledLink to={"/student/profile"}>Settings and Profile</StyledLink>
        </SidebarNavItem> */}

        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}></ToggleIcon>
        </ToggleButton>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
