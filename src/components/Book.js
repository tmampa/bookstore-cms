import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBooks } from "../redux/books/books";

const Book = (props) => {
  const {
    book: { title, author, id },
  } = props;
  const dispatch = useDispatch();
  const removeBook = () => {
    dispatch(removeBooks(id));
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={removeBook}>Remove</button>
    </div>
  );
};

Book.PropTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;