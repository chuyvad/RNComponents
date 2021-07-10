import React from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export const FlastListMenuItem = ({ item, index }) => {
    return (
        <TouchableOpacity
            key={index}
            onPress={item.action}
        >
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        marginVertical: 5,
        fontSize: 18,
    },
});
