import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export const HeaderTitle = ({ title }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 20,
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 'bold',
    },
});