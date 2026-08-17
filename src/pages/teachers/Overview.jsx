import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "../../components/progressBar/ProgressBar";

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

const emptyQuestion = () => ({ q: "", options: ["", "", "", ""], answer: 0 });

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */
export default function Overview() {
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

      <main className="flex-1 min-h-screen px-5 md:px-10 py-7 max-w-6xl">
        <div className="mb-8">
          <h1
            style={{ fontFamily: FONTS.display, fontWeight: 600 }}
            className="text-2xl md:text-3xl"
          >
            Good day, ${TEACHER.name}
          </h1>
          <p className="text-sm mt-1" style={{ color: COLORS.slate }}>
            A snapshot of your classes, assignments and live sessions.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* ------------------------------ HOME ------------------------------ */}
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
                  <div className="text-xs mb-2" style={{ color: COLORS.slate }}>
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
        </AnimatePresence>
      </main>
    </div>
  );
}
