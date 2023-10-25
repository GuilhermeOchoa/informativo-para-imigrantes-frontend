import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Profile } from '@screens/Profile';

type InstitutionRoutes = {
    profile: undefined
}

export type InstitutionNavigatorRoutesProps = NativeStackNavigationProp<InstitutionRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<InstitutionRoutes>();

export function InstitutionRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='profile'
                component={Profile}
            />
        </Navigator>
    )
}