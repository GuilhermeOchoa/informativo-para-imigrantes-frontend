import { useTheme, Box } from 'native-base'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { OnboardingRoutes } from './onboarding.routes';
import { AppRoutes } from './app.routes';

import { useAuth } from '@hooks/useAuth';
import { Loading } from '@components/Loading';

export function Routes() {
    const { colors } = useTheme();
    const { user, isLoadingUserStorageData } = useAuth();

    if (isLoadingUserStorageData) {
        return <Loading />;
    }

    const theme = DefaultTheme;
    theme.colors.background = colors.white;

    return (
        <Box flex={1} bg="white">
            <NavigationContainer theme={theme}>
                {user.isValid ? <AppRoutes /> : <OnboardingRoutes />}
            </NavigationContainer>
        </Box>
    );
}
