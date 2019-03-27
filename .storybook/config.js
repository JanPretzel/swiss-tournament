import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/theme';

function loadStories() {
  require('./stories');
}

const withTheme = story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>;

addDecorator(withTheme);
configure(loadStories, module);
