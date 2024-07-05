import React from 'react'
import { AddAssignmentButton, AddAssignmentForm, AddAssignmentInput, AddAssignmentTextArea, AssignmentsContainer, AssignmentsContent, AssignmentsHeader, Content } from '../../styles/AssignmentsStyles'
import Sidebar from './Sidebar'

const Assignment = () => {
  return (
    <AssignmentsContainer>
        <Sidebar/>
        <Content>
            <AssignmentsContent>
                <AssignmentsHeader>
                    Assignments
                </AssignmentsHeader>
                <AddAssignmentForm>
                    <AddAssignmentInput 
                    type='Name'
                    placeholder='Enter Assignment title'
                    />
                    <AddAssignmentTextArea
                    
                    placeholder='ENter Assignment'
                    />
                    <AddAssignmentInput
                        placeholder='Enter Assignment Grade'

                        type="text"

                    />
                    <AddAssignmentInput
                        type='text'
                        placeholder='Enter Assignment Deadline'

                     />
                     <AddAssignmentButton type='submit'>
Add Assignment
                     </AddAssignmentButton>
                </AddAssignmentForm>
            </AssignmentsContent>
        </Content>
        
    </AssignmentsContainer>
  )
}

export default Assignment