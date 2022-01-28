import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBooks } from '../redux/books/books';

const SingleBook = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{book.title}</div>
          {book.author}
        </div>
        <button
          type="button"
          className="btn btn-sm btn-link"
          onClick={() => dispatch(removeBooks(book.id))}
        >
          Remove Book
        </button>
      </li>
    </div>
  );
};

SingleBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default SingleBook;
