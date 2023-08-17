import { createStackNavigator } from "@react-navigation/stack";

import { HomeExemple } from "@screens/HomeExemple";
import { NextPage } from "@screens/NextPage";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen
				name="home"
				component={HomeExemple}
			/>

			<Screen
				name="next"
				component={NextPage}
			/>
		</Navigator>
	)
}