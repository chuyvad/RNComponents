import React from 'react';

import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { globalStyles } from '../theme/appTheme';

export const TextInputScreen = () => {
    const { name, phone, onChange } = useForm({
        name: '',
        phone: '',
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={globalStyles.globalMargin}>
                    <HeaderTitle title={'TextInput'} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Name'}
                        placeholderTextColor={'red'}
                        autoCorrect={false}
                        autoCapitalize={'words'}
                        onChangeText={(value) => onChange(value, 'name')}
                    />
                    <TextInput
                        style={[
                            styles.input,
                            { marginTop: 5, },
                        ]}
                        placeholder={'Phone'}
                        placeholderTextColor={'blue'}
                        keyboardType={'phone-pad'}
                        onChangeText={(value) => onChange(value, 'phone')}
                    />
                    <HeaderTitle title={JSON.stringify({ name, phone }, null, 3)} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
    },
});
