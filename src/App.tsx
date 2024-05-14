import React, { Fragment } from 'react';
import './App.css';
import '@fontsource/bungee';
import '@fontsource/roboto';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { themeOptions } from './styles/theme';
import Homepage from './components/homepage/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const theme = createTheme(themeOptions);

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
