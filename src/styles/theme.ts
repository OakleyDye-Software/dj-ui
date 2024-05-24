import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#95150c',
    },
    secondary: {
      main: '#95150c',
    },
    background: {
      default: 'black'
    }
  },
  typography: {
    fontFamily: 'Bungee',
    body1: {
      fontFamily: 'Roboto',
    },
  },
};

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#95150c',
    },
    secondary: {
      main: '#95150c',
    },
    background: {
      default: 'black'
    }
  },
  typography: {
    fontFamily: 'Bungee',
    body1: {
      fontFamily: 'Roboto',
    },
  },
};