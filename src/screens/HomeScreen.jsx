import React from 'react';

import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';

import { FlastListMenuItem } from '../components/FlastListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';

export const HomeScreen = ({ navigation }) => {
    const menuItem = [
        {
            title: 'Alerts',
            action: () => navigation.navigate('AlertsScreen', {}),
        },
        {
            title: 'TextInput',
            action: () => navigation.navigate('TextInputScreen', {}),
        },
        {
            title: 'PushToRefresh',
            action: () => navigation.navigate('PushToRefreshScreen', {}),
        },
        {
            title: 'SectionList',
            action: () => navigation.navigate('SectionListScreen', {}),
        },
        {
            title: 'InfiniteScroll',
            action: () => navigation.navigate('InfiniteScrollScreen', {}),
        },
        {
            title: 'Fetch',
            action: () => navigation.navigate('FetchScreen', {}),
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
        <HeaderTitle title={'Options Menu'} />
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
});
