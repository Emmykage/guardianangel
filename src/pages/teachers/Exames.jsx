import React from 'react'
import { AddButton, ExamContainer, ExamForm, FormInput } from '../../styles/ExamStyles'
import { SidebarContainer } from '../../styles/LibraryStyles'
import { FormLabel } from '@mui/material'

const Exames = () => {
  return (
    <div>
        <ExamContainer>
            <SidebarContainer>
                <ExamForm>
                <FormLabel>Registration Number:</FormLabel>
                    <FormInput
                    type='text'
                    required
                    />
                    <FormLabel>Name:</FormLabel>
                    <FormInput
                    type='text'
                    required
                    />
                     <FormLabel>Class:</FormLabel>
                    <FormInput
                    type='text'
                    required
                    />
                     <FormLabel>Marks:</FormLabel>
                    <FormInput
                    type='text'
                    required
                    />
                    <AddButton>Add Exam:</AddButton>
                </ExamForm>
            </SidebarContainer>
        </ExamContainer>
    </div>
  )
}

export default Exames