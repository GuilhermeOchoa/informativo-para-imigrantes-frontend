import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Admin } from '@screens/Admin';
import { PendingPrograms } from '@screens/PendingPrograms';
import { PendingInstitutions } from '@screens/PendingInstitutions';
import { AcceptProgram } from '@screens/AcceptProgram';
import { DeclineScreen } from '@screens/DeclineScreen';

type AdmRoutes = {
    admin: undefined
    pendingPrograms: undefined
    pendingInstitutions: undefined
    acceptProgram: undefined
	declineScreen: undefined
}

export type AdmNavigatorRoutesProps = NativeStackNavigationProp<AdmRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AdmRoutes>();

export function AdmRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='admin'
                component={Admin}
            />
            <Screen
                name='pendingPrograms'
                component={PendingPrograms}
            />
            <Screen
                name='pendingInstitutions'
                component={PendingInstitutions}
            />
            <Screen
				name='acceptProgram'
				component={AcceptProgram}
			/>
			<Screen
				name='declineScreen'
				component={DeclineScreen}
			/>
        </Navigator>
    )
}