import React from 'react'
import { TeacherList, TeachersContainer, Content,TeachersHeader } from '../../styles/TeachersStyles'
import Sidebar from './Sidebar'

const TeachersTeacher = () => {
  return (
    <div>
        <TeachersContainer>
            <Sidebar/>
            <Content>
                <TeachersHeader>Teachers</TeachersHeader>
                <TeacherList>
                    {/* all teachers  */}
                </TeacherList>
            </Content>
        </TeachersContainer>
    </div>
  )
}

export default TeachersTeacher