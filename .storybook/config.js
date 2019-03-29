import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from '../src/theme';

function loadStories() {
  require('./stories');
}

const withTheme = story => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>
);

addDecorator(withTheme);
configure(loadStories, module);
