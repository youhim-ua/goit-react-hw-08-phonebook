import axios from 'axios';
import authActions from './auth-actions';
import notes from '../../utilities/pnotyfy.js';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(JWT) {
    axios.defaults.headers.common.Authorization = `Bearer ${JWT}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUpUser = personalData => async dispatch => {
  dispatch(authActions.signUpRequest());

  try {
    const response = await axios.post('/users/signup', personalData);

    token.set(response.data.token);
    dispatch(authActions.signUpSuccess(response.data));
    notes.noteSuccessLogin();
  } catch (error) {
    dispatch(authActions.signUpError(error.message));
    notes.noteErrorLogin();
  }
};

const signInUser = personalData => async dispatch => {
  dispatch(authActions.signInRequest());

  try {
    const response = await axios.post('/users/login', personalData);

    token.set(response.data.token);
    dispatch(authActions.signInSuccess(response.data));
    notes.noteSuccessLogin();
  } catch (error) {
    dispatch(authActions.signInError(error.message));
    notes.noteErrorLogin();
  }
};

const signOutUser = () => async dispatch => {
  dispatch(authActions.signOutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.signOutSuccess());
  } catch (error) {
    dispatch(authActions.signOutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    persistedReducer: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('users/current');
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

// eslint-disable-next-line
export default { signUpUser, signInUser, signOutUser, getCurrentUser };
