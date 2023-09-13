//Rotas ja autenticadas, rotas privadas.
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { useTheme } from 'native-base';

import { Home } from '@screens/Home';
import { SecondPage } from '@screens/SecondPage';
import  {Onboarding}  from '@screens/Onboarding';

type AppRoutes = {
	home: undefined;
	secondPage: undefined;
	onboarding01: undefined;
	onboarding02: undefined;
	onboarding03: undefined;
	onboarding04: undefined;
	onboarding: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen
				name='home'
				component={Home}
			/>

			<Screen
				name='secondPage'
				component={SecondPage}
			/>

			<Screen 
				name='onboarding' 
				component={Onboarding} 
			/>


		</Navigator>
	)
}