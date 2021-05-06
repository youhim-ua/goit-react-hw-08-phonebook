import { createSelector } from 'reselect';

const getAllContacts = state => state.contacts;

const getFilter = state => state.filter;

const getLoading = state => state.loading;

const getError = state => state.error;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const formattedFilter = filter.toLowerCase();
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(formattedFilter),
    );
  },
);

// eslint-disable-next-line
export default {
  getAllContacts,
  getFilter,
  getVisibleContacts,
  getLoading,
  getError,
};
