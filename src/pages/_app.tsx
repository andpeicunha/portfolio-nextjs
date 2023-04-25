import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { THEME } from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
