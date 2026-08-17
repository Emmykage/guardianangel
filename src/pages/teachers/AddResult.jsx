// CheckPerformanceSection.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { motion, AnimatePresence } from "framer-motion";

import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance,
} from "../../styles/PerformanceStyles";
import { ROSTERS, TEACHER_CLASSES, TERMS } from "../../app/constants/global";
import { COLORS } from "../../app/constants/colors";

const AddResult = () => {
  const [resultsClassId, setResultsClassId] = useState(TEACHER_CLASSES[0].id);
  const resultsClass = TEACHER_CLASSES.find((c) => c.id === resultsClassId);
  const [resultsTerm, setResultsTerm] = useState("first");
  const [scores, setScores] = useState({}); // { studentId: score }

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
          <IndividualPerformance>
            <motion.section
              key="results"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl p-6 border-[#D9DCD6] bg-white"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap gap-3">
                  <select
                    value={resultsClassId}
                    onChange={(e) => setResultsClassId(e.target.value)}
                    className="text-sm px-3 py-2 rounded-lg outline-none bg-paper border-line "
                  >
                    {TEACHER_CLASSES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={resultsTerm}
                    onChange={(e) => setResultsTerm(e.target.value)}
                    className="text-sm px-3 py-2 rounded-lg outline-none bg-paper borderline"
                  >
                    {TERMS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  <span className="text-sm px-3 py-2 rounded-lg text-slate-50 bg-paper-deep">
                    {resultsClass.subject}
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={saveResults}
                  className="text-sm px-5 py-2 rounded-full text-ink  text-white"
                >
                  Save results
                </motion.button>
              </div>{" "}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap gap-3">
                  <select
                    value={resultsClassId}
                    onChange={(e) => setResultsClassId(e.target.value)}
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
                  <select
                    value={resultsTerm}
                    onChange={(e) => setResultsTerm(e.target.value)}
                    className="text-sm px-3 py-2 rounded-lg outline-none"
                    style={{
                      border: `1px solid ${COLORS.line}`,
                      background: COLORS.paper,
                    }}
                  >
                    {TERMS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  <span
                    className="text-sm px-3 py-2 rounded-lg"
                    style={{
                      background: COLORS.paperDeep,
                      color: COLORS.slate,
                    }}
                  >
                    {resultsClass.subject}
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={saveResults}
                  className="text-sm px-5 py-2 rounded-full text-white"
                  style={{ background: COLORS.ink }}
                >
                  Save results
                </motion.button>
              </div>
              <div className="rounded-lg overflow-hidden border-line">
                <div className="grid grid-cols-[1fr_110px_90px] text-slate bg-paper-deep px-4 py-2 text-xs">
                  <span>Student</span>
                  <span className="text-right">Score /100</span>
                  <span className="text-right">Grade</span>
                </div>
                {roster.map((s, i) => {
                  const val = scores[s.id];
                  const g =
                    val !== undefined && val !== ""
                      ? gradeFor(Number(val))
                      : null;
                  return (
                    <div
                      key={s.id}
                      className="grid grid-cols-[1fr_110px_90px] border-t-line px-4 py-3 text-sm items-center"
                      style={{
                        borderTop: `1px solid ${COLORS.line}`,
                        background: i % 2 ? COLORS.paper : "#fff",
                      }}
                    >
                      <div>
                        <div>{s.name}</div>
                        <div
                          className="text-xs"
                          style={{
                            color: COLORS.slate,
                          }}
                        >
                          {s.admission}
                        </div>
                      </div>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={val ?? ""}
                        onChange={(e) => setScore(s.id, e.target.value)}
                        placeholder="—"
                        className="text-right text-sm px-2 py-1 rounded-lg outline-none justify-self-end w-20"
                        style={{
                          border: `1px solid ${COLORS.line}`,
                        }}
                      />
                      <span
                        className={"text-right"}
                        style={{
                          color: g ? g.color : COLORS.slate,
                        }}
                      >
                        {g ? g.code : "—"}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="text-xs mt-3 text-slate-50">
                Showing {roster.length} of {roster.length * 5} students on
                record. Scores follow the WAEC nine-point scale (A1–F9).
              </div>
            </motion.section>
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );
};

export default AddResult;
