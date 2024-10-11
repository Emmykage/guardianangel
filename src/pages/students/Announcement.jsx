import React, { useEffect, useState } from 'react'
import { AnnouncementContainer, AnnouncementHeader, AnnouncementItem, AnnouncementList, AnnouncementTitle, Content } from '../../styles/AnnouncementStyles'
import { SidebarContainer } from '../../styles/SidebarStyles'
import Sidebar from './Sidebar'
import axios from 'axios'

const StudentAnnouncementSection = () => {
  // const [announcement, setAnnouncement] = useState({name: "", email: "", subject: ""})
  const [announcements, setAnnouncements] = useState([])
  useEffect(()=> {
          fetchAnnouncements()
  },[])
  
const fetchAnnouncements = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/v1/announcements')
    if(response.data && Array.isArray(response.data.announcementss)){
      setAnnouncements(response.data.announcements  || [])

    }else{
      console.log("Error while fetching teachers:", response.data)
    }
} catch (error) {
    console.error("Error fetching announcemment: ", error)
    
}      setAnnouncements( [])

}


  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer>
    <Content>
      <AnnouncementHeader>Announcement</AnnouncementHeader>
      <AnnouncementList>
          {announcements.map((announcement) => (
            <AnnouncementItem key={announcement._id}>
              <AnnouncementTitle>{announcement.announcement}</AnnouncementTitle>

            </AnnouncementItem>
          ))}
          
        </AnnouncementList>
    </Content>
    </AnnouncementContainer>
  )
}

export default StudentAnnouncementSection  