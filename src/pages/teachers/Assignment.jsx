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
import { COLORS, FONTS } from "../../app/constants/colors";
import {
  INITIAL_ASSIGNMENTS,
  TEACHER_CLASSES,
} from "../../app/constants/global";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "../../components/progressBar/ProgressBar";

const TeacherAssignment = () => {
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    grade: "",
    deadline: "",
  });
  /* ---- Assignments state ---- */
  const [assignments, setAssignments] = useState(INITIAL_ASSIGNMENTS);
  const [showAssignmentForm, setShowAssignmentForm] = useState(false);
  const [draftAssignment, setDraftAssignment] = useState({
    classId: TEACHER_CLASSES[0].id,
    title: "",
    due: "",
    instructions: "",
  });

  function postAssignment() {
    if (!draftAssignment.title.trim()) return;
    const cls = TEACHER_CLASSES.find((c) => c.id === draftAssignment.classId);
    const total = ROSTERS[draftAssignment.classId]?.length
      ? ROSTERS[draftAssignment.classId].length * 5
      : 27; // roster mock scaled to full class size
    setAssignments((prev) => [
      {
        id: `a${prev.length + 1}`,
        classId: draftAssignment.classId,
        title: draftAssignment.title,
        due: draftAssignment.due || "Due date not set",
        submitted: 0,
        total,
      },
      ...prev,
    ]);
    fireToast(`Assignment posted to ${cls.name}`);
    setDraftAssignment({
      classId: TEACHER_CLASSES[0].id,
      title: "",
      due: "",
      instructions: "",
    });
    setShowAssignmentForm(false);
  }

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
        <Content>
          <h1
            style={{ fontFamily: FONTS.display, fontWeight: 600 }}
            className="text-2xl md:text-3xl"
          >
            Assignments
          </h1>

          <p className="text-sm mt-1" style={{ color: COLORS.slate }}>
            Post new work and track submissions across your classes
          </p>

          <motion.section
            key="assignments"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex justify-end mb-4">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowAssignmentForm((v) => !v)}
                className="text-sm px-4 py-2 rounded-full text-white"
                style={{ background: COLORS.ink }}
              >
                {showAssignmentForm ? "Close" : "+ New assignment"}
              </motion.button>
            </div>

            <AnimatePresence initial={false}>
              {showAssignmentForm && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mb-4 overflow-hidden"
                >
                  <div
                    className="rounded-xl p-5 flex flex-col gap-3"
                    style={{
                      background: "#fff",
                      border: `1px solid ${COLORS.line}`,
                    }}
                  >
                    <div className="flex gap-3 flex-wrap">
                      <select
                        value={draftAssignment.classId}
                        onChange={(e) =>
                          setDraftAssignment((p) => ({
                            ...p,
                            classId: e.target.value,
                          }))
                        }
                        className="text-sm px-3 py-2 rounded-lg outline-none"
                        style={{
                          border: `1px solid ${COLORS.line}`,
                          background: COLORS.paper,
                        }}
                      >
                        {TEACHER_CLASSES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                      <input
                        value={draftAssignment.due}
                        onChange={(e) =>
                          setDraftAssignment((p) => ({
                            ...p,
                            due: e.target.value,
                          }))
                        }
                        placeholder="Due date, e.g. Friday, 4:00 PM"
                        className="text-sm px-3 py-2 rounded-lg outline-none flex-1 min-w-[200px]"
                        style={{ border: `1px solid ${COLORS.line}` }}
                      />
                    </div>
                    <input
                      value={draftAssignment.title}
                      onChange={(e) =>
                        setDraftAssignment((p) => ({
                          ...p,
                          title: e.target.value,
                        }))
                      }
                      placeholder="Assignment title"
                      className="text-sm px-3 py-2 rounded-lg outline-none"
                      style={{ border: `1px solid ${COLORS.line}` }}
                    />
                    <textarea
                      value={draftAssignment.instructions}
                      onChange={(e) =>
                        setDraftAssignment((p) => ({
                          ...p,
                          instructions: e.target.value,
                        }))
                      }
                      placeholder="Instructions for students…"
                      rows={3}
                      className="text-sm px-3 py-2 rounded-lg outline-none resize-none"
                      style={{ border: `1px solid ${COLORS.line}` }}
                    />
                    <div className="flex justify-end">
                      <button
                        onClick={postAssignment}
                        className="text-xs px-4 py-2 rounded-full text-white"
                        style={{ background: COLORS.gold }}
                      >
                        Post assignment
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-3">
              {assignments.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between px-5 py-4 rounded-xl"
                  style={{
                    background: "#fff",
                    border: `1px solid ${COLORS.line}`,
                  }}
                >
                  <div>
                    <div
                      className="text-xs mb-1"
                      style={{ color: COLORS.gold, fontFamily: FONTS.mono }}
                    >
                      {TEACHER_CLASSES.find((c) => c.id === a.classId)?.name}
                    </div>
                    <div className="text-sm font-medium">{a.title}</div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: COLORS.slate }}
                    >
                      {a.due}
                    </div>
                  </div>
                  <ProgressBar value={a.submitted} total={a.total} />
                </div>
              ))}
            </div>
          </motion.section>
        </Content>
      </AssignmentsContainer>
    </div>
  );
};

export default TeacherAssignment;
