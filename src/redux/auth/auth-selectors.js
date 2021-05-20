// import { createSelector } from 'reselect';

const getUserName = state => state.persistedReducer.user.name;

const getIsAuthorized = state => state.persistedReducer.isAuthorized;

// eslint-disable-next-line
export default {
  getUserName,
  getIsAuthorized,
};
