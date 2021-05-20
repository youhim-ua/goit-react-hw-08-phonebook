import axios from 'axios';
import actions from './auth-actions';
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
  dispatch(actions.signUpRequest());

  try {
    const response = await axios.post('/users/signup', personalData);

    token.set(response.data.token);
    dispatch(actions.signUpSuccess(response.data));
    notes.noteSuccessLogin();
  } catch (error) {
    dispatch(actions.signUpError(error.message));
    notes.noteErrorLogin();
  }
};

const signInUser = personalData => async dispatch => {
  dispatch(actions.signInRequest());

  try {
    const response = await axios.post('/users/login', personalData);

    token.set(response.data.token);
    dispatch(actions.signInSuccess(response.data));
    notes.noteSuccessLogin();
  } catch (error) {
    dispatch(actions.signInError(error.message));
    notes.noteErrorLogin();
  }
};

const signOutUser = () => async dispatch => {
  dispatch(actions.signOutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(actions.signOutSuccess());
  } catch (error) {
    dispatch(actions.signOutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    persistedReducer: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  token.set(persistedToken);

  dispatch(actions.getCurrentUserRequest());

  try {
    const response = await axios.get('users/current');
    dispatch(actions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error.message));
  }
};

// eslint-disable-next-line
export default { signUpUser, signInUser, signOutUser, getCurrentUser };
