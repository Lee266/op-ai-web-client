import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#808080',
      light: '#f2f2f2',
      dark: '#404040',
    },
    error: {
      main: '#d81b60',
    },
    success: {
      main: '#43a047',
    },
    info: {
      main: '#1397a7',
    },
    background: {
      default: grey[100],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
