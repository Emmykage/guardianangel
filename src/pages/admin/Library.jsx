import React from 'react'
import { AddBookForm, BookList, Button, Content, FormGroup, Input, Label, LibraryContainer, Title } from '../../styles/LibraryStyles'
import Sidebar from './Sidebar'

const Library = () => {
  return (
    <LibraryContainer>
      <Sidebar/>
      <Content>
        <Title>
          Library Management
        </Title>
        <AddBookForm>
          <h2>Add New Book</h2>
          <FormGroup>
            <Label htmlFor='title'> Title</Label>
            <Input type='text' id='title' />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='author'>Author</Label>
            <Input type='text' id='auth' />
          </FormGroup>
          <Button type='submit'>Add Book</Button>
        </AddBookForm>
        <h2>Book</h2>
        <BookList>
          
        </BookList>
      </Content>
    </LibraryContainer>
  )
}

export default Library