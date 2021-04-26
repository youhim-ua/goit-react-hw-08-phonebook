// import actionTypes from '../phonebook/phonebook-types';
import { createAction } from '@reduxjs/toolkit';

// const addContact = (contact) => ({
//     type: actionTypes.ADD,
//     payload: contact
// });

// const deleteContact = (contactID) => ({
//     type: actionTypes.DELETE,
//     payload: contactID
// });

// const filterContact = (name) => ({
//     type: actionTypes.FILTER,
//     payload: name
// });

const addContact = createAction('phonebook/add');
const deleteContact = createAction('phonebook/delete');
const filterContact = createAction('phonebook/filter');

export { addContact, deleteContact, filterContact };
