import React, { useState } from 'react';

const Book = () => {
  const [book] = useState([
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
  ]);
  return (
    <div>
      <ul>
        {book.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button type="submit">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
