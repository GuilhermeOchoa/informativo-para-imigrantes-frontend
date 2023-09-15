import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';

import { THEME } from './src/theme';
import { Routes } from '@routes/index';

import { AuthContextProvider } from '@contexts/AuthContext';
import i18n from '@utils/i18n/i18n';

import { storageUserGet } from '@storage/storageUser';
import { useEffect } from 'react';

export default function App() {
    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    async function loadIsValidUser() {
        try {
            const user = await storageUserGet();

            i18n.changeLanguage(user.language);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        loadIsValidUser();
    }, []);

    return (

        <NativeBaseProvider theme={THEME}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />

            <AuthContextProvider>
                {fontsLoaded ? <Routes /> : <Loading />}
            </AuthContextProvider>

        </NativeBaseProvider>
    );
}
