import { Icon, useTheme } from 'native-base';
import { Platform } from 'react-native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Ionicons from '@expo/vector-icons/Ionicons';

import { ArticleDTO } from '@dtos/ArticleDTO';

import { Feed } from '@screens/Feed';
import { FeedCategory } from '@screens/FeedCategory';
import { Contact } from '@screens/Contact';
import { Profile } from '@screens/Profile';
import { Articles } from '@screens/Articles';
import { ArticlesDetals } from '@screens/ArticlesDetails';

import { useTranslation } from 'react-i18next';
import { OpportunityDTO } from '@dtos/OpportunityDTO';
import { Admin } from '@screens/Admin';
import { AcceptPrograms } from '@screens/AcceptPrograms';
import { DeclinedScreen } from '@screens/DeclinedScreen';

type AppRoutes = {
	feed: undefined;
	profile: undefined;
	contact: undefined;
	article: undefined;
	articleDetails: ArticleDTO;
	registerProgramFormPage: undefined;
	onboarding: undefined;
	feedCategory: OpportunityDTO;
	acceptPrograms: undefined;
	declinedScreen: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

type Props = {
	name: string;
	color: string;
	focused: boolean;
	iconsSize: number;
};

function CustomTabIcon({ name, color, focused, iconsSize }: Props) {
	return (
		<Icon
			as={Ionicons}
			name={name}
			color={focused ? color : 'gray[800]'}
			size={iconsSize}
		/>
	);
}

export function AppRoutes() {
	const { sizes, colors } = useTheme();

	const iconsSize = sizes[2];

	const [t, i18n] = useTranslation();

	return (
		<Navigator
			initialRouteName='feed'
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.green[500],
				tabBarInactiveTintColor: colors.gray[800],
				tabBarStyle: {
					backgroundColor: colors.white,
					borderTopWidth: 1,
					height: 90,
					paddingBottom: sizes[6],
					paddingTop: sizes[6],
				},
			}}>

			<Screen
				name='profile'
				component={Profile}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<CustomTabIcon name="person-outline" color={color} focused={focused} iconsSize={iconsSize} />
					),
					tabBarLabel: t("Perfil"),
					tabBarLabelPosition: 'below-icon',
					tabBarLabelStyle: {
						fontSize: 12,
						marginTop: Platform.OS === 'ios' ? 0 : 10,
						paddingTop: 10,
					}
				}}
			/>

			<Screen
				name='feed'
				component={Feed}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<CustomTabIcon name="home-outline" color={color} focused={focused} iconsSize={iconsSize} />
					),
					tabBarLabelPosition: 'below-icon',
					tabBarLabel: t("Programas"),
					tabBarLabelStyle: {
						fontSize: 12,
						marginTop: Platform.OS === 'ios' ? 0 : 10,
						paddingTop: 10,
					}
				}}
			/>

			<Screen
				name='article'
				component={Articles}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<CustomTabIcon name="document-text-outline" color={color} focused={focused} iconsSize={iconsSize} />
					),
					tabBarLabelPosition: 'below-icon',
					tabBarLabel: t("Artigos"),
					tabBarLabelStyle: {
						fontSize: 12,
						marginTop: Platform.OS === 'ios' ? 0 : 10,
						paddingTop: 10,
					}
				}}
			/>

			<Screen
				name='articleDetails'
				component={ArticlesDetals}
				options={{
					tabBarButton: () => null
				}}
			/>

			<Screen
				name='feedCategory'
				component={FeedCategory}
				options={{
					tabBarButton: () => null
				}}

			/>

			<Screen
				name='declinedScreen'
				component={DeclinedScreen}
				options={{
					tabBarButton: () => null
				}}

			/>


			<Screen
				name='contact'
				component={AcceptPrograms}
				options={{
					tabBarIcon: ({ color, focused }) => (
						<CustomTabIcon name="help-circle-outline" color={color} focused={focused} iconsSize={iconsSize} />
					),
					tabBarLabelPosition: 'below-icon',
					tabBarLabel: t("Contato"),
					tabBarLabelStyle: {
						fontSize: 12,
						marginTop: Platform.OS === 'ios' ? 0 : 10,
						paddingTop: 10,
					},

				}}

			/>

		</Navigator >
	)
}