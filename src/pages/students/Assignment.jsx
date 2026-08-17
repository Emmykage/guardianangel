import React, { useEffect, useRef, useState } from "react";
import {
  AddAssignmentForm,
  AssignmentButton,
  AssignmentCard,
  AssignmentDescription,
  AssignmentDoneMessage,
  AssignmentsContainer,
  AssignmentTitle,
  Content,
  SidebarContainer,
} from "../../styles/AssignmentsStyles";
import Sidebar from "./Sidebar";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { COLORS, FONTS } from "../../app/constants/colors";
import { gradeFor } from "../../utils";
import StatusPill from "../../components/Status/StatusPill";
import { ASSIGNMENTS, SUBJECTS_BY_TRACK } from "../../app/constants/global";

const StudentAssignment = () => {
  const [assignments, setAssignments] = useState([]);

  const [term, setTerm] = useState("first");
  const [assignmentFilter, setAssignmentFilter] = useState("all");
  const [openAssignmentId, setOpenAssignmentId] = useState(null);
  const [submissionText, setSubmissionText] = useState("");
  const [localAssignments, setLocalAssignments] = useState(ASSIGNMENTS);

  // Test-taking flow
  const [testStage, setTestStage] = useState("list"); // list | active | result
  const [activeTest, setActiveTest] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);

  const pendingCount = localAssignments.filter(
    (a) => a.status === "pending",
  ).length;

  const filteredAssignments = localAssignments.filter(
    (a) => assignmentFilter === "all" || a.status === assignmentFilter,
  );

  function submitAssignment(id) {
    setLocalAssignments((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: "submitted", due: "Submitted just now" }
          : a,
      ),
    );
    setOpenAssignmentId(null);
    setSubmissionText("");
  }

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

  const handleDoAssignment = (id) => {
    // Implement your logic for handling assignment submission
  };

  return (
    <AssignmentsContainer>
      <SidebarContainer>{/* <Sidebar /> */}</SidebarContainer>
      <Content>
        <h2>Assignment</h2>
        Track what's due, submitted and graded
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment._id}>
            <AssignmentTitle>{assignment.title}</AssignmentTitle>
            <AssignmentDescription>
              {assignment.description}
            </AssignmentDescription>
            {!assignment.done ? (
              <AssignmentForm
                onDoAssignment={() => handleDoAssignment(assignment._id)}
              />
            ) : (
              <AssignmentDoneMessage>Assignment is Done</AssignmentDoneMessage>
            )}
          </AssignmentCard>
        ))}
        {/* ------------------------- ASSIGNMENTS ------------------------- */}
        <motion.section
          key="assignments"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex gap-2 mb-5">
            {["all", "pending", "submitted", "graded"].map((f) => (
              <button
                key={f}
                onClick={() => setAssignmentFilter(f)}
                className="text-xs px-3 py-1.5 rounded-full capitalize"
                style={{
                  background: assignmentFilter === f ? COLORS.ink : "#fff",
                  color: assignmentFilter === f ? "#fff" : COLORS.slate,
                  border: `1px solid ${assignmentFilter === f ? COLORS.ink : COLORS.line}`,
                  fontFamily: FONTS.mono,
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {filteredAssignments.map((a) => {
              const isOpen = openAssignmentId === a.id;
              return (
                <div
                  key={a.id}
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: "#fff",
                    border: `1px solid ${COLORS.line}`,
                  }}
                >
                  <button
                    onClick={() =>
                      a.status === "pending" &&
                      setOpenAssignmentId(isOpen ? null : a.id)
                    }
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{ color: COLORS.gold, fontFamily: FONTS.mono }}
                      >
                        {a.subject}
                      </div>
                      <div className="text-sm font-medium">{a.title}</div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: COLORS.slate }}
                      >
                        {a.due} · {a.teacher}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {a.status === "graded" && (
                        <span
                          style={{
                            fontFamily: FONTS.mono,
                            color: gradeFor(a.score).color,
                          }}
                          className="text-sm"
                        >
                          {a.score}%
                        </span>
                      )}
                      <StatusPill status={a.status} />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{
                          overflow: "hidden",
                          borderTop: `1px solid ${COLORS.line}`,
                        }}
                      >
                        <div className="px-5 py-4">
                          <textarea
                            value={submissionText}
                            onChange={(e) => setSubmissionText(e.target.value)}
                            placeholder="Type your answer, or paste a link to your uploaded work…"
                            className="w-full text-sm px-3 py-2 rounded-lg outline-none resize-none"
                            rows={3}
                            style={{
                              background: COLORS.paper,
                              border: `1px solid ${COLORS.line}`,
                            }}
                          />
                          <div className="flex justify-end gap-2 mt-3">
                            <button
                              onClick={() => setOpenAssignmentId(null)}
                              className="text-xs px-3 py-1.5 rounded-full"
                              style={{ color: COLORS.slate }}
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => submitAssignment(a.id)}
                              className="text-xs px-4 py-1.5 rounded-full text-white"
                              style={{ background: COLORS.ink }}
                            >
                              Submit assignment
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            {filteredAssignments.length === 0 && (
              <div
                className="text-sm py-10 text-center"
                style={{ color: COLORS.slate }}
              >
                No assignments in this category.
              </div>
            )}
          </div>
        </motion.section>
      </Content>
    </AssignmentsContainer>
  );
};

const AssignmentForm = ({ onDoAssignment }) => {
  const [opinion, setOpinion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (opinion.trim !== "") {
      onDoAssignment();
    } else {
      alert("PLease provide opinion");
    }
  };
  const handleInputChange = (e) => {
    setOpinion(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={opinion}
        onChange={handleInputChange}
        placeholder="Enter your opinion/assignment..."
      />
      <AssignmentButton type="submit">Submit</AssignmentButton>
    </form>
  );
};

export default StudentAssignment;
