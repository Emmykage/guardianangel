import React, { useState } from 'react'
import { AddAssignmentForm, AssignmentButton, AssignmentCard, AssignmentDescription, AssignmentDoneMessage, AssignmentsContainer, AssignmentTitle, Content, SidebarContainer } from '../../styles/AssignmentsStyles'
import Sidebar from './Sidebar'

const StudentAssignment = () => {

  const [assignments, setAssignments] = useState([])
  useEffect(()=> {
          fetchAssignments()
  },[])
  
const fetchAssignments = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/v1/assignments')
    if(response.data && Array.isArray(response.data.teachers)){
      setAssignments(response.data.assignments  || [])

    }else{
      console.log("Error while fetching assignments:", response.data)
    }
} catch (error) {
    console.error("Error fetching assignments: ", error)
    
}
}

  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer>
      <Content>
        <h2>Assignment</h2>
        {assignments.map(assignment => (
          <AssignmentCard key={assignment._id}>
            <AssignmentTitle>{assignment.title}</AssignmentTitle>
            <AssignmentDescription>{assignment.description}</AssignmentDescription>
            {!assignment.done ? (
              <AssignmentForm onDoAssignment ={()=> handleDoAssignment(assignment._id)}/>

            ) : (
              <AssignmentDoneMessage>Assignment is Done</AssignmentDoneMessage>
            )}
          </AssignmentCard>
        ))}
      </Content>

      </AssignmentsContainer>
  )
}

const AssignmentForm = ({onDoAssignment}) => {
  const [opinion, setOpinion ] = useState('')

  const handleSubmit = (e) => {
    if(opinion.trim !== ''){
      onDoAssignment(); 

    }else{
      alert("PLease provide opinion")
    }
  }
  const handleInputChange = (e) => {
    setOpinion(e.target.value)
  }

  return(
    <form onSubmit={handleSubmit}> 
      <textarea value={opinion} onChange={handleInputChange} placeholder='Enter your opinion/assignment...'/>
      <AssignmentButton type='submit'>Submit</AssignmentButton>
    </form>
  )
}

export default StudentAssignment