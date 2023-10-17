import { extendTheme } from 'native-base';

export const THEME = extendTheme({
	colors: {
		pink: {
			500: '#FFE2D1',
		},
		lightGreen: {
			500: '#E1F0C4',
		},
		green: {
			700: '#6BAB90',
			500: '#55917F',
		},
		purple: {
			500: '#5E4C5A',
		},
        blue: {
            900: '#0000FF'
        },
		red: {
			500: '#FF0000'
		}
	},
	fonts: {
		heading: 'Roboto_700Bold',
		body: 'Roboto_400Regular',
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 22,
		xl: 28,
	},
	sizes: {
		14: 56,
		33: 148
	}
})