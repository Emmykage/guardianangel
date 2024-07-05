import React from 'react'
import { Content, IndividualPerformance, PerformanceContainer, PerformanceHeader, SchoolPerformance, SidebarContainer } from '../../styles/PerformanceStyles'
import Sidebar from './Sidebar'

const Performance = () => {
    const schoolPerformanceData = {
        averageScore: 85,
        totalStudents: 100,

    }

    const individualPerformanceData = [{id: 1, name: "Joh Doe", score: 86},
        {id: 1, name: "John Doe", score: 90},
        {id: 2, name: "Jane Doe", score: 85},
        {id: 3, name: "James Doe", score: 70}
    ]
  return (
    <PerformanceContainer>
        <Sidebar/>
        <Content>
        <SidebarContainer>
            <PerformanceHeader> School Perfomance
            </PerformanceHeader>
            <SchoolPerformance>
                <p>Average Score: {schoolPerformanceData.averageScore}</p>
                <p>Total Students: {schoolPerformanceData.totalStudents}</p>
            </SchoolPerformance>
            <PerformanceHeader>Individual Perfomrmance</PerformanceHeader>
            <IndividualPerformance>
                {individualPerformanceData.map(student => (
                    <p key={student.id}>
                        {student.name}: {student.score}
                    </p>
                ))}
            </IndividualPerformance>
        </SidebarContainer>

        </Content>

    </PerformanceContainer>
  )
}

export default Performance