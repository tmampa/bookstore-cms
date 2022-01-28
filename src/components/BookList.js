import React from 'react';
import { useSelector } from 'react-redux';
import Book from './SingleBook';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h3>Book list</h3>
      <ul>
        {books.length > 0 ? books.map((book) => <Book key={book.id} book={book} />) : 'No books'}
      </ul>
    </div>
  );
};

export default BookList;
