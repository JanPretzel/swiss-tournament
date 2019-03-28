import { createGlobalStyle } from 'styled-components';

export interface Theme {
  teamDimensions: number;
  matchHeight: number;
  matchWidth: number;
  matchPadding: number;
  bucketPadding: number;
}

export default {
  teamDimensions: 32,
  matchHeight: 40,
  matchWidth: 140,
  matchPadding: 15,
  bucketPadding: 15,
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
