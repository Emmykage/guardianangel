import React, { useEffect, useState } from "react";
import {
  AddAssignmentButton,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AssignmentItem,
  AssignmentList,
  AssignmentsContainer,
  AssignmentsContent,
  AssignmentsHeader,
} from "../../styles/AssignmentsStyles";
import Sidebar from "./Sidebar";
import { Content } from "../../styles/LibraryStyles";
import axios from "axios";

const TeacherAssignment = () => {
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    grade: "",
    deadline: "",
  });
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/assignments",
      );
      if (response.data && Array.isArray(response.data.teachers)) {
        setAssignments(response.data.assignments || []);
      } else {
        console.log("Error while fetching assignments:", response.data);
      }
    } catch (error) {
      console.error("Error fetching assignments: ", error);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (
      newAssignment.title.trim() !== "" &&
      newAssignment.description.trim() !== "" &&
      newAssignment.grade.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/students",
          newAssignment,
        );
        console.log("Response data", response.data);
        setAssignments([...assignments, response.data.assignment]);
        setNewAssignment({
          title: "",
          description: "",
          subject: "",
          grade: "",
        });
      } catch (error) {
        console.error("Error adding students: ", error);
      }
    }
  };
  return (
    <div>
      <AssignmentsContainer>
        <Sidebar />
        <Content>
          <AssignmentsContent>
            <AssignmentsHeader>Assignments</AssignmentsHeader>
            <AddAssignmentForm onSubmit={handleAddAssignment}>
              <AddAssignmentInput
                type="text"
                value={newAssignment.title}
                onChange={(e) =>
                  setNewAssignment({ ...newAssignment, title: e.target.value })
                }
                placeholder="Enter Assignment title"
              />
              <AddAssignmentTextArea
                value={newAssignment.description}
                onChange={(e) =>
                  setNewAssignment({
                    ...newAssignment,
                    description: e.target.value,
                  })
                }
                placeholder="ENter Assignment"
              />
              <AddAssignmentInput
                placeholder="Enter Assignment Grade"
                type="text"
                value={newAssignment.grade}
                onChange={(e) =>
                  setNewAssignment({ ...newAssignment, grade: e.target.value })
                }
              />
              <AddAssignmentInput
                type="text"
                placeholder="Enter Assignment Deadline"
                value={newAssignment.deadline}
                onChange={(e) =>
                  setNewAssignment({
                    ...newAssignment,
                    deadline: e.target.value,
                  })
                }
              />
              <AddAssignmentButton type="submit">
                Add Assignment
              </AddAssignmentButton>
            </AddAssignmentForm>

            <AssignmentList>
              {assignments.map((assignment) => (
                <AssignmentItem key={assignment.id}>
                  <strong>{assignment.title}: </strong>
                  {assignment.description}, {assignment.grade},{" "}
                  {assignment.deadline}
                </AssignmentItem>
              ))}
            </AssignmentList>
          </AssignmentsContent>
        </Content>
      </AssignmentsContainer>
    </div>
  );
};

export default TeacherAssignment;
