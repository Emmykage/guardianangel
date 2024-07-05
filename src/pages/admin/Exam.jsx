
import React from 'react'
import Sidebar from './Sidebar'
import { AddButton, Content, ExamContainer, ExamForm, ExamHeader, FormInput, FormLabel, SidebarContainer } from '../../styles/ExamStyles'

const Exam = () => {
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
                <ExamForm>
                    
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