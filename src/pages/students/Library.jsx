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
      </Content>
    </LibraryContainer>
  );
};

export default StudentLibrarySection;
