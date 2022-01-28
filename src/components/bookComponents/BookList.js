import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { addBooks } from '../../redux/books/books';

export default BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBooks());
  }, [dispatch]);

  return (
    <div>
      {books.length ? (
        books.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <p>No books</p>
      )}
    </div>
  );
};
