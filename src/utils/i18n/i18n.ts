import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform } from 'react-native';

import { NativeModules } from 'react-native';

import en from './en.json';
import pt from './pt.json';

let locale = '';

if (Platform.OS === 'ios') {
    locale = NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]

} else if (Platform.OS === 'android') {
    locale = NativeModules.I18nManager.localeIdentifier
    console.log(locale);
} else {
    locale = 'en'
}

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: locale,
    resources: {
        en: en,
        pt: pt
    },
    react: {
        useSuspense: false
    },
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
