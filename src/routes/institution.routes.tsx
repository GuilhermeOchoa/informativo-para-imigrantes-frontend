import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Profile } from '@screens/ProfileImmigrant';
import { MyPrograms } from '@screens/MyPrograms';
import { ProgramDTO } from '@dtos/ProgramDTO';
import { DetailScreen } from '@screens/DetailScreen';
import { RegisterProgramForm1 } from '@screens/forms/RegisterProgram/RegisterProgramForm1';
import { RegisterProgramForm2 } from '@screens/forms/RegisterProgram/RegisterProgramForm2';
import { RegisterProgramForm3 } from '@screens/forms/RegisterProgram/RegisterProgramForm3';

type InstitutionRoutes = {
	profile: undefined
	myPrograms: undefined
	registerProgramForm1: routesData;
	registerProgramForm2: routesData;
	registerProgramForm3: routesData;
	detailScreen: undefined;

}

type routesData = {
	data?: ProgramDTO,
	fetchPrograms: () => void
}


export type InstitutionNavigatorRoutesProps = NativeStackNavigationProp<InstitutionRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<InstitutionRoutes>();

export function InstitutionRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen
				name='myPrograms'
				component={MyPrograms}
			/>
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
			<Screen
				name='detailScreen'
				component={DetailScreen}
			/>
		</Navigator>
	)
}