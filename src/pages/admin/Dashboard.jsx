import React, { useState } from 'react'
import {AdminDashboardContainer, BottomContent, Card, CardContainer, CardContent, CardTitle, Content, Section, SectionTitle, TopContent} from '../../styles/DashboardStyles'
import Performance from './Performance'
import Announcement from './Announcement'
import Sidebar from './Sidebar'
import axios from 'axios'
const AdminDashboard = () => {
    const [events, setEvent] = useState([])
    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/events')
            setEvent(response.data.events || [])
        } catch (error) {
            console.error("Error fetching events: ", error)
            
        }
    }

    const fetchannouncements = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/announcements')
            setEvent(response.data.announcements || [])
        } catch (error) {
            console.error("Error fetching events: ", error)
            
        }
    }
  return (
    <AdminDashboardContainer>
        <Sidebar/>
        <Content>
            <TopContent>
                <Section>
                    <SectionTitle>Overview</SectionTitle>
                    <CardContainer>
                        <Card>
                            <CardTitle>Total Students</CardTitle>
                            <CardContent>50</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Total Teachers</CardTitle>
                            <CardContent>50</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Total Classes</CardTitle>
                            <CardContent>20</CardContent>
                        </Card>
                    </CardContainer>
                </Section>

                <Section>
                    <SectionTitle>All Events</SectionTitle>
                    {/* <EventCalendar event = {events}/> */}

                </Section>
            </TopContent>

            <BottomContent>
                {/* <h3>Bottom section</h3> */}
                <Performance/>
                    <Announcement/>
                {/* <Performance>
                    <SectionTitle> Announcement</SectionTitle>

                </Performance> */}
            </BottomContent>
        </Content>

    </AdminDashboardContainer>
  )
}

export default AdminDashboard