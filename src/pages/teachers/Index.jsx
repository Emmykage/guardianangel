import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Design tokens (shared with the staff & student portals)             */
/* ------------------------------------------------------------------ */
const COLORS = {
  ink: "#14213D",
  inkSoft: "#233559",
  paper: "#F4F6F5",
  paperDeep: "#E8EBE7",
  gold: "#C79A3E",
  goldSoft: "#E7CE93",
  slate: "#5B6472",
  pass: "#2F6F4E",
  fail: "#B3402A",
  live: "#C0392B",
  line: "#D9DCD6",
};
const FONTS = {
  display: "'Fraunces', 'Georgia', serif",
  body: "'Inter', 'Helvetica Neue', sans-serif",
  mono: "'IBM Plex Mono', 'Courier New', monospace",
};

function gradeFor(score) {
  if (score >= 75)
    return { code: "A1", label: "Excellent", color: COLORS.pass };
  if (score >= 70)
    return { code: "B2", label: "Very Good", color: COLORS.pass };
  if (score >= 65) return { code: "B3", label: "Good", color: COLORS.pass };
  if (score >= 60) return { code: "C4", label: "Credit", color: COLORS.gold };
  if (score >= 55) return { code: "C5", label: "Credit", color: COLORS.gold };
  if (score >= 50) return { code: "C6", label: "Credit", color: COLORS.gold };
  if (score >= 45) return { code: "D7", label: "Pass", color: COLORS.slate };
  if (score >= 40) return { code: "E8", label: "Pass", color: COLORS.slate };
  return { code: "F9", label: "Fail", color: COLORS.fail };
}

/* ------------------------------------------------------------------ */
/* Mock data — this teacher                                            */
/* ------------------------------------------------------------------ */
const TEACHER = {
  name: "Mrs. Bello",
  initials: "AB",
  subjectsTaught: ["Physics", "Basic Science"],
};

const TEACHER_CLASSES = [
  { id: "ss1sci", name: "SS 1 Science", subject: "Physics" },
  { id: "jss2b", name: "JSS 2B", subject: "Basic Science" },
];

const ROSTERS = {
  ss1sci: [
    { id: "st1", name: "Ifeoma Chukwu", admission: "SS1/014" },
    { id: "st2", name: "Tunde Bakare", admission: "SS1/021" },
    { id: "st3", name: "Kelechi Aniagu", admission: "SS1/003" },
    { id: "st4", name: "Precious Idahosa", admission: "SS1/029" },
    { id: "st5", name: "Ahmed Suleiman", admission: "SS1/011" },
    { id: "st6", name: "Grace Etuk", admission: "SS1/007" },
  ],
  jss2b: [
    { id: "st7", name: "Emeka Uzo", admission: "J2B/009" },
    { id: "st8", name: "Blessing Etim", admission: "J2B/027" },
    { id: "st9", name: "Chinedu Okoro", admission: "J2B/013" },
    { id: "st10", name: "Fatima Yusuf", admission: "J2B/004" },
    { id: "st11", name: "Samuel Okonkwo", admission: "J2B/022" },
  ],
};

const TERMS = [
  { id: "first", label: "First Term" },
  { id: "second", label: "Second Term" },
  { id: "third", label: "Third Term" },
];

const INITIAL_ASSIGNMENTS = [
  {
    id: "a1",
    classId: "ss1sci",
    title: "Newton's Laws Problem Set",
    due: "Due tomorrow",
    submitted: 19,
    total: 27,
  },
  {
    id: "a2",
    classId: "jss2b",
    title: "States of Matter Worksheet",
    due: "Due Friday",
    submitted: 6,
    total: 29,
  },
];

const INITIAL_SCHEDULE = [
  {
    id: "c1",
    classId: "ss1sci",
    topic: "Forces & Motion — Recap",
    time: "10:00 – 10:40 AM",
    status: "live",
  },
  {
    id: "c2",
    classId: "jss2b",
    topic: "Intro to States of Matter",
    time: "1:00 – 1:40 PM",
    status: "upcoming",
  },
];

