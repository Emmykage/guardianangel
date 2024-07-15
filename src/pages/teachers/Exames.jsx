import React from 'react'
import { AddButton, ExamContainer, ExamForm, FormInput } from '../../styles/ExamStyles'
import { SidebarContainer } from '../../styles/LibraryStyles'
import { FormLabel } from '@mui/material'

const Exames = () => {
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