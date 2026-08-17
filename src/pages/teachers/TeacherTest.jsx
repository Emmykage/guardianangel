import React, { useEffect, useState } from "react";
import {
  TeacherList,
  TeachersContainer,
  Content,
  TeachersHeader,
  TeachersContent,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
  TeacherItem,
} from "../../styles/TeachersStyles";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  INITIAL_ASSIGNMENTS,
  INITIAL_SCHEDULE,
  INITIAL_TESTS,
  ROSTERS,
  TEACHER_CLASSES,
} from "../../app/constants/global";
import { AnimatePresence, motion } from "framer-motion";
import { COLORS, FONTS } from "../../app/constants/colors";
import ProgressBar from "../../components/progressBar/ProgressBar";

const TeacherTest = () => {
  const [assignments, setAssignments] = useState(INITIAL_ASSIGNMENTS);
  const [schedule, setSchedule] = useState(INITIAL_SCHEDULE);
  const [resultsClassId, setResultsClassId] = useState(TEACHER_CLASSES[0].id);

  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetchStudents();
  }, []);

  const emptyQuestion = () => ({ q: "", options: ["", "", "", ""], answer: 0 });

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/teachers");
      if (response.data && Array.isArray(response.data.teachers)) {
        setTeachers(response.data.teachers || []);
      } else {
        console.log("Error while fetching teachers:", response.data);
      }
    } catch (error) {
      console.error("Error fetching teachers: ", error);
    }
  };

  const handleAddTeacherss = async (e) => {
    e.preventDefault();
    if (
      newTeacher.name.trim() !== "" &&
      newTeacher.email.trim() !== "" &&
      newTeacher.grade.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/students",
          newTeacher,
        );
        console.log("Response data", response.data);
        setTeachers([...teachers, response.data.teachers]);
        setNewTeacher({ name: "", email: "", subject: "" });
      } catch (error) {
        console.error("Error adding students: ", error);
      }
    }
  };

  /* ---- Tests state ---- */
  const [tests, setTests] = useState(INITIAL_TESTS);
  const [showTestBuilder, setShowTestBuilder] = useState(false);
  const [draftTest, setDraftTest] = useState({
    classId: TEACHER_CLASSES[0].id,
    title: "",
    durationMin: 10,
    questions: [emptyQuestion()],
  });

  function updateQuestion(i, field, value) {
    setDraftTest((prev) => {
      const questions = [...prev.questions];
      questions[i] = { ...questions[i], [field]: value };
      return { ...prev, questions };
    });
  }
  function updateOption(i, oi, value) {
    setDraftTest((prev) => {
      const questions = [...prev.questions];
      const options = [...questions[i].options];
      options[oi] = value;
      questions[i] = { ...questions[i], options };
      return { ...prev, questions };
    });
  }
  function addQuestion() {
    setDraftTest((prev) => ({
      ...prev,
      questions: [...prev.questions, emptyQuestion()],
    }));
  }
  function removeQuestion(i) {
    setDraftTest((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, idx) => idx !== i),
    }));
  }
  function publishTest() {
    if (!draftTest.title.trim() || draftTest.questions.length === 0) return;
    const cls = TEACHER_CLASSES.find((c) => c.id === draftTest.classId);
    setTests((prev) => [
      {
        id: `t${prev.length + 1}`,
        classId: draftTest.classId,
        title: draftTest.title,
        questions: draftTest.questions.length,
        durationMin: draftTest.durationMin,
        completed: 0,
        total: (ROSTERS[draftTest.classId] || []).length * 5,
        avgScore: null,
      },
      ...prev,
    ]);
    fireToast(`Test published to ${cls.name}`);
    setDraftTest({
      classId: TEACHER_CLASSES[0].id,
      title: "",
      durationMin: 10,
      questions: [emptyQuestion()],
    });
    setShowTestBuilder(false);
  }

  const totalStudents = Object.values(ROSTERS).reduce(
    (a, r) => a + r.length * 5,
    0,
  );
  const pendingGrading = assignments.reduce(
    (a, x) => a + Math.max(0, x.submitted - Math.round(x.submitted * 0.4)),
    0,
  );
  const liveNow = schedule.find((c) => c.status === "live");
  const roster = ROSTERS[resultsClassId] || [];
  const resultsClass = TEACHER_CLASSES.find((c) => c.id === resultsClassId);

  const navItems = [
    { id: "home", label: "Home", icon: "home" },
    { id: "results", label: "Add Results", icon: "results" },
    { id: "assignments", label: "Assignments", icon: "assignments" },
    { id: "classes", label: "Online Classes", icon: "classes" },
    { id: "tests", label: "Tests", icon: "tests" },
  ];
  return (
    <div>
      <TeachersContainer>
        <Content>
          <TeachersContent>
            <TeachersHeader>
              <AddTeacherForm onSubmit={handleAddTeacherss}>
                <AddTeacherInput
                  type="text"
                  placeholder="Enter Teacher Name"
                  value={newTeacher.name}
                  onChange={(e) =>
                    setNewTeacher({ ...newTeacher, name: e.target.value })
                  }
                />
                <AddTeacherInput
                  type="text"
                  placeholder="Enter Teacher Email"
                  value={newTeacher.email}
                  onChange={(e) =>
                    setNewTeacher({ ...newTeacher, email: e.target.value })
                  }
                />
                <AddTeacherInput
                  type="text"
                  placeholder="Enter Teacher Subject"
                  value={newTeacher.subject}
                  onChange={(e) =>
                    setNewTeacher({ ...newTeacher, subject: e.target.value })
                  }
                />
                <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
              </AddTeacherForm>
              <TeacherList>
                {teachers.map((teacher, index) => (
                  <TeacherItem key={index}>
                    {teacher.name} - {teacher.email} -{teacher.subject}
                  </TeacherItem>
                ))}
              </TeacherList>
            </TeachersHeader>
          </TeachersContent>
          Tests Build a CBT-style test and monitor completion.
          <motion.section
            key="tests"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex justify-end mb-4">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowTestBuilder((v) => !v)}
                className="text-sm px-4 py-2 rounded-full text-white"
                style={{ background: COLORS.ink }}
              >
                {showTestBuilder ? "Close" : "+ Create test"}
              </motion.button>
            </div>

            <AnimatePresence initial={false}>
              {showTestBuilder && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mb-5 overflow-hidden"
                >
                  <div
                    className="rounded-xl p-5 flex flex-col gap-4"
                    style={{
                      background: "#fff",
                      border: `1px solid ${COLORS.line}`,
                    }}
                  >
                    <div className="flex gap-3 flex-wrap">
                      <select
                        value={draftTest.classId}
                        onChange={(e) =>
                          setDraftTest((p) => ({
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
                        value={draftTest.title}
                        onChange={(e) =>
                          setDraftTest((p) => ({
                            ...p,
                            title: e.target.value,
                          }))
                        }
                        placeholder="Test title"
                        className="text-sm px-3 py-2 rounded-lg outline-none flex-1 min-w-[200px]"
                        style={{ border: `1px solid ${COLORS.line}` }}
                      />
                      <input
                        type="number"
                        min={1}
                        value={draftTest.durationMin}
                        onChange={(e) =>
                          setDraftTest((p) => ({
                            ...p,
                            durationMin: Number(e.target.value),
                          }))
                        }
                        className="text-sm px-3 py-2 rounded-lg outline-none w-28"
                        style={{
                          border: `1px solid ${COLORS.line}`,
                          fontFamily: FONTS.mono,
                        }}
                      />
                      <span
                        className="text-xs self-center"
                        style={{ color: COLORS.slate }}
                      >
                        minutes
                      </span>
                    </div>

                    <div className="flex flex-col gap-4">
                      {draftTest.questions.map((q, i) => (
                        <div
                          key={i}
                          className="rounded-lg p-4"
                          style={{
                            background: COLORS.paper,
                            border: `1px solid ${COLORS.line}`,
                          }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className="text-xs"
                              style={{
                                color: COLORS.slate,
                                fontFamily: FONTS.mono,
                              }}
                            >
                              Question {i + 1}
                            </span>
                            {draftTest.questions.length > 1 && (
                              <button
                                onClick={() => removeQuestion(i)}
                                className="text-xs"
                                style={{ color: COLORS.fail }}
                              >
                                Remove
                              </button>
                            )}
                          </div>
                          <input
                            value={q.q}
                            onChange={(e) =>
                              updateQuestion(i, "q", e.target.value)
                            }
                            placeholder="Question text"
                            className="w-full text-sm px-3 py-2 rounded-lg outline-none mb-2"
                            style={{ border: `1px solid ${COLORS.line}` }}
                          />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, oi) => (
                              <label
                                key={oi}
                                className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg"
                                style={{
                                  border: `1px solid ${q.answer === oi ? COLORS.ink : COLORS.line}`,
                                  background: "#fff",
                                }}
                              >
                                <input
                                  type="radio"
                                  name={`correct-${i}`}
                                  checked={q.answer === oi}
                                  onChange={() =>
                                    updateQuestion(i, "answer", oi)
                                  }
                                />
                                <input
                                  value={opt}
                                  onChange={(e) =>
                                    updateOption(i, oi, e.target.value)
                                  }
                                  placeholder={`Option ${oi + 1}`}
                                  className="text-sm outline-none flex-1"
                                />
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        onClick={addQuestion}
                        className="text-xs px-3 py-1.5 rounded-full"
                        style={{
                          border: `1px solid ${COLORS.line}`,
                          color: COLORS.slate,
                        }}
                      >
                        + Add question
                      </button>
                      <button
                        onClick={publishTest}
                        className="text-xs px-4 py-2 rounded-full text-white"
                        style={{ background: COLORS.gold }}
                      >
                        Publish test
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-3">
              {tests.map((t) => (
                <div
                  key={t.id}
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
                      {TEACHER_CLASSES.find((c) => c.id === t.classId)?.name}
                    </div>
                    <div className="text-sm font-medium">{t.title}</div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: COLORS.slate }}
                    >
                      {t.questions} questions · {t.durationMin} min
                      {t.avgScore != null ? ` · avg ${t.avgScore}%` : ""}
                    </div>
                  </div>
                  <ProgressBar value={t.completed} total={t.total} />
                </div>
              ))}
            </div>
          </motion.section>
        </Content>
      </TeachersContainer>
    </div>
  );
};

export default TeacherTest;
