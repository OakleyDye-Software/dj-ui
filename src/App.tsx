import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource-variable/big-shoulders-text';
import '@fontsource/bungee-hairline';
import HeroSection from './components/hero-section/hero';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { themeOptions } from './styles/theme';

const theme = createTheme(themeOptions);

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <HeroSection />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
