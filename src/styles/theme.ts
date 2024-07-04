import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#000000',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#95150c',
    },
    secondary: {
      main: '#95150c',
    },
    background: {
      default: '#000000'
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
      default: '#000000'
    }
  },
  typography: {
    fontFamily: 'Bungee',
    body1: {
      fontFamily: 'Roboto',
    },
  },
};