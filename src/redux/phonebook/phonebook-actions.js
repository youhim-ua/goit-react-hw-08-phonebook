// import actionTypes from '../phonebook/phonebook-types';
import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('phonebook/fetchContactRequest');
const fetchContactSuccess = createAction('phonebook/fetchContactSuccess');
const fetchContactError = createAction('phonebook/fetchContactError');

const addContactRequest = createAction('phonebook/addContactRequest');
const addContactSuccess = createAction('phonebook/addContactSuccess');
const addContactError = createAction('phonebook/addContactError');

const deleteContactRequest = createAction('phonebook/deleteContactRequest');
const deleteContactSuccess = createAction('phonebook/deleteContactSuccess');
const deleteContactError = createAction('phonebook/deleteContactError');

const filterContact = createAction('phonebook/filter');

// eslint-disable-next-line
export default {
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
};
