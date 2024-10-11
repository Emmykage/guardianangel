import React, { useEffect, useState } from 'react'
import { AttendanceContainer, AttendanceContent, AttendanceHeader, AttendanceItem, AttendanceList, CheckboxLabel, Content, StudentName, SubmitButton } from '../../styles/AttendanceStyles'
import Sidebar from './Sidebar'
import axios from 'axios'


const TeacherAttendance = () => {
    const [students, setStudents] = useState([])
    const [attendanceData, setAttendanceData] = useState([])
    useEffect(()=> {
            fetchStudents()
    },[])
    
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/students')
      if(response.data && Array.isArray(response.data.teachers)){
        setStudents(response.data.students  || [])
        initializeAttendanceData(response.data.students)
  
      }else{
        console.log("Error while fetching teachers:", response.data)
      }
  } catch (error) {
      console.error("Error fetching teachers: ", error)
      
  }
  }
  
  const initializeAttendanceData =  (students) => {
    const initialialAttendanceData = students.map(student => (
      {
          id: student.id,
          name: student.name,
          status: "Present"
      }
    ))
  
    setAttendanceData(initialialAttendanceData)
  }
  
  const handleStatusChange = (id, status) => {
      const updatedData = attendanceData.map(student => {
          if(student.id == id){
              return {
                  ...student, status
              }
  
          }
          return student
  
      })
  
      setAttendanceData(updatedData)
  }
  
  const handleSubmit = async () => {
      try {
          const formattedData = attendanceData.map(({id, name, status}) => ({studentId: id, name, status}) )
          const response = await axios.post("http://localhost:4000/api/v1/attendance", {attendanceData: formattedData})
      } catch (error) {
          console.error("Error submitting attendance data: ", error)
          
      }
  }
  return (
    <AttendanceContainer>
    <Sidebar/>
    <Content>
        <AttendanceContent>
            <AttendanceHeader>Attendance</AttendanceHeader>
            <AttendanceList>
                {students.map((student, index) => {
                    <React.Fragment key={student.id}>
                         <AttendanceItem>
                    <StudentName>{student.name}</StudentName>
                    <CheckboxLabel>
                        <input
                        type='checkbox'
                        checked={attendanceData[index]?.status ==  "Present" }
                        onChange={()=> handleStatusChange(student.id, "Present")}
                        />
                        Present
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <input
                        type='checkbox'
                        checked={attendanceData[index]?.status ==  "Present" }
                        onChange={()=> handleStatusChange(student.id, "Absent")}
                      
                        />
                        Absent
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <input
                        type='checkbox'
                        checked={attendanceData[index]?.status ==  "Absent with Apology" }
                        onChange={()=> handleStatusChange(student.id, "Absent with Apology")}
                      
                        />
                        Absent with Apology
                    </CheckboxLabel>
                </AttendanceItem>
                    </React.Fragment>
                })}
               
            </AttendanceList>
            <SubmitButton onClick={handleSubmit}>Submit </SubmitButton>
        </AttendanceContent>
    </Content>
</AttendanceContainer>
  )
}

export default TeacherAttendance