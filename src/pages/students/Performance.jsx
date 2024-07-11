import React from 'react'
import { Content, PerformanceContainer, PerformanceGraphContainer, PerformanceHeader, PerformanceInfo, SidebarContainer, TotalMarks } from '../../styles/PerformanceStyles'
import Sidebar from './Sidebar'
import { Line } from 'react-chartjs-2'

const PerformanceSection = () => {

  const performanceData = {
    months: ["jan", "Feb", "Mar", "Apr", "May", "Jun"],
    marks: [98, 67, 56, 89, 67, 87, 66, 90],
    totalMarks: 560
  }
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: "Performance Trends",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: performanceData.marks
      }
    ]
  }
  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line

            data={lineChartData}
            options = {{
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true 
                  }
                }]
              }
            }}
            />
          </PerformanceGraphContainer>
          <TotalMarks>Total MArks: {performanceData.totalMarks}</TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  )
}

export default PerformanceSection