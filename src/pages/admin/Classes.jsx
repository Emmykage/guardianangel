import React from 'react'
import { AddClassButton, AddClassForm, AddClassInput, ClassContainer, ClassHeader, ClassList, ClassesContainer, ClassesContent, Content } from '../../styles/ClassesStyles'
import Sidebar from './Sidebar'

const Classes = () => {
  return (
    <ClassesContainer>
        <Sidebar />
        <Content/>
            <ClassesContent>
                <ClassHeader>
                    Classes
                </ClassHeader>
                <AddClassForm>
                    <AddClassInput 
                    type='text'
                    placeholder='Enter Class NAme'
                    />
                    <AddClassButton type='submit'>Add Class</AddClassButton>
                </AddClassForm>

                <ClassList>


                </ClassList>
            </ClassesContent>
    </ClassesContainer>
  )
}

export default Classes