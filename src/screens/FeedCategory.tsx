import React, { useEffect, useState } from "react";
import { VStack, FlatList, useToast, Text, HStack, Icon, Center, Divider, } from "native-base";

import { AppError } from "@utils/AppError";
import { Card } from "@components/Card";

import "@utils/i18n/i18n";
import { useTranslation } from "react-i18next";
import { ProgramDTO } from "@dtos/ProgramDTO";
import { useNavigation, useRoute } from "@react-navigation/native";
import { OpportunityDTO } from "@dtos/OpportunityDTO";
import { Loading } from "@components/Loading";
import { getProgramByType } from "@services/Programs";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function FeedCategory() {
	const navigation = useNavigation<AppNavigatorRoutesProps>()
	const { t, i18n } = useTranslation();
	const route = useRoute();
	const toast = useToast();

	const [isLoading, setIsLoading] = useState(true);

	const [programs, setProgram] = useState<ProgramDTO[]>([]);

	const opportunity = route.params as OpportunityDTO;

	async function fetchPrograms() {
		try {
			setIsLoading(true);

			const response = await getProgramByType(opportunity.type);

			setProgram(response.data);

		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : t("Nao foi possivel carregar os programas");

			toast.show({
				title,
				placement: "top",
				bgColor: "red.500",
			});

		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchPrograms();
	}, [opportunity]);

	function handleGoBack() {
		navigation.navigate("feed");
	}

	return (
		<VStack flex={1} px={6} pb={6} mt={12}>
			<HStack alignItems="center" m={2}>
				<TouchableOpacity >
					<Icon
						as={MaterialIcons}
						name="arrow-back"
						size={7}
						onPress={handleGoBack}
					/>
				</TouchableOpacity>

				<VStack flex={1} mr={7}>
					<Center>
						<Text fontFamily="body" fontSize="xl">
							{t("Programas")}
						</Text>
					</Center>
				</VStack>

			</HStack>

			<Divider my={4} bgColor="green.500" />
			
			{isLoading ? <Loading /> :
				<FlatList
					data={programs}
					renderItem={({ item }) => (
						<Card
							data={item}
							status="approved"
							cardType="program"
							cardContext="myPrograms"
						/>
					)}
					ListEmptyComponent={() => (
						<VStack flex={1} justifyContent="center" alignItems="center" mt={16}>
							<Text fontFamily="body" fontSize="lg">
								{t("Nao ha programas disponiveis")}
							</Text>
						</VStack>
					)}
					showsVerticalScrollIndicator={false}
					_contentContainerStyle={{ paddingBottom: 10 }}
				/>
			}
		</VStack>
	);
}
