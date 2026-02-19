import React from "react";
import {
  AttendanceContainer,
  AttendanceDate,
  AttendanceHeader,
  AttendanceItem,
  AttendanceList,
  AttendanceStatus,
  Content,
  SidebarContainer,
} from "../../styles/AttendanceStyles";
import Sidebar from "./Sidebar";

const AttendanceSection = () => {
  const attendance = [
    { id: 1, date: "2025-04-01", present: true },
    { id: 2, date: "2025-04-01", present: true },
    { id: 3, date: "2025-04-01", present: true },
    { id: 4, date: "2025-04-01", present: true },
    { id: 5, date: "2025-04-01", present: true },
    { id: 6, date: "2025-04-01", present: true },
    { id: 7, date: "2025-04-01", present: true },
  ];
  return (
    <AttendanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AttendanceHeader>Attendance</AttendanceHeader>
        <AttendanceList>
          {attendance.map(({ id, date, present }) => (
            <AttendanceItem key={id}>
              <AttendanceDate>{date}</AttendanceDate>
              <AttendanceStatus present={present}>
                {present ? "Present" : "Absent"}
              </AttendanceStatus>
            </AttendanceItem>
          ))}
        </AttendanceList>
      </Content>
    </AttendanceContainer>
  );
};

export default AttendanceSection;
