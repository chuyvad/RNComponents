import React, {
    createContext,
    useEffect,
    useReducer,
} from 'react';

import {
    Appearance,
    AppState,
    useColorScheme,
} from 'react-native';

import {
    darkTheme,
    lightTheme,
    themeReducer,
} from './themeReducer';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const colorSchema = useColorScheme();

    const [theme, dispatch] = useReducer(
        themeReducer,
        (Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme,
    );

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                    ? setLightTheme()
                    : setDarkTheme()
            }
        });
    }, []);

    /** 
     * iOS only
     */
    // useEffect(() => {
    //     if (colorSchema === 'dark') {
    //         setDarkTheme();
    //     } else {
    //         setLightTheme();
    //     }
    // }, [colorSchema]);

    const setDarkTheme = () => {
        dispatch({ type: 'setDarkTheme' });
    };

    const setLightTheme = () => {
        dispatch({ type: 'setLightTheme' });
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
