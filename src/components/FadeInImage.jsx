import React, { useState } from 'react';

import {
    ActivityIndicator,
    Animated,
    View,
} from 'react-native';

import { useAnimation } from '../hooks/useAnimation';

export const FadeInImage = ({ uri, style }) => {
    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const handleOnLoadEnd = () => {
        setIsLoading(false);
        fadeIn();
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
                isLoading && (
                    <ActivityIndicator
                        style={{
                            position: 'absolute',
                        }}
                        color={'#5856D6'}
                        size={30}
                    />
                )
            }
            <Animated.Image
                source={{ uri }}
                style={[
                    style,
                    {
                        opacity: opacity,
                    },
                ]}
                onLoadEnd={handleOnLoadEnd}
            />
        </View>
    );
};
