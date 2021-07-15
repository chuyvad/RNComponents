import React, { useState } from 'react';

import {
    RefreshControl,
    ScrollView,
    View,
} from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';

export const PushToRefreshScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState('');

    const handleOnRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            setData('Hola mundo');
        }, 3000);
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleOnRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={'#000000'}
                    colors={['white', 'red', 'orange']}
                    tintColor={'red'}
                />
            }
        >
            <View style={globalStyles.globalMargin}>
                <HeaderTitle title={'PushToRefresh'} />
                <HeaderTitle title={data} />
            </View>
        </ScrollView >
    );
};
