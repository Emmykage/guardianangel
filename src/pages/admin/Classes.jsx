import React, { useEffect, useState } from 'react'
import { AddClassButton, AddClassForm, AddClassInput, ClassContainer, ClassHeader, ClassItem, ClassList, ClassesContainer, ClassesContent, Content } from '../../styles/ClassesStyles'
import Sidebar from './Sidebar'
import axios from 'axios'

const Classes = () => {

  const [newClassName, setNewClassName] = useState('')
  const [classes, setClasses] = useState([])

  useEffect(()=> {
    fetchClasses()
  })

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/events')
      if(response.data && Array.isArray(response.data.classes)){
        setClasses(response.data.classes  || [])

      }else{
        console.log("Error while fetching classes:", response.data)
      }
  } catch (error) {
      console.error("Error fetching events: ", error)
      
  }
  }

  const handleAddClass = async (e) => {
    e.preventDefault()
    if(newClassName.trim() !== ""){
      try {
        const response = await axios.post('http://localhost:4000/api/v1/classes', {
          grade: newClassName
        })
        console.log("Response data", response.data)
        setClasses(prevClasses => {
          if(Array.isArray(prevClasses)){
            return[...prevClasses, response.data]
            
          }else{
            console.log("Error while fetching classes:", response.data)
            return []
          }
        } )
        setNewClassName('')
      } catch (error) {
        console.error("Error fetching events: ", error)
        
    }
    }
  }
  return (
    <ClassesContainer>
        <Sidebar />
        <Content/>
            <ClassesContent>
                <ClassHeader>
                    Classes
                </ClassHeader>
                <AddClassForm onSubmit={handleAddClass  }>
                    <AddClassInput 
                    type='text'
                    placeholder='Enter Class Name'
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                    />
                    <AddClassButton type='submit'>Add Class</AddClassButton>
                </AddClassForm>

                <ClassList>
                  {Array.isArray(classes) && classes.map((classItem, index) => (
                    <ClassItem key={index}>{classItem.grade}</ClassItem>
                  ))}

                </ClassList>
            </ClassesContent>
    </ClassesContainer>
  )
}

export default Classes