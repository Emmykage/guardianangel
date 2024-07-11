import React from 'react'
import { AssignmentsContainer, Content, SidebarContainer } from '../../styles/AssignmentsStyles'
import Sidebar from './Sidebar'

const StudentAssignment = () => {
  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer>
      <Content>
        <h2>Assignment</h2>
      </Content>

      </AssignmentsContainer>
  )
}

export default StudentAssignment