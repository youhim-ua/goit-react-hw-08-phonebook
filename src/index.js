import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'; //persistor
// import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
