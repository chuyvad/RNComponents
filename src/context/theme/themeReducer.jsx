import { DarkTheme } from '@react-navigation/native';

export const lightTheme = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: 'red',
        background: 'white',
        card: 'green',
        text: 'pink',
        border: 'orange',
        notification: 'teal',
    },
};

export const darkTheme = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        ...DarkTheme.colors,
    },
};

export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'setLightTheme':
            return {
                ...lightTheme,
            };
        case 'setDarkTheme':
            return {
                ...darkTheme,
            };
        default:
            return state;
    }
};
