import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/createGlobalStyle.styles';
import { theme } from '../assets/styles/theme';

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
