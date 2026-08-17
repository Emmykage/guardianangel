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
import { INITIAL_SCHEDULE, TEACHER_CLASSES } from "../../app/constants/global";
import { COLORS, FONTS } from "../../app/constants/colors";
import { AnimatePresence, motion } from "framer-motion";
import StatusPill from "../../components/Status/StatusPill";
// import { useSelector } from 'react-redux'

const TeacherClasses = () => {
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
                    {TEACHER_CLASSES.find((tc) => tc.id === c.classId)?.name}
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

export default TeacherClasses;