const INITIAL_TESTS = [
  {
    id: "t1",
    classId: "ss1sci",
    title: "Mid-Term CBT — Forces & Motion",
    questions: 5,
    durationMin: 5,
    completed: 22,
    total: 27,
    avgScore: 71,
  },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */
function NavIcon({ kind }) {
  const c = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
  };
  if (kind === "home")
    return (
      <svg {...c}>
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M6 10v9.5h12V10" />
      </svg>
    );
  if (kind === "results")
    return (
      <svg {...c}>
        <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
        <path d="M12 4h6.5c.8 0 1.5.7 1.5 1.5v13c0 .8-.7 1.5-1.5 1.5H12" />
      </svg>
    );
  if (kind === "assignments")
    return (
      <svg {...c}>
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
      </svg>
    );
  if (kind === "classes")
    return (
      <svg {...c}>
        <rect x="3" y="5" width="18" height="13" rx="1.5" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    );
  return (
    <svg {...c}>
      <path d="M9 4h6l1 3h3v13H5V7h3l1-3Z" />
      <path d="M9 11l2 2 4-4" />
    </svg>
  );
}
function SectionLabel({ children }) {
  return (
    <div
      className="text-xs uppercase tracking-widest mb-3"
      style={{
        color: COLORS.slate,
        fontFamily: FONTS.mono,
        letterSpacing: "0.14em",
      }}
    >
      {children}
    </div>
  );
}
function StatusPill({ status }) {
  const map = {
    live: { label: "Live now", bg: "#F6E6E1", fg: COLORS.live },
    upcoming: { label: "Upcoming", bg: "#EAEDF3", fg: COLORS.inkSoft },
    ended: { label: "Ended", bg: COLORS.paperDeep, fg: COLORS.slate },
  };
  const s = map[status] || map.upcoming;
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-full inline-flex items-center gap-1.5"
      style={{ background: s.bg, color: s.fg, fontFamily: FONTS.mono }}
    >
      {status === "live" && (
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="rounded-full"
          style={{
            width: 6,
            height: 6,
            background: COLORS.live,
            display: "inline-block",
          }}
        />
      )}
      {s.label}
    </span>
  );
}
function ProgressBar({ value, total }) {
  const pct = total ? Math.round((value / total) * 100) : 0;
  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-full overflow-hidden"
        style={{ width: 90, height: 6, background: COLORS.paperDeep }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: pct >= 60 ? COLORS.pass : COLORS.gold,
          }}
        />
      </div>
      <span
        className="text-xs"
        style={{ fontFamily: FONTS.mono, color: COLORS.slate }}
      >
        {value}/{total}
      </span>
    </div>
  );
}
function Toast({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12, x: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="fixed top-6 right-6 px-4 py-3 rounded-lg text-sm text-white flex items-center gap-2 z-50"
      style={{ background: COLORS.ink }}
    >
      <span style={{ color: COLORS.gold }}>✓</span> {message}
    </motion.div>
  );
}

