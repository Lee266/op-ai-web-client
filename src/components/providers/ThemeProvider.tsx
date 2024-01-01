'use client';

import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@/app/theme';
import '@/app/globals.css';

export default function MUIThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
