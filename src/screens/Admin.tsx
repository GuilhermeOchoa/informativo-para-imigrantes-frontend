import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { VStack, Text, HStack, Center, Divider, Icon } from 'native-base';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { PendingInstitutions } from '@screens/PendingInstitutions';
import { PendingPrograms } from '@screens/PendingPrograms';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '@hooks/useAuth';

const Tab = createMaterialTopTabNavigator();

export function Admin() {
	const { t, i18n } = useTranslation();
	const { signOut } = useAuth();

	function handleGoBack() {
		signOut();
	}

	return (
		<VStack flex={1}pb={6} mt={12}>
			<HStack alignItems="center" m={2}>

				<HStack flex={1} alignItems="center" >
					<TouchableOpacity>
						<Icon
							as={MaterialIcons}
							name="logout"
							color="gray.700"
							size={7}
							onPress={handleGoBack}
						/>
					</TouchableOpacity>

					<Center flex={1} mr={7}>
						<Text fontFamily="body" fontSize="xl" >
							{t("Admnistrativo")}
						</Text>
					</Center>
				</HStack>

			</HStack>
			
			<Tab.Navigator
				screenOptions={{
					tabBarLabelStyle: { fontSize: 0, color: '#FFF', fontWeight: 'bold' },
					tabBarItemStyle: { width: 200, height: 50 },
					tabBarStyle: { backgroundColor: '#6BAB90' },
					tabBarIndicatorStyle: { height: 0 },
					swipeEnabled: false,
					tabBarPressColor: 'transparent'
				}}>
				<Tab.Screen
					name="Instituições Pendentes"
					component={PendingInstitutions}
					options={{
						tabBarIcon: ({ focused }) => (
							<View style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: focused ? '#3D7D6A' : '#6BAB90',
								width: 175,
								alignSelf: 'center',
								marginTop: 6,
								borderRadius: 6,
							}}>
								<View style={styles.circle}>
									<Text style={styles.circleNumber}></Text>
								</View>
								<Text style={styles.title}>
									{t("Instituicoes pendentes")}
								</Text>
							</View>
						)
					}}
				/>
				<Tab.Screen
					name="Programas Pendentes"
					component={PendingPrograms}
					options={{
						tabBarIcon: ({ focused }) => (
							<View style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: focused ? '#3D7D6A' : '#6BAB90',
								width: 170,
								alignSelf: 'center',
								marginTop: 6,
								borderRadius: 6,
							}}>
								<View style={styles.circle}>
									<Text style={styles.circleNumber}></Text>
								</View>
								<Text style={styles.title}>
									{t("Programas pendentes")}
								</Text>
							</View>
						)
					}}
				/>
			</Tab.Navigator>
		</VStack>
	);
}

const styles = StyleSheet.create({

	title: {
		fontSize: 14,
		color: 'white',
		fontWeight: 'bold',
		height: '100%',
		width: '100%',
		marginTop: 6,
	},
	circle: {
		width: 15,
		height: 15,
		backgroundColor: '#FFD702',
		borderRadius: 7.5,
		marginRight: 6,
		marginLeft: 30,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	circleNumber: {
		alignSelf: 'center',
		color: '#fff',
		fontWeight: 'bold',
		position: 'absolute',
		fontSize: 11,
	}
})
