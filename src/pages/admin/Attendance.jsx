import React from 'react'
import { AttendanceContainer, AttendanceContent, AttendanceHeader, AttendanceItem, AttendanceList, CheckboxLabel, Content, StudentName, SubmitButton } from '../../styles/AttendanceStyles'
import Sidebar from './Sidebar'


const Attendance = () => {
  return (
    <AttendanceContainer>
        <Sidebar/>
        <Content>
            <AttendanceContent>
                <AttendanceHeader>Attendance</AttendanceHeader>
                <AttendanceList>
                    <AttendanceItem>
                        <StudentName></StudentName>
                        <CheckboxLabel>
                            <input
                            type='checkbox'
                            />
                            Present
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <input
                            type='checkbox'
                            />
                            Absent
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <input
                            type='checkbox'
                            />
                            Absent with Apology
                        </CheckboxLabel>
                    </AttendanceItem>
                </AttendanceList>
                <SubmitButton>Submit </SubmitButton>
            </AttendanceContent>
        </Content>
    </AttendanceContainer>
  )
}

export default Attendance