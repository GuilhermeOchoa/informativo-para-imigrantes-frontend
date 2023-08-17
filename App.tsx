import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';
import { Routes } from './src/routes';

export default function App() {

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="dark-content" //cor dos icones de notificacoes
				backgroundColor="transparent"
				translucent={true} //indica que a nossa aplicacao comeca da margem do dispositivo, "por cima" da notificacao
			/>
			<Routes />
		</ThemeProvider>
	);
}
