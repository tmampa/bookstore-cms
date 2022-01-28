import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "../../redux/books/books";

export default BookList = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
    };

    dispatch(addBooks(newBook));
    setTitle("");
    setAuthor("");
  };

  return (
    <form>
      <input
        type="text"
        value={title}
        placeholder="Book tiyle"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        value={author}
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit" onClick={addBookToStore}>
        Add Book
      </button>
    </form>
  );
}