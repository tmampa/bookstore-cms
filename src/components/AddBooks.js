import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/books';

export default function AddBooks() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addNewBook = (e) => {
    if (title && author) {
      e.preventDefault();
      const data = {
        id: books.length + 1,
        title,
        author,
      };
      dispatch(addBooks(data));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div>
      <form>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add new book" />
        <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      </form>
    </div>
  );
}
