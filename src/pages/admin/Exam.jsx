
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { AddButton, Content, ExamContainer, ExamForm, ExamHeader, FormInput, FormLabel, SidebarContainer } from '../../styles/ExamStyles'
import axios from 'axios'

const Exam = () => {
    const [examData, setExamData] = useState([])
    const [name, setName] = useState([])
    const [registrationNumber, setRegistrationNumber] = useState['']
    const [className, setClassName] = useState('')
    const [marks, setMarks] = useState('')
    useEffect(()=> {
        fetchExams()
    },[])
    
  const fetchExams = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/exams')
      if(Array.isArray(response.data.exams)){
        setExamData(response.data)
  
      }else{
        console.log("Error while fetching assignments:", response.data)
      }
  } catch (error) {
      console.error("Error fetching assignments: ", error)
      
  }
  }
  
  const handleAddExam = async (e) => {

    e.preventDefault()

    const newExam = {name, registrationNumber, className, marks: parseInt(marks)}
      try {
        const response = await axios.post('http://localhost:4000/api/v1/exams', newExam);
        if(typeof response.data === "object"){
            setExamData([...examData, response.data]);
            setName('')
            setRegistrationNumber('')
            setClassName('')
            setMarks('')
        }else{
            console.log("Error: API response data not an object")
        }
        
        
      } catch (error) {
        console.error("Error adding Exam: ", error)
        
    }
    }
  
    const calculateTotalMarks = () => {
        let total = 0;
        for (let i = 0; i < examData.length; i++  ){
            total = examData[i].marks
        }
        return total

    }
  return (
    <ExamContainer> 
        <SidebarContainer>
            <Sidebar/>
        </SidebarContainer>
        <Content>
                <ExamHeader>
                    Exam Details
                </ExamHeader>
                <ExamForm onSubmit={handleAddExam}>
                    
                    <FormLabel>Name:</FormLabel>
                    <FormInput
                
                    type='text'
                    placeholder='Enter Name'
                    required
                    />
                    <FormLabel>Registration Number:</FormLabel>
                    <FormInput
                
                    type='text'
                    placeholder='Enter Resistration Number'
                    required
                    />
                    <FormLabel>Class:</FormLabel>
                    <FormInput
                
                    type='text'
                    placeholder='Class'
                    required
                    />
                     <FormLabel>Marks:</FormLabel>
                    <FormInput
                
                    type='number'
                    placeholder='Enter Student Marks'
                    required
                    />
                    
                     <AddButton type='submit'>Add Exam
                     </AddButton>
                </ExamForm>

                <h2>Total Marks: </h2>
                <h3>Exam Details:</h3>

                <ul>

                </ul>

        </Content>
        
    </ExamContainer>
  )
}

export default Exam