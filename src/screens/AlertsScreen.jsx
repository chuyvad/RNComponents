import React from 'react';

import {
    Alert,
    Button,
    View,
} from 'react-native';
import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';

export const AlertsScreen = () => {
    const handleOpenAlert = () => {
        Alert.alert(
            'Alert',
            'My Alert',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                },
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('onDismiss'),
            },
        );
    };

    const handleOpenPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder',
            }
        );
    };

    return (
        <View style={globalStyles.globalMargin}>
            <HeaderTitle title={'Alerts'} />
            <Button
                title={'Open Alert'}
                onPress={handleOpenAlert}
            />
            <Button
                title={'Open Prompt'}
                onPress={handleOpenPrompt}
            />
        </View>
    );
};
