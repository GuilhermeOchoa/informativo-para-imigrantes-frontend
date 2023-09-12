//Rotas ja autenticadas, rotas privadas.
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { useTheme } from 'native-base';

import { Home } from '@screens/Home';
import { SecondPage } from '@screens/SecondPage';
import { Onboarding01 } from '@screens/Onboarding/Onboarding01';
import { Onboarding02 } from '@screens/Onboarding/Onboarding02';
import { Onboarding03 } from '@screens/Onboarding/Onboarding03';
import { Onboarding04 } from '@screens/Onboarding/Onboarding04';
import  Onboarding  from '@screens/Onboarding';

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
				name='onboarding01' 
				component={Onboarding01} 
			/>
			
			<Screen 
				name='onboarding02' 
				component={Onboarding02} 
			/>

			<Screen 
				name='onboarding03' 
				component={Onboarding03} 
			/>
			
			<Screen 
				name='onboarding04' 
				component={Onboarding04} 
			/>

			<Screen 
				name='onboarding' 
				component={Onboarding} 
			/>


		</Navigator>
	)
}