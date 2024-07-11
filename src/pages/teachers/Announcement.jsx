

import React from 'react'
import { AnnouncementContainer, AnnouncementForm, AnnouncementList, Button, Content, FormGroup, Label, TextArea, Title } from '../../styles/AnnouncementStyles'
import Sidebar from './Sidebar'

const Announcement = () => {
  return (
    <AnnouncementContainer>
      <Sidebar/>
      <Content>
        <Title>Announcement</Title>
        <AnnouncementForm>
          <FormGroup>
            <Label htmlFor='announcement'>Announcement</Label>
            <TextArea
            required
            rows={4}
            cols={50}
             />
          </FormGroup>
          <Button>Send Announcement</Button>
        </AnnouncementForm>

        {/* to display announcement  */}

        <AnnouncementList>
          
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  )
}

export default Announcement