import React from 'react';

import {
    ActivityIndicator,
    FlatList,
    View,
} from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const FetchScreen = () => {
    const { simplePokemonList, isLoading, loadPokemons } = usePokemonPaginated();

    const handleRenderItem = ({ item }) => (
        <PokemonCard pokemon={item} />
    );

    const handleOnEndReached = () => {
        loadPokemons();
    };

    const renderFooterComponent = () => (
        <ActivityIndicator
            style={{ height: 100 }}
            size={20}
            color={'gray'}
        />
    );

    const renderHeaderComponent = () => (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title={'Pokedex'} />
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={simplePokemonList}
                numColumns={2}
                renderItem={handleRenderItem}
                keyExtractor={(item) => item.id}
                onEndReached={handleOnEndReached}
                onEndReachedThreshold={0.4}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={renderFooterComponent}
                ListHeaderComponent={renderHeaderComponent}
            />
        </View>
    );
};
