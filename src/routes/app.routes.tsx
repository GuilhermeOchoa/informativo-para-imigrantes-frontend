//Rotas ja autenticadas, rotas privadas.
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Articles } from '@screens/Articles';

type AppRoutes = {
	article: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen
				name='article'
				component={Articles}
			/>
		</Navigator>
	)
}