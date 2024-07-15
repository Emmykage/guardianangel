import React, { useEffect, useState } from 'react'
import {AdminDashboardContainer, BottomContent, Card, CardContainer, CardContent, CardTitle, Content, Section, SectionTitle, TopContent} from '../../styles/DashboardStyles'
import Performance from './Performance'
import Announcement from './Announcement'
import Sidebar from './Sidebar'
import axios from 'axios'
const AdminDashboard = () => {
    const [isOpen, setIsOPen] = useState(true)
    const [events, setEvent] = useState([])
    const [announcements, setAnnouncements] = useState([])
    const [studentPerformances, setStudentPerformances] = useState([])

    useEffect(()=> {
        fetchAnnouncements()
        fetchEvents()
        fetchStudentPerformance()
    }, [])
    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/events')
            setEvent(response.data.events || [])
        } catch (error) {
            console.error("Error fetching events: ", error)
            
        }
    }

    const fetchAnnouncements = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/announcements')
            setEvent(response.data.announcements || [])
        } catch (error) {
            console.error("Error fetching events: ", error)
            
        }
    }
    const fetchStudentPerformance = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/performances')
            setEvent(response.data.performances || [])
        } catch (error) {
            console.error("Error fetching student Performance  : ", error)
            
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
                <Performance  studentPerformances={studentPerformances}/>
                    <Announcement announcements={announcements}/>
                {/* <Performance>
                    <SectionTitle> Announcement</SectionTitle>

                </Performance> */}
            </BottomContent>
        </Content>

    </AdminDashboardContainer>
  )
}

export default AdminDashboard