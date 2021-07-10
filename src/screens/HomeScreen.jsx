import React from 'react';

import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { FlastListMenuItem } from '../components/FlastListMenuItem';

export const HomeScreen = () => {
    const menuItem = [
        {
            title: 'Alerts',
            action: () => { },
        },
        {
            title: 'TextInput',
            action: () => { },
        },
    ];

    const renderItem = ({ item, index }) => (
        <FlastListMenuItem
            item={item}
            index={index}
        />
    );

    const renderItemSeparator = () => (
        <View style={styles.itemSeparator} />
    );

    const renderListHeader = () => (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Options Menu</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={menuItem}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
                ItemSeparatorComponent={renderItemSeparator}
                ListHeaderComponent={renderListHeader}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    text: {
        marginVertical: 5,
        fontSize: 18,
    },
    itemSeparator: {
        height: 1,
        backgroundColor: 'gray',
    },
    headerContainer: {
        marginVertical: 20,
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 'bold',
    },
});
