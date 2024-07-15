import React from 'react'
import { TeacherList, TeachersContainer, Content,TeachersHeader } from '../../styles/TeachersStyles'
import Sidebar from './Sidebar'

const TeachersTeacher = () => {
  const [newTeacher, setNewTeacher] = useState({name: "", email: "", subject: ""})
  const [teachers, setTeachers] = useState([])
  useEffect(()=> {
          fetchStudents()
  },[])
  
const fetchStudents = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/v1/teachers')
    if(response.data && Array.isArray(response.data.teachers)){
      setTeachers(response.data.teachers  || [])

    }else{
      console.log("Error while fetching teachers:", response.data)
    }
} catch (error) {
    console.error("Error fetching teachers: ", error)
    
}
}

const handleAddTeacherss = async (e) => {
  e.preventDefault()
  if(newTeacher.name.trim() !== "" && newTeacher.email.trim() !== "" && newTeacher.grade.trim() !== ""){
    try {
      const response = await axios.post('http://localhost:4000/api/v1/students', newTeacher);
      console.log("Response data", response.data)
      setTeachers([...teachers, response.data.teachers] )
      setNewTeacher ({name: "", email: "", subject: ''})
    } catch (error) {
      console.error("Error adding students: ", error)
      
  }
  }
}
  return (
    <div>
        <TeachersContainer>
        <Sidebar />
        <Content>
            <TeachersContent>
                <TeachersHeader>

                <AddTeacherForm onSubmit={handleAddTeacherss}>
                    <AddTeacherInput 
                    type='text'
                    placeholder='Enter Teacher Name'
                    value={newTeacher.name}
                    onChange={(e)=> setNewTeacher({...newTeacher, name: e.target.value})}
                    />
                     <AddTeacherInput 
                    type='text'
                    placeholder='Enter Teacher Email'
                    value={newTeacher.email}
                    onChange={(e)=> setNewTeacher({...newTeacher, email: e.target.value})}
                    />
                     <AddTeacherInput 
                    type='text'
                    placeholder='Enter Teacher Subject'
                    value={newTeacher.subject}
                    onChange={(e)=> setNewTeacher({...newTeacher, subject: e.target.value})}
                    />
                    <AddTeacherButton type='submit'>Add Teacher</AddTeacherButton>

                </AddTeacherForm>
                <TeacherList>
                {teachers.map((teacher, index) => (
                                <TeacherItem key={index}>{teacher.name} - {teacher.email} -{teacher.subject}</TeacherItem>
                            ))}
                </TeacherList>
                </TeachersHeader>
                

            </TeachersContent>
        </Content>
        </TeachersContainer>
    </div>
  )
}

export default TeachersTeacher