import React, { useEffect, useState } from 'react';
import { VStack, Center, FlatList, HStack, useToast, Divider, Text } from 'native-base';

import { OpportunityDTO } from '@dtos/OpportunityDTO';
import { getCategoriesWithCount } from '@services/Programs';
import { OpportunityCads } from '@components/OpportunityCard';
import { AppError } from '@utils/AppError';
import { t } from 'i18next';
import { Loading } from '@components/Loading';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function Feed() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()
	const [isLoading, setIsLoading] = useState(true);
	const toast = useToast();

	const [oportunidades, setOportunidades] = useState<OpportunityDTO[] | null>(null);

	async function fetchData() {
		try {
			setIsLoading(true);

			const response = await getCategoriesWithCount();
			const data = response.data;

			const oportunidadesRecebidas: OpportunityDTO[] = [];

			for (const [type, quantity] of Object.entries(data)) {
				const quantityNumber = Number(quantity);
				oportunidadesRecebidas.push(new OpportunityDTO(type, quantityNumber));
			}

			setOportunidades(oportunidadesRecebidas);
		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : t("Nao foi possivel carregar os tipos de programas")

			toast.show({
				title,
				placement: "top",
				bgColor: "red.500"
			});
		} finally {
			setIsLoading(false);
		}
	}

	function handleGoProgramByCategory() {
		console.log("êntrou")
        navigation.navigate("feedCategory");
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<VStack flex={1} px={6} pb={6} mt={12}>
			<HStack alignItems="center" m={2}>
				<VStack flex={1}>
					<Center>
						<Text fontFamily="body" fontSize="xl">
							{t("Oportunidades")}
						</Text>
					</Center>
				</VStack>
			</HStack>

			<Divider my={4} bgColor="green.500" />

			{isLoading ? <Loading /> :
				<FlatList
					data={oportunidades}
					keyExtractor={item => item.type}
					renderItem={({ item }) => (
						<OpportunityCads
							onPress={() => handleGoProgramByCategory()}
							data={item}
						/>
					)}
					ListEmptyComponent={() => (
						<VStack flex={1} justifyContent="center" alignItems="center" mt={16}>
							<Text fontFamily="body" fontSize="md">
								{t("No momento não há oportunidades disponíveis.")}
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
