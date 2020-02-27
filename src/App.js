import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyled from './GlobalStyled';
import theme from './styles/theme';
import Router from './Router';
import ScrollToTop from './components/ScrollToTop';
import RemoveFocusWhenNotTab from './components/RemoveFocusWhenNotTab';
import './i18n';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <>
            <Router />
            <GlobalStyled />
            <RemoveFocusWhenNotTab />
          </>
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
