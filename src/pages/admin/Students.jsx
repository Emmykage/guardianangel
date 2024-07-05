import React from 'react'
import { AddStudentButton, AddStudentForm, AddStudentInput, Content, StudentsContainer, StudentsContent, StudentsHeader } from '../../styles/StudentsStyles'
import Sidebar from './Sidebar'

const Student = () => {
  return (
    <StudentsContainer>
        <Sidebar>
            <Content>
                <StudentsContent>
                    <StudentsHeader>
                        <AddStudentForm>
                            <AddStudentInput
                            type='Text'
                            placeholder='Enter Student Name'
                            />
                             <AddStudentInput
                            type='Text'
                            placeholder='Enter Registration Number'
                            />
                             <AddStudentInput
                            type='Text'
                            placeholder='Enter Grade Name'
                            />
                            <AddStudentButton type='submit'>Add Student</AddStudentButton>
                        </AddStudentForm>
                    </StudentsHeader>
                </StudentsContent>
            </Content>
        </Sidebar>
    </StudentsContainer>
        
  )
}

export default Student