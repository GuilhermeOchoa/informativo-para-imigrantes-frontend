import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Onboarding } from '@screens/Onboarding';

type AppRoutes = {
    onboarding: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function OnboardingRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='onboarding'
                component={Onboarding}
            />
        </Navigator>
    )
}