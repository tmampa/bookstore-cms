import React from 'react';
import Book from './SingleBook';
import CreateNewBook from './CreateNewBook';

const Books = () => (
  <div>
    <h3>Book List</h3>
    <Book />
    <CreateNewBook />
  </div>
);

export default Books;
