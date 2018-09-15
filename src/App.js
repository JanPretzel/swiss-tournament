import React from 'react';
import { Router } from 'react-router';
import { ThemeProvider } from 'styled-components';
import createBrowserHistory from 'history/createBrowserHistory';

import theme from './theme';
import Routes from './Routes';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
