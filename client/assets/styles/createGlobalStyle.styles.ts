import { createGlobalStyle } from 'styled-components';
import {theme} from './theme'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@300;500&display=swap');

  *, *::before, *::after { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

  body {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black}
  }
`;
