import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles/globaleStyles.styled.js'
import { theme } from './globalStyles/theme.js';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import { Suspense } from 'react';
import i18n from './i18n';
import './i18n.js';
import { Loader } from './components/Loader/Loader.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<Loader/>}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </Suspense>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


