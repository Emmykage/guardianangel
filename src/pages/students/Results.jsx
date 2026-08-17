// CheckPerformanceSection.js
import React, { useMemo, useRef, useState } from "react";
import Sidebar from "../teachers/Sidebar";
import { motion, AnimatePresence } from "framer-motion";

import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance,
} from "../../styles/PerformanceStyles";
import {
  ASSIGNMENTS,
  CURRENT_STUDENT,
  ROSTERS,
  SUBJECTS_BY_TRACK,
  TEACHER_CLASSES,
  TERMS,
  TESTS,
  TODAY_SCHEDULE,
} from "../../app/constants/global";
import { COLORS, FONTS } from "../../app/constants/colors";
import { gradeFor, scoreFor } from "../../utils";
import SectionLabel from "../../components/sectionLabel/SectionLabel";
import StatusPill from "../../components/Status/StatusPill";
import SealBadge from "../../components/sealBadge/SealBadge";

const Results = () => {
  const [resultsClassId, setResultsClassId] = useState(TEACHER_CLASSES[0].id);
  const resultsClass = TEACHER_CLASSES.find((c) => c.id === resultsClassId);
  const [resultsTerm, setResultsTerm] = useState("first");
  const [scores, setScores] = useState({}); // { studentId: score }

  const [view, setView] = useState("home");
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

  const subjects = SUBJECTS_BY_TRACK[CURRENT_STUDENT.track];
  const results = useMemo(() => {
    const scores = subjects.map((subj) => ({
      subject: subj,
      score: scoreFor(CURRENT_STUDENT.id, subj, term, CURRENT_STUDENT.baseline),
    }));
    const avg = Math.round(
      scores.reduce((a, b) => a + b.score, 0) / scores.length,
    );
    return { scores, avg, grade: gradeFor(avg) };
  }, [term]);

  const pendingCount = localAssignments.filter(
    (a) => a.status === "pending",
  ).length;
  const nextClass =
    TODAY_SCHEDULE.find((c) => c.status === "live") ||
    TODAY_SCHEDULE.find((c) => c.status === "upcoming");
  const availableTestsCount = TESTS.filter(
    (t) => t.status === "available",
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

  function startTest(test) {
    setActiveTest(test);
    setAnswers({});
    setQIndex(0);
    setTimeLeft(test.durationSec);
    setTestStage("active");
  }

  function finishTest() {
    clearInterval(timerRef.current);
    setTestStage("result");
  }

  // Sample data for school performance
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100,
  };

  // Sample data for individual student performance
  const individualPerformanceData = [
    { id: 1, name: "John Doe", score: 90 },
    { id: 2, name: "Jane Smith", score: 85 },
    { id: 3, name: "Michael Johnson", score: 92 },
  ];
  function saveResults() {
    const cls = TEACHER_CLASSES.find((c) => c.id === resultsClassId);
    fireToast(`Results saved for ${cls.name} — ${cls.subject}`);
  }
  const roster = ROSTERS[resultsClassId] || [];

  return (
    <PerformanceContainer>
      <Content>
        <PerformanceContent>
          <h1 className="text-2xl md:text-3xl">Add Results</h1>
          <p className="text-sm mt-1">
            Enter subject scores for a class and save them to the ledger.
          </p>{" "}
             <div
                        className="flex rounded-full p-1"
                        style={{
                          background: COLORS.paperDeep,
                          border: `1px solid ${COLORS.line}`,
                        }}
                      >
                        {TERMS.map((t) => {
                          const active = term === t.id;
                          return (
                            <button
                              key={t.id}
                              onClick={() => setTerm(t.id)}
                              className="relative px-4 py-1.5 text-xs rounded-full"
                              style={{
                                fontFamily: FONTS.mono,
                                color: active ? "#fff" : COLORS.slate,
                              }}
                            >
                              {active && (
                                <motion.div
                                  layoutId="term-pill"
                                  className="absolute inset-0 rounded-full"
                                  style={{ background: COLORS.ink }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 32,
                                  }}
                                />
                              )}
                              <span className="relative z-10">{t.label}</span>
                            </button>
                          );
                        })}
                      </div>
          <IndividualPerformance>
            <div
              className="flex rounded-full p-1"
              style={{
                background: COLORS.paperDeep,
                border: `1px solid ${COLORS.line}`,
              }}
            >
              {TERMS.map((t) => {
                const active = term === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTerm(t.id)}
                    className="relative px-4 py-1.5 text-xs rounded-full"
                    style={{
                      fontFamily: FONTS.mono,
                      color: active ? "#fff" : COLORS.slate,
                    }}
                  >
                    {active && (
                      <motion.div
                        layoutId="term-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: COLORS.ink }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{t.label}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.section
                key="results"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl p-6"
                style={{
                  background: "#fff",
                  border: `1px solid ${COLORS.line}`,
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
                  <div>
                    <div
                      className="text-xs mb-1"
                      style={{ color: COLORS.slate, fontFamily: FONTS.mono }}
                    >
                      {CURRENT_STUDENT.admission} · {CURRENT_STUDENT.className}
                    </div>
                    <h2
                      style={{ fontFamily: FONTS.display, fontWeight: 600 }}
                      className="text-2xl"
                    >
                      {CURRENT_STUDENT.name}
                    </h2>
                    <p className="text-sm mt-1" style={{ color: COLORS.slate }}>
                      {TERMS.find((t) => t.id === term)?.label}, Session
                      2025/2026
                    </p>
                  </div>
                  <SealBadge
                    score={results.avg}
                    grade={results.grade}
                    seed={term}
                  />
                </div>

                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: `1px solid ${COLORS.line}` }}
                >
                  <div
                    className="grid grid-cols-[1fr_80px_100px_90px] px-4 py-2 text-xs"
                    style={{
                      background: COLORS.paperDeep,
                      color: COLORS.slate,
                      fontFamily: FONTS.mono,
                    }}
                  >
                    <span>Subject</span>
                    <span className="text-right">Score</span>
                    <span className="text-right">Grade</span>
                    <span className="text-right">Remark</span>
                  </div>
                  {results.scores.map((row, i) => {
                    const g = gradeFor(row.score);
                    return (
                      <div
                        key={row.subject}
                        className="grid grid-cols-[1fr_80px_100px_90px] px-4 py-3 text-sm items-center"
                        style={{
                          borderTop: `1px solid ${COLORS.line}`,
                          background: i % 2 ? COLORS.paper : "#fff",
                        }}
                      >
                        <span>{row.subject}</span>
                        <span
                          className="text-right"
                          style={{ fontFamily: FONTS.mono }}
                        >
                          {row.score}
                        </span>
                        <span
                          className="text-right"
                          style={{ fontFamily: FONTS.mono, color: g.color }}
                        >
                          {g.code}
                        </span>
                        <span
                          className="text-right text-xs"
                          style={{ color: COLORS.slate }}
                        >
                          {g.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            </AnimatePresence>
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );
};

export default Results;
