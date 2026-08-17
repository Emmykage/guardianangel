import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Content,
  ExamChartContainer,
  ExamContainer,
  ExamHeader,
  ExamResult,
  ExamResultsContainer,
  ExamSubject,
  SidebarContainer,
} from "../../styles/ExamStyles";
import Sidebar from "./Sidebar";
import { COLORS, FONTS } from "../../app/constants/colors";
import { AnimatePresence, motion } from "framer-motion";
import { TESTS } from "../../app/constants/global";
import StatusPill from "../../components/Status/StatusPill";
import { gradeFor, mmss } from "../../utils";
// import { Bar } from "react-chartjs-2";
// import { Bar } from 'react-chartjs-2'

const StudentTest = () => {
  const [activeTest, setActiveTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [qIndex, setQIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);

  const [testStage, setTestStage] = useState("list"); // list | active | result

  const chartRef = useRef();
  const examResultData = {
    subjects: ["Maths", "Science", "English", "Hisory"],
    results: [89, 67, 76, 85],
  };

  const barChartData = {
    labels: examResultData.subjects,
    datasets: {
      labels: "Exam Results",
      backgroundColor: "#007bff",
      borderColor: "#007bff",
      borderWidth: "1",
      hoverBackgroundColor: "#005663",
      hoverBorderColor: "#00ade",

      data: examResultData.results,
    },
  };

  const chartOptions = {
    scales: {
      y: {
        types: "linear",
        beginAtZero: true,
        max: 100,
      },
    },
  };
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

  function startTest(test) {
    setActiveTest(test);
    setAnswers({});
    setQIndex(0);
    setTimeLeft(test.durationSec);
    setTestStage("active");
  }
  console.log(activeTest);
  return (
    <ExamContainer>
      {/* <SidebarContainer>
        <Sidebar />
      </SidebarContainer> */}
      <Content>
        <ExamHeader>Tests & CBT</ExamHeader>
        <p>Sit available tests and review your CBT scores.</p>
        <ExamResultsContainer>
          <motion.section
            key="tests"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <AnimatePresence mode="wait">
              {testStage === "list" && (
                <motion.div
                  key="tlist"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-3"
                >
                  {TESTS.map((t) => (
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
                          style={{
                            color: COLORS.gold,
                            fontFamily: FONTS.mono,
                          }}
                        >
                          {t.subject}
                        </div>
                        <div className="text-sm font-medium">{t.title}</div>
                        <div
                          className="text-xs mt-0.5"
                          style={{ color: COLORS.slate }}
                        >
                          {t.questions.length} questions ·{" "}
                          {Math.round(t.durationSec / 60)} min
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {t.status === "completed" ? (
                          <span
                            style={{
                              fontFamily: FONTS.mono,
                              color: gradeFor(t.score).color,
                            }}
                            className="text-sm"
                          >
                            {t.score}% · {gradeFor(t.score).code}
                          </span>
                        ) : (
                          <StatusPill status={t.status} />
                        )}
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => startTest(t)}
                          className="text-xs px-4 py-1.5 rounded-full text-white"
                          style={{ background: COLORS.ink }}
                        >
                          {t.status === "completed" ? "Retake" : "Start test"}
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {testStage === "active" && activeTest && (
                <motion.div
                  key="tactive"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-xl p-6"
                  style={{
                    background: "#fff",
                    border: `1px solid ${COLORS.line}`,
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{ color: COLORS.gold, fontFamily: FONTS.mono }}
                      >
                        {activeTest.subject}
                      </div>
                      <div
                        style={{ fontFamily: FONTS.display, fontWeight: 600 }}
                        className="text-lg"
                      >
                        {activeTest.title}
                      </div>
                    </div>
                    <div
                      className="px-3 py-1.5 rounded-full text-sm"
                      style={{
                        fontFamily: FONTS.mono,
                        background:
                          timeLeft <= 30 ? "#F6E6E1" : COLORS.paperDeep,
                        color: timeLeft <= 30 ? COLORS.fail : COLORS.ink,
                      }}
                    >
                      ⏱ {mmss(timeLeft)}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mb-6">
                    {activeTest.questions.map((_, i) => (
                      <div
                        key={i}
                        className="rounded-full"
                        style={{
                          width: 26,
                          height: 4,
                          background:
                            i === qIndex
                              ? COLORS.gold
                              : answers[i] !== undefined
                                ? COLORS.ink
                                : COLORS.line,
                        }}
                      />
                    ))}
                  </div>

                  <div
                    className="text-xs mb-2"
                    style={{ color: COLORS.slate, fontFamily: FONTS.mono }}
                  >
                    Question {qIndex + 1} of {activeTest.questions.length}
                  </div>
                  <div className="text-base font-medium mb-5">
                    {activeTest.questions[qIndex].q}
                  </div>

                  <div className="flex flex-col gap-2 mb-6">
                    {activeTest.questions[qIndex].options.map((opt, i) => {
                      const selected = answers[qIndex] === i;
                      return (
                        <button
                          key={i}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, [qIndex]: i }))
                          }
                          className="text-left px-4 py-3 rounded-lg text-sm flex items-center gap-3"
                          style={{
                            border: `1px solid ${selected ? COLORS.ink : COLORS.line}`,
                            background: selected ? COLORS.paperDeep : "#fff",
                          }}
                        >
                          <span
                            className="rounded-full flex items-center justify-center shrink-0"
                            style={{
                              width: 20,
                              height: 20,
                              border: `1.5px solid ${selected ? COLORS.ink : COLORS.line}`,
                              background: selected ? COLORS.ink : "transparent",
                              color: "#fff",
                              fontSize: 11,
                              fontFamily: FONTS.mono,
                            }}
                          >
                            {selected ? "✓" : ""}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between">
                    <button
                      disabled={qIndex === 0}
                      onClick={() => setQIndex((q) => Math.max(0, q - 1))}
                      className="text-xs px-4 py-2 rounded-full"
                      style={{
                        color: qIndex === 0 ? COLORS.line : COLORS.slate,
                        border: `1px solid ${COLORS.line}`,
                      }}
                    >
                      ← Previous
                    </button>
                    {qIndex < activeTest.questions.length - 1 ? (
                      <button
                        onClick={() => setQIndex((q) => q + 1)}
                        className="text-xs px-4 py-2 rounded-full text-white"
                        style={{ background: COLORS.ink }}
                      >
                        Next →
                      </button>
                    ) : (
                      <button
                        onClick={finishTest}
                        className="text-xs px-4 py-2 rounded-full text-white"
                        style={{ background: COLORS.gold }}
                      >
                        Submit test
                      </button>
                    )}
                  </div>
                </motion.div>
              )}

              {testStage === "result" && activeTest && testResult && (
                <motion.div
                  key="tresult"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-xl p-6 flex flex-col items-center text-center"
                  style={{
                    background: "#fff",
                    border: `1px solid ${COLORS.line}`,
                  }}
                >
                  <SectionLabel>Test Complete</SectionLabel>
                  <SealBadge
                    score={testResult.pct}
                    grade={testResult.grade}
                    seed={`${activeTest.id}-result`}
                  />
                  <div
                    style={{ fontFamily: FONTS.display, fontWeight: 600 }}
                    className="text-xl mt-4"
                  >
                    {activeTest.title}
                  </div>
                  <div className="text-sm mt-1" style={{ color: COLORS.slate }}>
                    {testResult.correct} of {testResult.total} correct ·{" "}
                    {testResult.grade.label}
                  </div>
                  <button
                    onClick={() => setTestStage("list")}
                    className="mt-6 text-xs px-4 py-2 rounded-full text-white"
                    style={{ background: COLORS.ink }}
                  >
                    Back to tests
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>

          {/* <ExamChartContainer>
            <Bar ref={chartRef} data={barChartData} options={chartOptions} />
          </ExamChartContainer>  */}
        </ExamResultsContainer>
      </Content>
    </ExamContainer>
  );
};

export default StudentTest;
