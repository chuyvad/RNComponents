import React, { useState } from 'react';

import {
    ActivityIndicator,
    FlatList,
    StatusBar,
    View,
} from 'react-native';

import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState(
        Array.from({ length: 5 }, (_, i) => i + 1)
    );

    const handleRenderItem = (item) => (
        <FadeInImage
            uri={`https://picsum.photos/id/${item}/500/400`}
            style={{
                width: '100%',
                height: 400,
            }}
        />
    );

    const handleRenderFooter = () => (
        <View
            style={{
                height: 150,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ActivityIndicator size={20} color={'#FF0033'} />
        </View>
    );

    const handleRenderHeader = () => (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title={'InfiniteScroll'} />
        </View>
    );

    const handleLoadMore = () => {
        setNumbers([
            ...numbers,
            ...Array.from({ length: 5 }, (_, i) => i + (numbers.length)),
        ]);
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={'transparent'}
                translucent
                barStyle={'dark-content'}
            />
            <FlatList
                data={numbers}
                ListHeaderComponent={handleRenderHeader}
                keyExtractor={(item, index) => item.toString() + index}
                renderItem={({ item }) => handleRenderItem(item)}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={handleRenderFooter}
            />
        </View>
    );
};
