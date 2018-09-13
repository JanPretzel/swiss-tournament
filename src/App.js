import React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Routes from './Routes';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}

export default App;
