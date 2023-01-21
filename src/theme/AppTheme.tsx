import { ThemeProvider } from '@emotion/react';
import { Container, createTheme, CssBaseline } from '@mui/material';
import { purpleTheme } from './purpleTheme';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const AppTheme = ({ children }: any) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline />
            <Container>{children}</Container>
        </ThemeProvider>
    );
};
