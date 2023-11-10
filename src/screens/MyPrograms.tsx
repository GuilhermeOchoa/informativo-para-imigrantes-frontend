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
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { InstitutionNavigatorRoutesProps } from "@routes/institution.routes";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@hooks/useAuth";
import { ProgramDTO } from "@dtos/ProgramDTO";
import { Status} from "@dtos/InstitutionDTO";
import { getAllProgram } from "@services/Program";
import { AppError } from "@utils/AppError";

import { Card } from "@components/Card";
import { useState, useEffect } from "react";
import { Loading } from '@components/Loading';
import { TouchableOpacity } from "react-native";
import { getInstitutionsByStatus } from "@services/Institution";

export function MyPrograms() {
	const { t, i18n } = useTranslation();
	const [isLoading, setIsLoading] = useState(true);
	const navigation = useNavigation<InstitutionNavigatorRoutesProps>();
	const [programs, setPrograms] = useState<ProgramDTO[]>([]);
	const { user, isLoadingUserStorageData, signOut } = useAuth();
	const toast = useToast();

	function handleGoBack() {
		signOut();
	}

	const handleRegisterProgramForm = async () => {
		try {
		  // Verificar se o usuário é uma instituição
		  if (user.type === "INSTITUTION" || user.type ==="ADMIN") {
			// Se o usuário for uma instituição, verificar o status antes de permitir o registro do programa
			const institutionStatusResponse = await getInstitutionsByStatus(user.status);
			const institutionStatus = institutionStatusResponse.data?.status;
	  
			if (institutionStatus === Status.APPROVED) {
			  // A instituição está aprovada, permitir navegação para a tela de registro do programa
			  navigation.navigate("registerProgramForm1", { fetchPrograms });
			} else {
			  // A instituição não está aprovada, exibir uma mensagem informando ao usuário
			  toast.show({
				title: t("Sua instituição não está aprovada para criar programas."),
				placement: "top",
				bgColor: "red.500",
			  });
			}
		  } else {
			// Se o usuário não for uma instituição, exibir mensagem informando que apenas instituições podem criar programas
			toast.show({
			  title: t("Apenas instituições podem criar programas."),
			  placement: "top",
			  bgColor: "red.500",
			});
		  }
		} catch (error) {
		  console.error("Erro ao verificar status da instituição:", error);
		  // Tratar erros, se necessário
		}
	  };
	async function fetchPrograms() {
		try {
			setIsLoading(true);

			const response = await getAllProgram(user.email);

			setPrograms(response.data);

		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : t("Nao foi possivel resgatar os programas");

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
							{t("Instituição")}
						</Text>
					</Center>
				</HStack>

			</HStack>

			<Divider my={4} bgColor="green.500" />

			{isLoading ? (
				<Loading />
			) : (
				<>
					<FlatList
						data={programs}
						renderItem={({ item }) => (
							<Card data={item} cardType="program" cardContext="myPrograms" />
						)}
						ListEmptyComponent={() => (
							<VStack
								flex={1}
								justifyContent="center"
								alignItems="center"
								mt={16}
							>
								<Text fontFamily="body" fontSize="lg">
									{t("Nao ha programas disponiveis")}
								</Text>
							</VStack>
						)}
						showsVerticalScrollIndicator={false}
						_contentContainerStyle={{ paddingBottom: 10 }}
						extraData={programs}
					/>
					<Fab
						placement="bottom-right"
						style={{ backgroundColor: "#55917F" }}
						renderInPortal={false}
						shadow={2}
						size="sm"
						icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
						onPress={handleRegisterProgramForm}
					/>
				</>
			)}
		</VStack>
	);
}
