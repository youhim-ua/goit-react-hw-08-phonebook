import { createSelector } from 'reselect';

const getAllContacts = state => state.abonents.contacts;

const getFilter = state => state.abonents.filter;

const getLoading = state => state.abonents.loading;

const getError = state => state.abonents.error;

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
