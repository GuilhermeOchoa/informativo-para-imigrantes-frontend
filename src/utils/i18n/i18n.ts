import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform } from 'react-native';

import { NativeModules } from 'react-native';

import en from './en.json';
import pt from './pt.json';
import fr from './fr.json';
import es from './es.json';

let locale = '';

// if (Platform.OS === 'ios') {
// 	locale = NativeModules.SettingsManager.settings.AppleLocale.substring(0, 2) ||
// 		NativeModules.SettingsManager.settings.AppleLanguages[0].substring(0, 2);

// } else if (Platform.OS === 'android') {
// 	locale = NativeModules.I18nManager.localeIdentifier.substring(0, 2);
// } else {
// 	locale = 'en'
// }

// if (locale !== 'en' && locale !== 'pt' && locale !== 'es' && locale !== 'fr') {
// 	locale = 'en';
// }

i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	lng: locale,
	resources: {
		en: en,
		pt: pt,
		fr: fr,
		es: es
	},
	react: {
		useSuspense: false
	},
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
