import React from 'react';

import { BrowserRouter as Router, useHistory } from 'react-router-dom';

import Routes from '~/routes';

import GlobalCSS from './styles/global';

function App() {
  const history = useHistory();
  return (
    <Router history={history}>
      <Routes />
      <GlobalCSS />
    </Router>
  );
}

export default App;
