import React, { useRef } from 'react'
import { Content, ExamChartContainer, ExamContainer, ExamHeader, ExamResult, ExamResultsContainer, ExamSubject, SidebarContainer } from '../../styles/ExamStyles'
import Sidebar from './Sidebar'
// import { Bar } from 'react-chartjs-2'

const ExamsSection = () => {
  const chartRef = useRef()
  const examResultData = {
    subjects: ["Maths", "Science", "English", "Hisory"],
    results: [89,67,76,85]
  }

  const barChartData = {
    labels: examResultData.subjects,
    datasets: {
      labels: "Exam Results",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    borderWidth: '1',
    hoverBackgroundColor: "#005663",
    hoverBorderColor: "#00ade",

    data: examResultData.results
    }
  }

  const chartOptions = {
    scales: {
      y: {
          types: "linear",
          beginAtZero: true,
          max: 100

      }
    }
  }
  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results          
        </ExamHeader>
        <ExamResultsContainer>
          {examResultData.subjects.map((subject, index) => (
            <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>Score: {examResultData.results[index]}</ExamResult>
            </div>
          ))}

          <ExamChartContainer>
            <Bar 
            ref={chartRef}
            data= {barChartData}
            options = {chartOptions}
            />
          </ExamChartContainer>
        </ExamResultsContainer>

      </Content>

      </ExamContainer>
  )
}

export default ExamsSection