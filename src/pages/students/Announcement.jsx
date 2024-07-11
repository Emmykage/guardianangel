import React from 'react'
import { AnnouncementContainer, AnnouncementHeader, AnnouncementList, Content } from '../../styles/AnnouncementStyles'
import { SidebarContainer } from '../../styles/SidebarStyles'
import Sidebar from './Sidebar'

const TeacherAnnouncementSection = () => {
  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer>
    <Content>
      <AnnouncementHeader>Announcement</AnnouncementHeader>
      <AnnouncementList></AnnouncementList>
    </Content>
    </AnnouncementContainer>
  )
}

export default TeacherAnnouncementSection  