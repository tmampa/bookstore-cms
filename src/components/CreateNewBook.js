import React from 'react';

const CreateNewBook = () => (
  <form>
    <div>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add new book</button>
    </div>
  </form>
);
export default CreateNewBook;
