

import React, { useEffect, useState } from 'react'
import { AnnouncementContainer, AnnouncementForm, AnnouncementItem, AnnouncementList, AnnouncementTitle, Button, Content, FormGroup, Label, TextArea, Title } from '../../styles/AnnouncementStyles'
import Sidebar from './Sidebar'
import axios from 'axios'

const TeacherAnnouncement = () => {
  const [announcement, setAnnouncement] = useState({name: "", email: "", subject: ""})
  const [announcements, setAnnouncements] = useState([])
  useEffect(()=> {
          fetchAnnouncements()
  },[])
  
const fetchAnnouncements = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/v1/announcements')
    if(response.data && Array.isArray(response.data.teachers)){
      setAnnouncements(response.data.announcements  || [])

    }else{
      console.log("Error while fetching teachers:", response.data)
    }
} catch (error) {
    console.error("Error fetching announcemmen: ", error)
    
}
}

const handleSubmit = async (e) => {
  e.preventDefault()
  // if(newTeacher.name.trim() !== "" && newTeacher.email.trim() !== "" && newTeacher.grade.trim() !== ""){
    try {
      const response = await axios.post('http://localhost:4000/api/v1/announcement', {
        announcement: announcement,

    });
      console.log("Announcement Sent", response.data)

      setAnnouncement ('' )
      fetchAnnouncements ();
    } catch (error) {
      console.error("Error adding Announcement: ", error)
      
  // }
  }
}
  return (
    <AnnouncementContainer>
      <Sidebar/>
      <Content>
        <Title>Announcement</Title>
        <AnnouncementForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor='announcement'>Announcement</Label>
            <TextArea
            id='announcement'
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            required
            rows={4}
            cols={50}
             />
          </FormGroup>
          <Button>Send Announcement</Button>
        </AnnouncementForm>

        {/* to display announcement  */}

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

export default TeacherAnnouncement