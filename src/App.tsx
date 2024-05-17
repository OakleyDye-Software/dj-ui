import React, { Fragment } from 'react';
import './App.css';
import '@fontsource/bungee';
import '@fontsource/roboto';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { themeOptions } from './styles/theme';
import Homepage from './components/homepage/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DJProvider from './logic/state/GlobalContext';
import { SnackbarProvider } from 'notistack';
import { SnackbarConfigurator } from './components/common/snackbarConfig';
// require('dotenv').config();

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
                <Routes>
                  <Route index element={<Homepage />} />
                </Routes>
              </DJProvider>
            </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
