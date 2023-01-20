import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { purpleTheme } from './purpleTheme';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export const AppTheme = ({ children }: any) => {
    return (
        <ThemeProvider theme={darkTheme}>            
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
