import React, { useContext } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import { ThemeContext } from '../context/theme/ThemeContext';

export const FlastListMenuItem = ({ item, index }) => {
    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <TouchableOpacity
            key={index}
            onPress={item.action}
        >
            <Text style={{
                ...styles.text,
                color: colors.text,
            }}>{item.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        marginVertical: 5,
        fontSize: 18,
    },
});
