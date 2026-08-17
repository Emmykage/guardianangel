import React, { useEffect, useState } from "react";
import {
  ClassContainer,
  Content,
  ClassHeader,
  ClassList,
  SidebarContainer,
  ClassesContainer,
  ClassesContent,
  AddClassForm,
  AddClassInput,
  AddClassButton,
  ClassItem,
} from "../../styles/ClassesStyles";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  INITIAL_SCHEDULE,
  RECORDINGS,
  TEACHER_CLASSES,
  TODAY_SCHEDULE,
} from "../../app/constants/global";
import { COLORS, FONTS } from "../../app/constants/colors";
import { AnimatePresence, motion } from "framer-motion";
import StatusPill from "../../components/Status/StatusPill";
import SectionLabel from "../../components/sectionLabel/SectionLabel";
// import { useSelector } from 'react-redux'

const StudentClasses = () => {
  // const {classer} = useSelector
  const [newClassName, setNewClassName] = useState("");
  const [classes, setClasses] = useState([]);
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

  useEffect(() => {
    fetchClasses();
  });

  const fetchClasses = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/events");
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes || []);
      } else {
        console.log("Error while fetching classes:", response.data);
      }
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== "") {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/classes",
          {
            grade: newClassName,
          },
        );
        console.log("Response data", response.data);
        setClasses((prevClasses) => {
          if (Array.isArray(prevClasses)) {
            return [...prevClasses, response.data];
          } else {
            console.log("Error while fetching classes:", response.data);
            return [];
          }
        });
        setNewClassName("");
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    }
  };
  return (
    <ClassesContainer>
      <Content />
      <ClassesContent>
        <ClassHeader>Classes</ClassHeader>
        <h1
          style={{ fontFamily: FONTS.display, fontWeight: 600 }}
          className="text-2xl md:text-3xl"
        >
          Online Classes
        </h1>
        <p className="text-sm mt-1" style={{ color: COLORS.slate }}>
          Start a live session or schedule an upcoming one.{" "}
        </p>
        <AddClassForm onSubmit={handleAddClass}>
          <AddClassInput
            type="text"
            placeholder="Enter Class Name"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
          />
          <AddClassButton type="submit">Add Class</AddClassButton>
        </AddClassForm>
        <motion.section
          key="classes"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6"
        >
          <div
            className="rounded-xl p-5"
            style={{ background: "#fff", border: `1px solid ${COLORS.line}` }}
          >
            <SectionLabel>Today's Live Classes</SectionLabel>
            <div className="flex flex-col gap-3">
              {TODAY_SCHEDULE.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between px-4 py-3 rounded-lg"
                  style={{
                    background: c.status === "live" ? "#FBF1EF" : COLORS.paper,
                    border:
                      c.status === "live"
                        ? `1px solid ${COLORS.live}`
                        : `1px solid ${COLORS.line}`,
                  }}
                >
                  <div>
                    <div className="text-sm font-medium">{c.subject}</div>
                    <div className="text-xs" style={{ color: COLORS.slate }}>
                      {c.teacher} · {c.time}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusPill status={c.status} />
                    {c.status === "live" ? (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="text-xs px-3 py-1.5 rounded-full text-white"
                        style={{ background: COLORS.live }}
                      >
                        Join now
                      </motion.button>
                    ) : c.status === "upcoming" ? (
                      <button
                        className="text-xs px-3 py-1.5 rounded-full"
                        style={{
                          border: `1px solid ${COLORS.line}`,
                          color: COLORS.slate,
                        }}
                      >
                        Set reminder
                      </button>
                    ) : (
                      <button
                        className="text-xs px-3 py-1.5 rounded-full"
                        style={{
                          border: `1px solid ${COLORS.line}`,
                          color: COLORS.slate,
                        }}
                      >
                        Notes
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-xl p-5"
            style={{ background: "#fff", border: `1px solid ${COLORS.line}` }}
          >
            <SectionLabel>Recordings</SectionLabel>
            <div
              className="flex flex-col divide-y"
              style={{ borderColor: COLORS.line }}
            >
              {RECORDINGS.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between py-3"
                >
                  <div>
                    <div className="text-sm font-medium">{r.title}</div>
                    <div className="text-xs" style={{ color: COLORS.slate }}>
                      {r.subject} · {r.date}
                    </div>
                  </div>
                  <button
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      border: `1px solid ${COLORS.ink}`,
                      color: COLORS.ink,
                    }}
                  >
                    Watch →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <ClassList>
          {Array.isArray(classes) &&
            classes.map((classItem, index) => (
              <ClassItem key={index}>{classItem.grade}</ClassItem>
            ))}
        </ClassList>
      </ClassesContent>
    </ClassesContainer>
  );
};

export default StudentClasses;
