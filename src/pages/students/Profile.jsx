import React from 'react'
import { Content, Label, ProfileContainer, ProfileDetail, ProfileHeader, ProfileInfo, Value } from '../../styles/SettingsProfileStyles'
import { SidebarContainer } from '../../styles/SidebarStyles'
import Sidebar from './Sidebar'

const StudentProfileSection = () => {
  const studentProfile = {
    name: "Jonny Doe",
    age: "19",
    school: "guardian",
    email: "jondoe@gmail.com"
  }
  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar/>

      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile</ProfileHeader>
        <ProfileInfo>
          <ProfileDetail>
          <Label>Name:</Label>
          <Value>{studentProfile.name}</Value> 
          <Label>Age:</Label>
          <Value>{studentProfile.age}</Value> 
          <Label>Grade:</Label>
          <Value>{studentProfile.name}</Value>  
          <Label>School:</Label>
          <Value>{studentProfile.school}</Value>  
          <Label>Email:</Label>
          <Value>{studentProfile.email}</Value> 

          </ProfileDetail>
        </ProfileInfo>

      </Content>
    </ProfileContainer>
  )
}

export default StudentProfileSection