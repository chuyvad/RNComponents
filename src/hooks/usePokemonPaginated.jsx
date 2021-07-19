import {
    useEffect,
    useRef,
    useState,
} from 'react';

import { pokemonApi } from '../api/pokemonApi';

export const usePokemonPaginated = () => {
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
    const [simplePokemonList, setSimplePokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadPokemons = async () => {
        if (nextPageUrl) {
            const response = await pokemonApi.get(nextPageUrl.current);
            nextPageUrl.current = response.data.next;
            const mapped = mapResponseTo(response.data.results);
            setSimplePokemonList([...simplePokemonList, ...mapped]);
        }
        setIsLoading(false);
    };

    const mapResponseTo = (response) => {
        const mappedList = response.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            return {
                id,
                name,
                picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            };
        })
        return mappedList;
    };

    useEffect(() => {
        loadPokemons();
    }, []);

    return {
        isLoading,
        loadPokemons,
        simplePokemonList,
    };
};
