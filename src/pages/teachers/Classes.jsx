import React from 'react'
import { ClassContainer,Content, ClassHeader, ClassList, SidebarContainer } from '../../styles/ClassesStyles'
import Sidebar from './Sidebar'

const TeacherClasses = () => {
  return (
    <div>
        <ClassContainer>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <Content>
                <ClassHeader>Classess</ClassHeader>
                <ClassList></ClassList>
            </Content>
        </ClassContainer>
    </div>
  )
}

export default TeacherClasses