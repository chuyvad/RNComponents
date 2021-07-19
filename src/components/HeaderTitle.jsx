import React, { useContext } from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { ThemeContext } from '../context/theme/ThemeContext';

export const HeaderTitle = ({ title }) => {
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={styles.headerContainer}>
            <Text style={{
                ...styles.headerTitle,
                color: colors.text,
            }}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 20,
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 'bold',
    },
});