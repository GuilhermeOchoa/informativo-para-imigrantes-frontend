import {
	VStack,
	Text,
	HStack,
	Center,
	Divider,
	Icon,
	FlatList,
	Fab,
	useToast,
} from "native-base";
import "@utils/i18n/i18n";
import { useTranslation } from "react-i18next";
import { AntDesign } from "@expo/vector-icons";
import { InstitutionNavigatorRoutesProps } from "@routes/institution.routes";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@hooks/useAuth";
import { ProgramDTO } from "@dtos/ProgramDTO";
import { getAllProgram, getProgramsByStatus } from "@services/Program";
import { AppError } from "@utils/AppError";

import { Card } from "@components/Card";
import { useState, useEffect } from "react";
import { Loading } from '@components/Loading';

export function PendingPrograms() {
	const { t, i18n } = useTranslation();
	const [isLoading, setIsLoading] = useState(true);
	const navigation = useNavigation<InstitutionNavigatorRoutesProps>();
	const [programs, setPrograms] = useState<ProgramDTO[]>([]);
	const toast = useToast();

	async function fetchPrograms() {
		try {
			setIsLoading(true);

			const response = await getProgramsByStatus("PENDING");

			setPrograms(response.data);
		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError
				? error.message
				: t("Nao foi possivel resgatar os programas pendentes");

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
	}, []);

	return (
		<VStack flex={1} px={6} pb={6} mt={6}>
			{isLoading ? (
				<Loading />
			) : (
				<FlatList
					data={programs}
					renderItem={({ item }) => (
						<Card data={item} status="PENDING" cardType="program" cardContext="myPrograms" />
					)}
					ListEmptyComponent={() => (
						<VStack
							flex={1}
							justifyContent="center"
							alignItems="center"
							mt={16}
						>
							<Text fontFamily="body" fontSize="lg">
								{t("Nao ha programas pendentes")}
							</Text>
						</VStack>
					)}
					showsVerticalScrollIndicator={false}
					_contentContainerStyle={{ paddingBottom: 10 }}
				/>
			)}
		</VStack>
	);
}
