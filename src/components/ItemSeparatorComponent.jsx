import React from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

export const ItemSeparatorComponent = () => (
    <View style={styles.itemSeparator} />
);

const styles = StyleSheet.create({
    itemSeparator: {
        height: 1,
        backgroundColor: 'gray',
    },
});
