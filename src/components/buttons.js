import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

const Button = (props) => {
  const dispatch = useDispatch();

  const bookToRemove = (e) => {
    const smbook = {
      id: e.target.id,
    };

    dispatch(removeBook(smbook));
  };
  const id = props;
  return (
    <button type="button" onClick={bookToRemove} id={id.id}>
      Remove Book
    </button>
  );
};

export default Button;
