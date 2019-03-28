import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from './theme';
import Swiss from './views/Swiss';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Swiss />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
