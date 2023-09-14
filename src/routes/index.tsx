import { useTheme, Box } from 'native-base'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { OnboardingRoutes } from './onboarding.routes';
import { AppRoutes } from './app.routes';

import { useAuth } from '@hooks/useAuth';

export function Routes() {
    const { colors } = useTheme();
    const { user } = useAuth();

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

// const [verify, setVeriy] = useState<Boolean>(false);

// async function storageGetAcessedUser() {
//     try {
//         const isValid = await storageUserGet();
//         setVeriy(isValid);
//         console.log(verify)
//     } catch (error) {
//         throw error;
//     }
// }


// useEffect(() => {
//     storageGetAcessedUser();
// }, [verify]);


// <Box flex={1} bg="white">
//         <NavigationContainer theme={theme}>
//             {verify ? <AppRoutes /> : <OnboardingRoutes />}
//         </NavigationContainer>
//     </Box>