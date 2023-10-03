import { useTheme, Box } from 'native-base'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { OnboardingRoutes } from './onboarding.routes';

import { useAuth } from '@hooks/useAuth';
import { Loading } from '@components/Loading';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

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
				{user.showOnboarding ? (
					(
						user.justInformation ? (
							<AppRoutes /> // Nao precisa estar logado para ver as rotas do app
						) : (
							<AuthRoutes /> // Precisa estar logado para ver as rotas do app
						)
					)
				) : (
					<OnboardingRoutes /> // Mostra as rotas do onboarding
				)}
			</NavigationContainer>
		</Box>
	);
}
