import { createReducer } from '@reduxjs/toolkit';
// import actionTypes from './phonebook-types';
import * as actions from './phonebook-actions';

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
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export { contacts, filter };
