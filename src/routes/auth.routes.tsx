import { InstitutionDTO } from '@dtos/InstitutionDTO';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { InstitutionRegistration01 } from '@screens/form/InstitutionRegistration01';
import { InstitutionRegistration02 } from '@screens/form/InstitutionRegistration02';
import { InstitutionRegistration03 } from '@screens/form/InstitutionRegistration03';

import { SelectRegister } from '@screens/SelectRegister';
import UserLogin from '@screens/UserLogin';

type AuthRoutes = {
	selectRegister: undefined;
	userLogin: undefined;
	institutionRegistration01: undefined;
	institutionRegistration02: InstitutionDTO;
	institutionRegistration03: InstitutionDTO;
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
		</Navigator>
	)
}