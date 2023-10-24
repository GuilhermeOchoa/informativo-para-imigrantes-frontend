import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Profile } from '@screens/Profile';

type AdmRoutes = {
    profile: undefined
}

export type AdmNavigatorRoutesProps = NativeStackNavigationProp<AdmRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AdmRoutes>();

export function AdmRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='profile'
                component={Profile}
            />
        </Navigator>
    )
}