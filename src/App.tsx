import React, { Fragment } from 'react';
import './App.css';
import '@fontsource/bungee';
import '@fontsource/roboto';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { themeOptions } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import DJProvider from './logic/state/GlobalContext';
import { SnackbarProvider } from 'notistack';
import { SnackbarConfigurator } from './components/common/snackbarConfig';
import Router from './routing/router';

const theme = createTheme(themeOptions);

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <SnackbarProvider maxSnack={3}>
            <SnackbarConfigurator />
            <BrowserRouter>
              <DJProvider>
                <div style={{ width: '100%', overflowX: 'hidden' }}>
                  <Router />
                </div>
              </DJProvider>
            </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
