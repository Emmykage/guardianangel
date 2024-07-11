import React from 'react'
import { Card, CardContainer, CardContent, CardTitle, Content, Section, SectionTitle, TeacherDashboardContainer } from '../../styles/DashboardStyles'
import Sidebar from './Sidebar'

const TeacherDashboard = () => {
  return (
    <TeacherDashboardContainer>
      <Sidebar/>
      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Total Students</CardTitle>
              <CardContent>%30</CardContent>

            </Card>
            <Card>
              <CardTitle>Total Teacherss</CardTitle>
              <CardContent>30</CardContent>

            </Card>
            <Card>
              <CardTitle>Total Classes</CardTitle>
              <CardContent>%30</CardContent>

            </Card>
          </CardContainer>
        </Section>
      </Content>

         </TeacherDashboardContainer>

  )
}

export default TeacherDashboard