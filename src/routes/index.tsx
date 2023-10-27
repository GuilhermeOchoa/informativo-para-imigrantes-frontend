import { useTheme, Box } from 'native-base'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { OnboardingRoutes } from './onboarding.routes';

import { useAuth } from '@hooks/useAuth';
import { Loading } from '@components/Loading';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { AdmRoutes } from './adm.routes';
import { InstitutionRoutes } from './institution.routes';

export function Routes() {
	const { colors } = useTheme();
	const { user, isLoadingUserStorageData } = useAuth();

	if (isLoadingUserStorageData) {
		return <Loading />;
	}

	const theme = DefaultTheme;
	theme.colors.background = colors.white;

	console.log("user", user)

	const isLoggedIn = user.isLoggedIn;
	const userType = user.type; // Pode ser "immigrant", "adm" ou "instituicao"
	const showOnboarding = user.showOnboarding;
	const justInformation = user.justInformation;

	let selectedRoutes;

	if (!showOnboarding) {
		selectedRoutes = <OnboardingRoutes />;
	} else {
		if (isLoggedIn) {
			if (userType === "IMMIGRANT") {
				selectedRoutes = <AppRoutes />;
			} else if (userType === "INSTITUTION") {
				selectedRoutes = <InstitutionRoutes />;
			} else if (userType === "ADMIN") {
				selectedRoutes = <AdmRoutes />;
			}
		} else if (justInformation) {
			selectedRoutes = <AppRoutes />;
		} else {
			selectedRoutes = <AuthRoutes />;
		}
	}

	console.log("rota ", selectedRoutes);

	return (
		<Box flex={1} bg="white">
			<NavigationContainer theme={theme}>
				{selectedRoutes}
			</NavigationContainer>
		</Box>
	);
}
