import React from 'react'
import Sidebar from './Sidebar'
import { AddTeacherButton, AddTeacherForm, AddTeacherInput, Content, TeacherList, TeachersContainer, TeachersContent, TeachersHeader } from '../../styles/TeachersStyles'

const Teachers = () => {
  return (
    <TeachersContainer>
        <Sidebar />
        <Content>
            <TeachersContent>
                <TeachersHeader>

                <AddTeacherForm>
                    <AddTeacherInput 
                    type='text'
                    placeholder='Enter Teacher Name'
                    />
                     <AddTeacherInput 
                    type='text'
                    placeholder='Enter Teacher Email'
                    />
                     <AddTeacherInput 
                    type='text'
                    placeholder='Enter Teacher Subject'
                    />
                    <AddTeacherButton type='submit'>Add Teacher</AddTeacherButton>

                </AddTeacherForm>
                <TeacherList>

                </TeacherList>
                </TeachersHeader>
                

            </TeachersContent>
        </Content>
    </TeachersContainer>
  )
}

export default Teachers