import { createReducer } from '@reduxjs/toolkit';
import themeAction from './theme-actions';

const theme = createReducer(null, {
  [themeAction]: (_, { payload }) => payload,
});

export default theme;
