import React from 'react';

import { Router } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import history from '~/services/history';

import Routes from '~/routes';

import { store, persistor } from './store';

import GlobalCSS from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalCSS />
          <ToastContainer
            enableMultiContainer
            containerId="alerts"
            position={toast.POSITION.TOP_RIGHT}
          />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
