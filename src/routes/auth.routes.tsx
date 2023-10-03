import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { InstitutionRegistration } from '@screens/InstitutionRegistration';

import { SelectRegister } from '@screens/SelectRegister';
import UserLogin from '@screens/UserLogin';

type AuthRoutes = {
	selectRegister: undefined;
	userLogin: undefined;
	institutionRegistration: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

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

			<Screen
				name='institutionRegistration'
				component={InstitutionRegistration}
			/>

		</Navigator>
	)
}