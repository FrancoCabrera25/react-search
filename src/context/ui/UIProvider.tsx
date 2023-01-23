import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren, useEffect, useReducer, useState } from 'react';
import { UIContext } from './UIContext';
import { darkTheme, lightTheme } from '../../theme/index';

export type typeTheme = 'light' | 'dark';
type Props = {};

const UIProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
    const [themeSelected, setThemeSelected] = useState<typeTheme>('light');
    const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);
    const changeTheme = (theme: typeTheme): void => {
        const currentTheme = theme === 'light' ? lightTheme : darkTheme;
        setCurrentTheme(currentTheme);
        setThemeSelected(theme);
        localStorage.setItem('theme', theme);
    };

    useEffect(() => {
        const storeTheme = localStorage.getItem('theme') || 'light';
        changeTheme(storeTheme as typeTheme);
    }, []);

    return (
        <UIContext.Provider
            value={{
                currentTheme,
                themeSelected,
                // methods
                changeTheme,
            }}>
            <ThemeProvider theme={currentTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </UIContext.Provider>
    );
};

export default UIProvider;
