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
import { getInstituitionByEmail, getInstitutionsByStatus } from "@services/Institution";

export function MyPrograms() {
	const { t, i18n } = useTranslation();
	const [isLoading, setIsLoading] = useState(true);
	const navigation = useNavigation<InstitutionNavigatorRoutesProps>();
	const [programs, setPrograms] = useState<ProgramDTO[]>([]);
	const [buttonOpacity, setButtonOpacity] = useState(1);
	const [disable, setDisable] = useState(false);
	const { user, isLoadingUserStorageData, signOut } = useAuth();
	const toast = useToast();

	function handleGoBack() {
		signOut();
	}
const handleRegisterProgramForm = () => {
		navigation.navigate("registerProgramForm1", { fetchPrograms });
	};

	 async function fetchInstitution()  {
		try {
		  // Verificar o status da instituição antes de permitir o registro do programa
		  const institutionStatusResponse = await getInstituitionByEmail(user.email);
			
		  const institutionStatus = institutionStatusResponse.data?.status;
	  
		  if (institutionStatus === Status.APPROVED) {
	
			navigation.navigate("registerProgramForm1", { fetchPrograms });
			setButtonOpacity(1);
			setDisable(false);
		  } else {
			setDisable(true);
			setButtonOpacity(0);
		  }
		} catch (error) {
		  console.error("Erro ao verificar status da instituição:", error);
		 
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
		fetchInstitution();
	}, []);

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
								{disable ? 
								<Text fontFamily="body" fontSize="lg">
								{t("Cadastro em avaliação")}
								</Text>
								:
								<Text fontFamily="body" fontSize="lg">
									{t("Nao ha programas disponiveis")}
								</Text>}
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
						onPress={handleRegisterProgramForm }
						isDisabled={disable}
						opacity={buttonOpacity}
					/>
				</>
			)}
		</VStack>
	);
}