const emptyQuestion = () => ({ q: "", options: ["", "", "", ""], answer: 0 });

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */
export default function TeacherPortal() {
  const [view, setView] = useState("home");
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  function fireToast(message) {
    clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  }

  /* ---- Results entry state ---- */
  const [resultsClassId, setResultsClassId] = useState(TEACHER_CLASSES[0].id);
  const [resultsTerm, setResultsTerm] = useState("first");
  const [scores, setScores] = useState({}); // { studentId: score }

  function setScore(studentId, value) {
    const n = value === "" ? "" : Math.max(0, Math.min(100, Number(value)));
    setScores((prev) => ({ ...prev, [studentId]: n }));
  }
  function saveResults() {
    const cls = TEACHER_CLASSES.find((c) => c.id === resultsClassId);
    fireToast(`Results saved for ${cls.name} — ${cls.subject}`);
  }

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

  /* ---- Online classes state ---- */
  const [schedule, setSchedule] = useState(INITIAL_SCHEDULE);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [draftClass, setDraftClass] = useState({
    classId: TEACHER_CLASSES[0].id,
    topic: "",
    time: "",
  });

  function scheduleClass() {
    if (!draftClass.topic.trim()) return;
    setSchedule((prev) => [
      ...prev,
      {
        id: `c${prev.length + 1}`,
        classId: draftClass.classId,
        topic: draftClass.topic,
        time: draftClass.time || "Time not set",
        status: "upcoming",
      },
    ]);
    fireToast("Class scheduled");
    setDraftClass({ classId: TEACHER_CLASSES[0].id, topic: "", time: "" });
    setShowScheduleForm(false);
  }
  function goLive(id) {
    setSchedule((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "live" } : c)),
    );
    fireToast("You're live");
  }

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
        input, textarea, select { font-family: inherit; }
      `}</style>

      <AnimatePresence>{toast && <Toast message={toast} />}</AnimatePresence>

      {/* Sidebar */}
      <aside
        className="hidden md:flex flex-col justify-between w-60 shrink-0 min-h-screen px-5 py-6"
        style={{ background: COLORS.ink, color: COLORS.paper }}
      >
        <div>
          <div className="flex items-center gap-3 mb-10 px-1">
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 38,
                height: 38,
                border: `1.5px solid ${COLORS.gold}`,
                color: COLORS.gold,
                fontFamily: FONTS.display,
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              GA
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONTS.display,
                  fontWeight: 600,
                  fontSize: 15,
                  lineHeight: 1.1,
                }}
              >
                Greenway Academy
              </div>
              <div className="text-xs" style={{ color: "#8C97B3" }}>
                Teacher Portal
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = view === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left"
                  style={{
                    color: active ? COLORS.ink : "#C4CBDC",
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: COLORS.gold }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    <NavIcon kind={item.icon} />
                  </span>
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        <div
          className="rounded-lg p-4 text-xs leading-relaxed"
          style={{ background: COLORS.inkSoft, color: "#B7C0D6" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: 26,
                height: 26,
                background: COLORS.gold,
                color: COLORS.ink,
                fontFamily: FONTS.mono,
                fontWeight: 600,
                fontSize: 11,
              }}
            >
              {TEACHER.initials}
            </div>
            <div>
              <div style={{ color: "#fff", fontSize: 12 }}>{TEACHER.name}</div>
              <div style={{ fontFamily: FONTS.mono, fontSize: 10 }}>
                {TEACHER.subjectsTaught.join(" · ")}
              </div>
            </div>
          </div>
          {TEACHER_CLASSES.length} classes · Session 2025/2026
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-h-screen px-5 md:px-10 py-7 max-w-6xl">
        <div className="mb-8">
          <h1
            style={{ fontFamily: FONTS.display, fontWeight: 600 }}
            className="text-2xl md:text-3xl"
          >
            {view === "home" && `Good day, ${TEACHER.name}`}
            {view === "results" && "Add Results"}
            {view === "assignments" && "Assignments"}
            {view === "classes" && "Online Classes"}
            {view === "tests" && "Tests"}
          </h1>
          <p className="text-sm mt-1" style={{ color: COLORS.slate }}>
            {view === "home" &&
              "A snapshot of your classes, assignments and live sessions."}
            {view === "results" &&
              "Enter subject scores for a class and save them to the ledger."}
            {view === "assignments" &&
              "Post new work and track submissions across your classes."}
            {view === "classes" &&
              "Start a live session or schedule an upcoming one."}
            {view === "tests" &&
              "Build a CBT-style test and monitor completion."}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* ------------------------------ HOME ------------------------------ */}
          {view === "home" && (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Classes Taught", value: TEACHER_CLASSES.length },
                  { label: "Students Reached", value: totalStudents },
                  { label: "Awaiting Grading", value: pendingGrading },
                  {
                    label: "Live Now",
                    value: liveNow ? liveNow.topic : "None",
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
                      className="text-xl"
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
                  <SectionLabel>My Classes</SectionLabel>
                  <div
                    className="flex flex-col divide-y"
                    style={{ borderColor: COLORS.line }}
                  >
                    {TEACHER_CLASSES.map((c) => (
                      <div
                        key={c.id}
                        className="flex items-center justify-between py-3"
                      >
                        <div>
                          <div className="text-sm font-medium">{c.name}</div>
                          <div
                            className="text-xs"
                            style={{ color: COLORS.slate }}
                          >
                            {c.subject} · {ROSTERS[c.id]?.length * 5} students
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setResultsClassId(c.id);
                            setView("results");
                          }}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            border: `1px solid ${COLORS.ink}`,
                            color: COLORS.ink,
                          }}
                        >
                          Enter results →
                        </button>
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
                  <SectionLabel>Assignment Submissions</SectionLabel>
                  <div
                    className="flex flex-col divide-y"
                    style={{ borderColor: COLORS.line }}
                  >
                    {assignments.map((a) => (
                      <div key={a.id} className="py-3">
                        <div className="text-sm font-medium mb-1.5">
                          {a.title}
                        </div>
                        <ProgressBar value={a.submitted} total={a.total} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* ---------------------------- ADD RESULTS ---------------------------- */}
          {view === "results" && (
            <motion.section
              key="results"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl p-6"
              style={{ background: "#fff", border: `1px solid ${COLORS.line}` }}
            >
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
                      fontFamily: FONTS.mono,
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

              <div
                className="rounded-lg overflow-hidden"
                style={{ border: `1px solid ${COLORS.line}` }}
              >
                <div
                  className="grid grid-cols-[1fr_110px_90px] px-4 py-2 text-xs"
                  style={{
                    background: COLORS.paperDeep,
                    color: COLORS.slate,
                    fontFamily: FONTS.mono,
                  }}
                >
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
                      className="grid grid-cols-[1fr_110px_90px] px-4 py-3 text-sm items-center"
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
                            fontFamily: FONTS.mono,
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
                          fontFamily: FONTS.mono,
                        }}
                      />
                      <span
                        className="text-right"
                        style={{
                          fontFamily: FONTS.mono,
                          color: g ? g.color : COLORS.slate,
                        }}
                      >
                        {g ? g.code : "—"}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="text-xs mt-3" style={{ color: COLORS.slate }}>
                Showing {roster.length} of {roster.length * 5} students on
                record. Scores follow the WAEC nine-point scale (A1–F9).
              </div>
            </motion.section>
          )}

          {/* ----------------------------- ASSIGNMENTS ----------------------------- */}
          {view === "assignments" && (
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
          )}

          {/* ------------------------------ CLASSES ------------------------------ */}
          {view === "classes" && (
            <motion.section
              key="classes"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex justify-end mb-4">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setShowScheduleForm((v) => !v)}
                  className="text-sm px-4 py-2 rounded-full text-white"
                  style={{ background: COLORS.ink }}
                >
                  {showScheduleForm ? "Close" : "+ Schedule class"}
                </motion.button>
              </div>

              <AnimatePresence initial={false}>
                {showScheduleForm && (
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
                          value={draftClass.classId}
                          onChange={(e) =>
                            setDraftClass((p) => ({
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
                          value={draftClass.time}
                          onChange={(e) =>
                            setDraftClass((p) => ({
                              ...p,
                              time: e.target.value,
                            }))
                          }
                          placeholder="Time, e.g. Monday, 11:00 AM"
                          className="text-sm px-3 py-2 rounded-lg outline-none flex-1 min-w-[200px]"
                          style={{ border: `1px solid ${COLORS.line}` }}
                        />
                      </div>
                      <input
                        value={draftClass.topic}
                        onChange={(e) =>
                          setDraftClass((p) => ({
                            ...p,
                            topic: e.target.value,
                          }))
                        }
                        placeholder="Session topic"
                        className="text-sm px-3 py-2 rounded-lg outline-none"
                        style={{ border: `1px solid ${COLORS.line}` }}
                      />
                      <div className="flex justify-end">
                        <button
                          onClick={scheduleClass}
                          className="text-xs px-4 py-2 rounded-full text-white"
                          style={{ background: COLORS.gold }}
                        >
                          Add to schedule
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col gap-3">
                {schedule.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center justify-between px-5 py-4 rounded-xl"
                    style={{
                      background: c.status === "live" ? "#FBF1EF" : "#fff",
                      border:
                        c.status === "live"
                          ? `1px solid ${COLORS.live}`
                          : `1px solid ${COLORS.line}`,
                    }}
                  >
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{ color: COLORS.gold, fontFamily: FONTS.mono }}
                      >
                        {
                          TEACHER_CLASSES.find((tc) => tc.id === c.classId)
                            ?.name
                        }
                      </div>
                      <div className="text-sm font-medium">{c.topic}</div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: COLORS.slate }}
                      >
                        {c.time}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <StatusPill status={c.status} />
                      {c.status === "upcoming" && (
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => goLive(c.id)}
                          className="text-xs px-3 py-1.5 rounded-full text-white"
                          style={{ background: COLORS.ink }}
                        >
                          Start class
                        </motion.button>
                      )}
                      {c.status === "live" && (
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-3 py-1.5 rounded-full text-white"
                          style={{ background: COLORS.live }}
                        >
                          Open room
                        </motion.button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ------------------------------- TESTS -------------------------------- */}
          {view === "tests" && (
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
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
