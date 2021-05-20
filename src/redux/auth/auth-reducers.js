import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import actions from './auth-actions';

const {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  signOutError,
  // getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} = actions;

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [signUpSuccess]: (_, { payload }) => payload.user,
  [signInSuccess]: (_, { payload }) => payload.user,
  [signOutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.token,
  [signInSuccess]: (_, { payload }) => payload.token,
  [signOutSuccess]: () => null,
});

const error = createReducer('', {
  [signUpError]: (_, { payload }) => payload,
  [signUpSuccess]: () => '',
  [signInError]: (_, { payload }) => payload,
  [signInSuccess]: () => '',
  [signOutError]: (_, { payload }) => payload,
  [signOutSuccess]: () => '',
  [getCurrentUserError]: (_, { payload }) => payload,
  [getCurrentUserSuccess]: () => '',
});

const isAuthorized = createReducer(false, {
  [signUpSuccess]: () => true,
  [signInSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [signUpError]: () => false,
  [signInError]: () => false,
  [signOutError]: () => false,
  [getCurrentUserError]: () => false,
  [signOutSuccess]: () => false,
});

const loading = createReducer(false, {
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [signInRequest]: () => true,
  [signInSuccess]: () => false,
  [signInError]: () => false,
  [signOutRequest]: () => true,
  [signOutSuccess]: () => false,
  [signOutError]: () => false,
});

export default combineReducers({ user, token, error, isAuthorized, loading });
