import axios from 'axios';
import actions from './phonebook-actions';
import notes from '../../utilities/pnotyfy.js';

const fetchContact = () => dispatch => {
  dispatch(actions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error)));
};

const addContact = ({ name, number }) => dispatch => {
  dispatch(actions.addContactRequest());

  const contact = { name, number };

  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      dispatch(actions.addContactSuccess(data));
      notes.noteSuccess();
    })
    .catch(error => {
      dispatch(actions.addContactError(error));
      notes.noteErrorCreate();
    });
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(actions.deleteContactSuccess(id));
      notes.noteDeleteSuccess();
    })
    .catch(error => {
      dispatch(actions.deleteContactError(error));
      notes.noteErrorCreate();
    });
};
// eslint-disable-next-line
export default { fetchContact, addContact, deleteContact };
