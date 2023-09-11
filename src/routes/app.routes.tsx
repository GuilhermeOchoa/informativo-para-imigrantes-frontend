//Rotas ja autenticadas, rotas privadas.
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useTheme } from 'native-base';
import { InfoDetail } from '@screens/InfoDetails/InfoDetail';
import { Articles } from '@screens/Articles';

type AppRoutes = {
	home: undefined;
	secondPage: undefined;
	infoDetail: undefined;
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

			<Screen 
				name='infoDetail' 
				component={InfoDetail} 
			/>
		</Navigator>
	)
}