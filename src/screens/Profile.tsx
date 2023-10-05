import { VStack, Text, HStack, Center, Divider, Icon } from "native-base";

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { useAuth } from "@hooks/useAuth";

export function Profile() {
	const { t, i18n } = useTranslation();
	const { exit } = useAuth();

	function handleGoBack() {
		exit();
	}

	return (
		<VStack flex={1} px={6} pb={6} mt={12}>
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
							{t("Perfil")}
						</Text>
					</Center>
				</HStack>

			</HStack>

			<Divider my={4} bgColor="green.500" />
		</VStack>
	)
}