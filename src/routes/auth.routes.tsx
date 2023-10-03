import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Onboarding } from '@screens/Onboarding';
import { SelectRegister } from '@screens/SelectRegister';
import UserLogin from '@screens/UserLogin';

type AuthRoutes = {
	selectRegister: undefined;
	userLogin: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>

			<Screen
				name='selectRegister'
				component={SelectRegister}
			/>

			<Screen
				name='userLogin'
				component={UserLogin}
			/>

		</Navigator>
	)
}