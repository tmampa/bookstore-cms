import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './book';

const Books = () => {
  const numCakes = useSelector((state) => state.booksReducer);
  return (
    <div>
      {numCakes.map((task) => (
        <Book
          id={task.id}
          key={task.id}
          title={task.title}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
