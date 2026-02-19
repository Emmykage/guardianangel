import React, { useEffect, useState } from "react";
import {
  ActionButton,
  AddBookForm,
  BookAuthor,
  BookItem,
  BookList,
  BookTitle,
  Button,
  Content,
  FormGroup,
  Input,
  Label,
  LibraryContainer,
  Title,
} from "../../styles/LibraryStyles";
import Sidebar from "./Sidebar";
import axios from "axios";

const Library = () => {
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

  const addBook = async (book) => {
    // e.preventDefault()
    // if(newStudent.name.trim() !== "" && newStudent.registrationNumber.trim() !== "" && newStudent.grade.trim() !== ""){
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/libraries",
        {
          bookname: book.title,
          author: book.author,
        },
      );
      console.log("Response data", response.data);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error("Error adding book: ", error);

      // }
    }
  };
  const handleBookPick = async (bookId, studentId) => {};

  const handleBookReturn = async (bookId, studentId) => {};
  return (
    <LibraryContainer>
      <Sidebar />
      <Content>
        <Title>Library Management</Title>
        <AddBookForm
          onSubmit={(e) => {
            e.preventDefault();
            const book = {
              id: Math.random().toString(36).substring(2, 9),
              title: e.target.title.value,
              author: e.target.author.value,
            };
            addBook(book);
            e.target.reset();
          }}
        >
          <h2>Add New Book</h2>
          <FormGroup>
            <Label htmlFor="title"> Title</Label>
            <Input type="text" id="title" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="author">Author</Label>
            <Input type="text" id="auth" />
          </FormGroup>
          <Button type="submit">Add Book</Button>
        </AddBookForm>
        <h2>Book</h2>
        <BookList>
          {books.map((book) => (
            <BookItem key={book.id}>
              <BookTitle>{book.bookname}</BookTitle>
              <BookAuthor>{book.author}</BookAuthor>
              <ActionButton
                onClick={() => handleBookPick(book._d, "student123")}
              >
                {" "}
                Pick{" "}
              </ActionButton>
              <ActionButton
                onClick={() => handleBookReturn(book._d, "student123")}
              >
                {" "}
                Return{" "}
              </ActionButton>
            </BookItem>
          ))}
        </BookList>
      </Content>
    </LibraryContainer>
  );
};

export default Library;
