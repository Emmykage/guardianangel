import React from 'react'
import { AddAssignmentButton, AddAssignmentForm, AddAssignmentInput, AddAssignmentTextArea, AssignmentList, AssignmentsContainer, AssignmentsContent, AssignmentsHeader } from '../../styles/AssignmentsStyles'
import Sidebar from './Sidebar'
import { Content } from '../../styles/LibraryStyles'

const Assignment = () => {
  return (
    <div>
        <AssignmentsContainer>
            <Sidebar/>
            <Content>
                <AssignmentsContent>
                    <AssignmentsHeader>Assignements</AssignmentsHeader>
                <AddAssignmentForm>
                    <AddAssignmentInput 
                    type='text'
                    placeholder='Enter Assignment Title'
                    />
                    <AddAssignmentTextArea
                    placeholder='Enter Assignment Description'
                    />
                    <AddAssignmentInput
                    type='text'
                    placeholder='Enter Grade'
                    />
                    <AddAssignmentInput
                    type='text'
                    placeholder='Enter Assignment deadline'
                    />
                    <AddAssignmentButton type="submit">Add Assignement</AddAssignmentButton>
                    </AddAssignmentForm>  
                    <AssignmentList>
                        {/* will display asignment list  */}
                        </AssignmentList>  
                </AssignmentsContent>
            </Content>
        </AssignmentsContainer>
    </div>
  )
}

export default Assignment