import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Admin } from '@screens/Admin';
import { PendingPrograms } from '@screens/PendingPrograms';
import { PendingInstitutions } from '@screens/PendingInstitutions';
import { DetailScreen } from '@screens/DetailScreen';

type AdmRoutes = {
    admin: undefined
    pendingPrograms: undefined
    pendingInstitutions: undefined
    detailScreen: undefined

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
				name='detailScreen'
				component={DetailScreen}
			/>
        </Navigator>
    )
}