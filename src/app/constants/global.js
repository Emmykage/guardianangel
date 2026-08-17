/* ------------------------------------------------------------------ */
/* Mock data — this teacher                                            */
/* ------------------------------------------------------------------ */
export const TEACHER = {
  name: "Mrs. Bello",
  initials: "AB",
  subjectsTaught: ["Physics", "Basic Science"],
};

export const TEACHER_CLASSES = [
  { id: "ss1sci", name: "SS 1 Science", subject: "Physics" },
  { id: "jss2b", name: "JSS 2B", subject: "Basic Science" },
];

export const ROSTERS = {
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

export const INITIAL_ASSIGNMENTS = [
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

export const INITIAL_SCHEDULE = [
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

export const INITIAL_TESTS = [
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

export function gradeFor(score) {
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
/* Mock data                                                           */
/* ------------------------------------------------------------------ */
export const CURRENT_STUDENT = {
  id: "s1",
  name: "Ifeoma Chukwu",
  admission: "SS1/014",
  className: "SS 1 Science",
  track: "science",
  baseline: 82,
};

export const SUBJECTS_BY_TRACK = {
  junior: [
    "English Lang.",
    "Mathematics",
    "Basic Science",
    "Basic Tech.",
    "Social Studies",
    "Agric. Science",
    "CRS",
  ],
  science: [
    "English Lang.",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Further Maths",
    "Geography",
  ],
  art: [
    "English Lang.",
    "Mathematics",
    "Literature",
    "Government",
    "Economics",
    "CRS",
  ],
};
export const TERMS = [
  { id: "first", label: "First Term" },
  { id: "second", label: "Second Term" },
  { id: "third", label: "Third Term" },
];
export const ASSIGNMENTS = [
  {
    id: "a1",
    subject: "Physics",
    title: "Newton's Laws Problem Set",
    due: "Due tomorrow, 11:59 PM",
    status: "pending",
    teacher: "Mrs. Bello",
  },
  {
    id: "a2",
    subject: "Chemistry",
    title: "Balancing Equations Worksheet",
    due: "Due Friday, 4:00 PM",
    status: "pending",
    teacher: "Mr. Nnamdi",
  },
  {
    id: "a3",
    subject: "Geography",
    title: "Map Reading Practical",
    due: "Due Monday, 9:00 AM",
    status: "pending",
    teacher: "Mr. Effiong",
  },
  {
    id: "a4",
    subject: "English Lang.",
    title: "Essay: My Community",
    due: "Submitted 2 days ago",
    status: "submitted",
    teacher: "Mrs. Johnson",
  },
  {
    id: "a5",
    subject: "Mathematics",
    title: "Trigonometry Exercise 4B",
    due: "Graded",
    status: "graded",
    score: 82,
    teacher: "Mr. Adisa",
  },
  {
    id: "a6",
    subject: "Biology",
    title: "Cell Structure Diagram Labelling",
    due: "Graded",
    status: "graded",
    score: 68,
    teacher: "Mrs. Bello",
  },
];
export const TODAY_SCHEDULE = [
  {
    id: "c1",
    subject: "Physics",
    teacher: "Mrs. Bello",
    time: "9:00 – 9:40 AM",
    status: "ended",
  },
  {
    id: "c2",
    subject: "Chemistry",
    teacher: "Mr. Nnamdi",
    time: "10:00 – 10:40 AM",
    status: "live",
  },
  {
    id: "c3",
    subject: "Mathematics",
    teacher: "Mr. Adisa",
    time: "11:00 – 11:40 AM",
    status: "upcoming",
  },
  {
    id: "c4",
    subject: "English Lang.",
    teacher: "Mrs. Johnson",
    time: "1:00 – 1:40 PM",
    status: "upcoming",
  },
];
export const RECORDINGS = [
  {
    id: "r1",
    subject: "Biology",
    title: "Photosynthesis Deep Dive",
    date: "Monday",
  },
  {
    id: "r2",
    subject: "Further Maths",
    title: "Matrices — Introduction",
    date: "Last Friday",
  },
  {
    id: "r3",
    subject: "Geography",
    title: "Map Symbols & Scale",
    date: "Last Wednesday",
  },
];
export const TESTS = [
  {
    id: "t1",
    subject: "Physics",
    title: "Mid-Term CBT — Forces & Motion",
    durationSec: 300,
    status: "available",
    questions: [
      {
        q: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        answer: 0,
      },
      {
        q: "An object at rest stays at rest unless acted upon by…",
        options: ["an external force", "gravity only", "friction only", "time"],
        answer: 0,
      },
      {
        q: "The formula for acceleration is:",
        options: ["a = F / m", "a = m / F", "a = F × m", "a = F + m"],
        answer: 0,
      },
      {
        q: "Which of these quantities is a vector?",
        options: ["Mass", "Speed", "Velocity", "Time"],
        answer: 2,
      },
      {
        q: "1 Newton is equivalent to:",
        options: ["1 kg·m/s²", "1 kg/m²", "1 kg·m", "1 m/s²"],
        answer: 0,
      },
    ],
  },
  {
    id: "t2",
    subject: "Chemistry",
    title: "Quiz — The Periodic Table",
    durationSec: 240,
    status: "completed",
    score: 80,
    questions: [
      {
        q: "The chemical symbol for Sodium is:",
        options: ["Na", "So", "Sd", "S"],
        answer: 0,
      },
      {
        q: "Group 18 elements are commonly called:",
        options: [
          "Noble gases",
          "Halogens",
          "Alkali metals",
          "Transition metals",
        ],
        answer: 0,
      },
      {
        q: "The atomic number of an element represents its number of:",
        options: ["Protons", "Neutrons", "Isotopes", "Electron shells"],
        answer: 0,
      },
      {
        q: "Which of these is a metalloid?",
        options: ["Silicon", "Oxygen", "Sodium", "Chlorine"],
        answer: 0,
      },
      {
        q: "A neutral solution has a pH of:",
        options: ["7", "0", "14", "1"],
        answer: 0,
      },
    ],
  },
];
