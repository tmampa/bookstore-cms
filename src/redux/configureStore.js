import {createScore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer
});

const store = createScore(
  reducer,
  applyMiddleware(logger)
);

export default store;