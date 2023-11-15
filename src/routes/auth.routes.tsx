import { InstitutionDTO } from '@dtos/InstitutionDTO';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { InstitutionRegistration01 } from '@screens/forms/InstitutionRegistration01';
import { InstitutionRegistration02 } from '@screens/forms/InstitutionRegistration02';
import { InstitutionRegistration03 } from '@screens/forms/InstitutionRegistration03';
import { Login } from '@screens/Login';

import { SelectRegister } from '@screens/SelectRegister';
import UserSignIn from '@screens/UserSignIn';

type AuthRoutes = {
	selectRegister: undefined;
	userSignIn: undefined;
	institutionRegistration01: undefined;
	institutionRegistration02: InstitutionDTO;
	institutionRegistration03: InstitutionDTO;
	login: undefined;
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
				name='userSignIn'
				component={UserSignIn}
			/>

			<Screen
				name='institutionRegistration01'
				component={InstitutionRegistration01}
			/>

			<Screen
				name='institutionRegistration02'
				component={InstitutionRegistration02}
			/>

			<Screen
				name='institutionRegistration03'
				component={InstitutionRegistration03}
			/>

			<Screen
				name='login'
				component={Login}
			/>

		</Navigator>
	)
}