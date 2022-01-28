import {  combineReducers } from 'redux';

// Action Types
export const addBooks = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

export const removeBooks = (id) => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

// Reducers
export const booksReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

// Store

export const rootReducers = combineReducers({
  books: booksReducers,
});