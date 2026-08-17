import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS, FONTS } from "../../app/constants/colors";
import {
  ASSIGNMENTS,
  CURRENT_STUDENT,
  RECORDINGS,
  SUBJECTS_BY_TRACK,
  TERMS,
  TESTS,
  TODAY_SCHEDULE,
} from "../../app/constants/global";
import { gradeFor, mmss, scoreFor } from "../../utils";
import NavIcon from "../../components/NavIcon/NavIcon";
import SectionLabel from "../../components/sectionLabel/SectionLabel";
import StatusPill from "../../components/Status/StatusPill";
import SealBadge from "../../components/sealBadge/SealBadge";
import { useNavigate } from "react-router-dom";

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */
export default function ClassDetails() {
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
  const naigator = useNavigate()

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

  useEffect(() => {
    if (testStage !== "active") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setTestStage("result");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [testStage]);

  const testResult = useMemo(() => {
    if (!activeTest) return null;
    let correct = 0;
    activeTest.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct += 1;
    });
    const pct = Math.round((correct / activeTest.questions.length) * 100);
    return {
      correct,
      total: activeTest.questions.length,
      pct,
      grade: gradeFor(pct),
    };
  }, [activeTest, answers, testStage]);

  const navItems = [
    { id: "home", label: "Home", icon: "home" },
    { id: "results", label: "Results", icon: "results" },
    {
      id: "assignments",
      label: "Assignments",
      icon: "assignments",
      badge: pendingCount,
    },
    { id: "classes", label: "Online Classes", icon: "classes" },
    { id: "tests", label: "Tests", icon: "tests", badge: availableTestsCount },
  ];

  return (
    <div
      className="w-full min-h-screen flex"
      style={{
        background: COLORS.paper,
        fontFamily: FONTS.body,
        color: COLORS.ink,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: ${COLORS.goldSoft}; }
      `}</style>

   

      {/* Main */}
      <main className="flex-1 min-h-screen px-5 md:px-10 py-7 max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1
              style={{ fontFamily: FONTS.display, fontWeight: 600 }}
              className="text-2xl md:text-3xl"
            >
                Welcome back, {CURRENT_STUDENT.name.split(" ")[0]}
             
            </h1>
            <p className="text-sm mt-1" style={{ color: COLORS.slate }}>
             
                Here's what's happening across your classes today
              
            </p>
          </div>
        

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
                    onClick={() => navigator(`student/classes/${t.id}`)}
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
        </div>

        <AnimatePresence mode="wait">
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Term Average", value: `${results.avg}%` },
                  { label: "Assignments Due", value: pendingCount },
                  { label: "Tests Available", value: availableTestsCount },
                  {
                    label: "Next Class",
                    value: nextClass ? nextClass.subject : "None today",
                  },
                ].map((kpi, i) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="rounded-xl p-4"
                    style={{
                      background: "#fff",
                      border: `1px solid ${COLORS.line}`,
                    }}
                  >
                    <div
                      className="text-xs mb-2"
                      style={{ color: COLORS.slate }}
                    >
                      {kpi.label}
                    </div>
                    <div
                      style={{ fontFamily: FONTS.display, fontWeight: 600 }}
                      className="text-2xl"
                    >
                      {kpi.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "#fff",
                    border: `1px solid ${COLORS.line}`,
                  }}
                >
                  <SectionLabel>Today's Timetable</SectionLabel>
                  <div
                    className="flex flex-col divide-y"
                    style={{ borderColor: COLORS.line }}
                  >
                    {TODAY_SCHEDULE.map((c) => (
                      <div
                        key={c.id}
                        className="flex items-center justify-between py-3"
                      >
                        <div>
                          <div className="text-sm font-medium">{c.subject}</div>
                          <div
                            className="text-xs"
                            style={{ color: COLORS.slate }}
                          >
                            {c.teacher} · {c.time}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <StatusPill status={c.status} />
                          {c.status === "live" && (
                            <button
                              onClick={() => naigator(`student/classes/${c.id}`)}
                              className="text-xs px-3 py-1.5 rounded-full text-white"
                              style={{ background: COLORS.live }}
                            >
                              Join
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "#fff",
                    border: `1px solid ${COLORS.line}`,
                  }}
                >
                  <SectionLabel>Recent Grades</SectionLabel>
                  <div
                    className="flex flex-col divide-y"
                    style={{ borderColor: COLORS.line }}
                  >
                    {localAssignments
                      .filter((a) => a.status === "graded")
                      .map((a) => {
                        const g = gradeFor(a.score);
                        return (
                          <div
                            key={a.id}
                            className="flex items-center justify-between py-3"
                          >
                            <div>
                              <div className="text-sm font-medium">
                                {a.title}
                              </div>
                              <div
                                className="text-xs"
                                style={{ color: COLORS.slate }}
                              >
                                {a.subject}
                              </div>
                            </div>
                            <span
                              style={{ fontFamily: FONTS.mono, color: g.color }}
                              className="text-sm"
                            >
                              {a.score}% · {g.code}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </motion.section>

        </AnimatePresence>
      </main>
    </div>
  );
}
