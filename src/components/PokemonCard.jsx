import React, {
    useRef,
    useState,
} from 'react';

import {
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/core';

import { FadeInImage } from './FadeInImage';

export const PokemonCard = ({ pokemon }) => {
    const navigation = useNavigation();
    const { width: windowWidth } = useWindowDimensions();
    const [bgColor, setBgColor] = useState('gray');
    const isMounted = useRef(true);

    const handleOnPress = () => {
        navigation.navigate('Details', {
            simplePokemon: pokemon,
            color: bgColor,
        });
    };

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleOnPress}
        >
            <View
                style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.40,
                    backgroundColor: bgColor,
                }}
            >
                <Text style={styles.name}>
                    {pokemon.name}
                    {'\n#' + pokemon.id}
                </Text>
                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 20,
        backgroundColor: 'grey',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 10,
        left: 10,
    },
    pokemonImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: 0,
        top: -10,
    },
});