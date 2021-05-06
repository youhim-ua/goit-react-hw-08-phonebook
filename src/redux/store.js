// import { combineReducers } from 'redux';
import { logger } from 'redux-logger';
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {
  contacts,
  filter,
  loading,
  error,
} from './phonebook/phonebook-reducers';

const rootReducer = combineReducers({
  contacts,
  filter,
  loading,
  error,
});

// const store = createStore(rootReducer, composeWithDevTools());

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export { store }; //persistor
