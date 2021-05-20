import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
} = actions;

// const contacts = (state = [], {type, payload}) => {
//     switch (type) {
//         case actionTypes.ADD:
//             return [...state, payload]

//         case actionTypes.DELETE:
//             return state.filter(contact => contact.id !== payload)

//         default:
//             return state;
//     }
// }

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case actionTypes.FILTER:
//             return payload;

//         default:
//             return state;
//     }

// }

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(false, {
  [fetchContactError]: () => true,
  [fetchContactSuccess]: () => false,
  [addContactError]: () => true,
  [addContactSuccess]: () => false,
  [deleteContactError]: () => true,
  [deleteContactSuccess]: () => false,
});

export default combineReducers({ contacts, filter, loading, error });
