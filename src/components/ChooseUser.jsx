import React from 'react'
import { Button, ChooseUserContainer, UserSection } from '../styles/ChooseUserStyles'
import { Title } from '../styles/styles'
// import { Button } from '@mui/material'

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
        <UserSection> 
            <Title>Admin</Title>
            <Button to="/admin-signin">Login as Admin</Button>
        </UserSection>
        <UserSection> 
            <Title>Student</Title>
            <Button to="/student-signin">Login as Student</Button>
        </UserSection>
        <UserSection> 
            <Title>Teacher</Title>
            <Button to="/teacher-signin">Login as Teachers</Button>
        </UserSection>
    </ChooseUserContainer>
  )
}

export default ChooseUser