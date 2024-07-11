import React from 'react'
import {AdminDashboardContainer, BottomContent, Card, CardContainer, CardContent, CardTitle, Content, Section, SectionTitle, TopContent} from '../../styles/DashboardStyles'
import EventCalendar from './EventCalendar'
import Performance from './Performance'
import Announcement from './Announcement'
import Sidebar from './Sidebar'
const StudentDashboard = () => {
  return (
    <AdminDashboardContainer>
        <Sidebar/>
        <Content>
                <Section>
                    <SectionTitle>Overview</SectionTitle>
                    <CardContainer>
                        <Card>
                            <CardTitle>Total Students</CardTitle>
                            <CardContent>5</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Performance </CardTitle>
                            <CardContent>50</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Term</CardTitle>
                            <CardContent>1</CardContent>
                        </Card>
                    </CardContainer>
                </Section>

                <Section>
                  <SectionTitle>Recent Activity</SectionTitle>
                </Section>

                <Section>
                  <SectionTitle>Upcoming Activity</SectionTitle>
                </Section>

            <BottomContent>
                <Performance/>
                    <Announcement/>
              
            </BottomContent>
        </Content>

    </AdminDashboardContainer>
  )
}

export default StudentDashboard