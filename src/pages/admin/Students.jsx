import React, { useEffect, useState } from "react";
import {
  AddStudentButton,
  AddStudentForm,
  AddStudentInput,
  Content,
  StudentItem,
  StudentList,
  StudentsContainer,
  StudentsContent,
  StudentsHeader,
} from "../../styles/StudentsStyles";
import Sidebar from "./Sidebar";
import axios from "axios";

const Student = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    registrationNumber: "",
    grade: "",
  });
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/events");
      if (response.data && Array.isArray(response.data.classes)) {
        setStudents(response.data.classes || []);
      } else {
        console.log("Error while fetching classes:", response.data);
      }
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (
      newStudent.name.trim() !== "" &&
      newStudent.registrationNumber.trim() !== "" &&
      newStudent.grade.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/students",
          {
            grade: newStudent,
          },
        );
        console.log("Response data", response.data);
        setStudents([...students, response.data.student]);
        setNewStudent({ name: "", registrationNumber: "", grade: "" });
      } catch (error) {
        console.error("Error adding students: ", error);
      }
    }
  };

  return (
    <StudentsContainer>
      <Sidebar>
        <Content>
          <StudentsContent>
            <StudentsHeader>
              <AddStudentForm onSubmit={handleAddStudent}>
                <AddStudentInput
                  type="Text"
                  value={newStudent.name}
                  onChange={() =>
                    setNewStudent({ ...newStudent, name: e.target.value })
                  }
                  placeholder="Enter Student Name"
                />
                <AddStudentInput
                  type="Text"
                  value={newStudent.registrationNumber}
                  onChange={() =>
                    setNewStudent({
                      ...newStudent,
                      registrationNumber: e.target.value,
                    })
                  }
                  placeholder="Enter Registration Number"
                />
                <AddStudentInput
                  type="Text"
                  value={newStudent.grade}
                  onChange={() =>
                    setNewStudent({ ...newStudent, grade: e.target.value })
                  }
                  placeholder="Enter Grade Name"
                />
                <AddStudentButton type="submit">Add Student</AddStudentButton>
              </AddStudentForm>

              <StudentList>
                {students.map((student, index) => (
                  <StudentItem key={index}>
                    {student.name} - {student.registrationNumber} -
                    {student.grade}
                  </StudentItem>
                ))}
              </StudentList>
            </StudentsHeader>
          </StudentsContent>
        </Content>
      </Sidebar>
    </StudentsContainer>
  );
};

export default Student;
