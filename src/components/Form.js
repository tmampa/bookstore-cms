import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/book';

const AddBooks = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title: value,
      author: '',
    };

    dispatch(addBook(newBook));
  };
  return (
    <form>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="ADD NEW BOOK" />
      <select name="books" id="book">
        <option value="Action">Volvo</option>
        <option value="Science fiction">The God&apos;s Equation</option>
        <option value="Economy">Dollars</option>
        <option value="Computer Science">DS n ALgo</option>
      </select>
      <input type="button" value="Add Book" onClick={submitBookToStore} />
    </form>
  );
};

export default AddBooks;
