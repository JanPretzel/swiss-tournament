import { createGlobalStyle } from 'styled-components';

export interface Theme {
  teamDimensions: number;
  matchHeight: number;
  matchWidth: number;
  matchPadding: number;
  bucketPadding: number;
  colors: {
    red: Color;
    green: Color;
  };
}

interface Color {
  lightest: string;
  lighter: string;
  light: string;
  base: string;
  dark: string;
}

export default {
  teamDimensions: 32,
  matchHeight: 40,
  matchWidth: 140,
  matchPadding: 15,
  bucketPadding: 15,
  colors: {
    red: {
      lightest: '#fcebea',
      lighter: '#f9acaa',
      light: '#ef5753',
      base: '#e3342f',
      dark: '#cc1f1a',
    },
    green: {
      lightest: '#e3fcec',
      lighter: '#a2f5bf',
      light: '#51d88a',
      base: '#38c172',
      dark: '#1f9d55',
    },
  },
} as Theme;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    font-family: Lato, system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue;
    color: #3d4852;
    font-weight: 300;
    font-size: 1rem;
  }
`;
