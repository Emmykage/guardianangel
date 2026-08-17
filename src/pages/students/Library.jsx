import React, { useEffect, useState } from "react";
import {
  BookAuthor,
  BookItem,
  BookList,
  BookTitle,
  BorrowButton,
  Content,
  LibraryContainer,
  LibraryHeader,
  SidebarContainer,
} from "../../styles/LibraryStyles";
import Sidebar from "./Sidebar";
import axios from "axios";

const StudentLibrarySection = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/libraries",
      );
      if (response.data && Array.isArray(response.data.classes)) {
        setBooks(response.data.classes || []);
      } else {
        console.log("Error while fetching classes:", response.data);
      }
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
  };

  const handleBorrowBook = (id) => {};

  return (
    <LibraryContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <LibraryHeader>Library</LibraryHeader>
        <BookList>
          {books.map((book) => (
            <BookItem key={book.id}>
              <BookTitle>{book.bookname}</BookTitle>
              <BookAuthor>{book.author}</BookAuthor>
              <BorrowButton onClick={() => handleBorrowBook(book._id)}>
                {" "}
                Borrow{" "}
              </BorrowButton>
            </BookItem>
          ))}{" "}
        </BookList>
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
                <div className="text-xs mb-2" style={{ color: COLORS.slate }}>
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
              style={{ background: "#fff", border: `1px solid ${COLORS.line}` }}
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
                      <div className="text-xs" style={{ color: COLORS.slate }}>
                        {c.teacher} · {c.time}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <StatusPill status={c.status} />
                      {c.status === "live" && (
                        <button
                          onClick={() => setView("classes")}
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
              style={{ background: "#fff", border: `1px solid ${COLORS.line}` }}
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
                          <div className="text-sm font-medium">{a.title}</div>
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
      </Content>
    </LibraryContainer>
  );
};

export default StudentLibrarySection;
