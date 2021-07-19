import React, { useContext } from 'react';

import {
    Text,
    View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { globalStyles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {
    const { setDarkTheme, setLightTheme, theme } = useContext(ThemeContext);

    const changeTheme = () => {
        if (theme.currentTheme == 'light') {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    };

    return (
        <View style={globalStyles.globalMargin}>
            <HeaderTitle title='Theme' />
            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    backgroundColor: theme.colors.primary,
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={changeTheme}
            >
                <Text
                    style={{
                        color: theme.colors.text,
                        textAlign: 'center',
                        fontSize: 22,
                    }}
                >
                    Light / Dark
                </Text>
            </TouchableOpacity>
        </View>
    );
};
