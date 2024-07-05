import React from 'react'
import { Content, EditButton, ProfileContainer, ProfileDetails, ProfileHeader, ProfileInfo, ProfileLabel } from '../../styles/SettingsProfileStyles'
import { SidebarContainer } from '../../styles/SidebarStyles'
import Sidebar from './Sidebar'


const SettingsProfile = () => {
    const teacherInfo = {
      name: "Jon Doe",
      email: "Jondoe@gmail.com",
      phone: "07064334160",
      address: "Emotan Kubwa Abuja",
      qualification: "Bachelors in Education"
  
  }
  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar/>

      </SidebarContainer>
      <Content>
        <ProfileHeader>Prfile Details</ProfileHeader>
        <ProfileDetails>
        <ProfileLabel>Name:</ProfileLabel>
        <ProfileInfo>{teacherInfo.name}</ProfileInfo>
        <ProfileLabel>Email:</ProfileLabel>
        <ProfileInfo>{teacherInfo.email}</ProfileInfo>
        <ProfileLabel>Phone:</ProfileLabel>
        <ProfileInfo>{teacherInfo.phone}</ProfileInfo>
        <ProfileLabel>Address:</ProfileLabel>
        <ProfileInfo>{teacherInfo.address}</ProfileInfo>
        <ProfileLabel>Qualification:</ProfileLabel>
        <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
        
        </ProfileDetails>

        <EditButton>Edit Profile</EditButton>
      </Content>
    </ProfileContainer>
  )
}

export default SettingsProfile