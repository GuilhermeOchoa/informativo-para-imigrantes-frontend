import { InstitutionDTO } from '@dtos/InstitutionDTO';
import { ProgramDTO } from '@dtos/ProgramDTO';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { InstitutionRegistration01 } from '@screens/forms/InstitutionRegistration01';
import { InstitutionRegistration02 } from '@screens/forms/InstitutionRegistration02';
import { InstitutionRegistration03 } from '@screens/forms/InstitutionRegistration03';
import { RegisterProgramForm1 } from '@screens/forms/RegisterProgram/RegisterProgramForm1';
import { RegisterProgramForm2 } from '@screens/forms/RegisterProgram/RegisterProgramForm2';
import { RegisterProgramForm3 } from '@screens/forms/RegisterProgram/RegisterProgramForm3';

import { SelectRegister } from '@screens/SelectRegister';
import UserSignIn from '@screens/UserSignIn';

type AuthRoutes = {
	selectRegister: undefined;
	userSignIn: undefined;
	institutionRegistration01: undefined;
	institutionRegistration02: InstitutionDTO;
	institutionRegistration03: InstitutionDTO;

	registerProgramForm1: undefined;
	registerProgramForm2: ProgramDTO;
	registerProgramForm3: ProgramDTO;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
{/* 
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
			/> */}

			<Screen
				name='registerProgramForm1'
				component={RegisterProgramForm1}
			/>

			<Screen
				name='registerProgramForm2'
				component={RegisterProgramForm2}
			/>

			<Screen
				name='registerProgramForm3'
				component={RegisterProgramForm3}
			/>

		</Navigator>
	)
}