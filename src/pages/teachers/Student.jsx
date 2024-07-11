import React from 'react'
import { StudentList,Content, StudentsContainer, StudentsContent, StudentsHeader } from '../../styles/StudentsStyles'
import Sidebar from '../students/Sidebar'

const TeacherStudent = () => {
  return (
    <StudentsContainer>
        <Sidebar/>
        <Content>
            <StudentsContent>
                <StudentsHeader>Studets</StudentsHeader>
                <StudentList>
                    {/* here are the list of student s */}
                </StudentList>
            </StudentsContent>
        </Content>
    </StudentsContainer>
  )
}

export default TeacherStudent