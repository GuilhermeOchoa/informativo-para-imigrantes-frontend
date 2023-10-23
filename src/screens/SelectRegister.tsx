import React, { useState } from 'react';
import { Image, Text, VStack, HStack, Center, Divider, Icon, useTheme, Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";

import logo from "@assets/logo.png";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useAuth } from '@hooks/useAuth';

export function SelectRegister() {
	const { sizes, colors } = useTheme();

	const iconsSize = sizes[2];

	const [isDetailUserVisible, setIsDetailUserVisible] = useState(false);
	const [isDetailInstitutionVisible, setIsDetailInstitutionVisible] = useState(false);

	const { updateLocalStorageUserNoLogged } = useAuth();

	const navigation = useNavigation<AuthNavigatorRoutesProps>();

	function handleLogin() {
		navigation.navigate('userSignIn');
	}

	function handleSendToLogin() {
		navigation.navigate("login")
	}

	function handleSendToInformationRoutes() {
		updateLocalStorageUserNoLogged();
	}

	function handleRegisterInstitution() {
		navigation.navigate('registerProgramForm1');
	}

	const openUserDetail = () => {
		setIsDetailUserVisible(true);
		setIsDetailInstitutionVisible(false);
	};

	const openInstitutionDetail = () => {
		setIsDetailUserVisible(false);
		setIsDetailInstitutionVisible(true);
	};

	const DetailInstitution = () => {
		if (isDetailInstitutionVisible) {
			return (
				<Box justifyContent="center" alignItems="center" h={140}>
					<HStack bg="lightGreen.500" rounded="md">
						<VStack>
							<Center p={2}>
								<Icon
									as={Ionicons}
									name="information-circle-outline"
									color={colors.black}
									size={iconsSize}
								/>
							</Center>
						</VStack>

						<VStack flex={1}>
							<Text fontFamily="heading" fontSize="md" py={2}>
								Instituicao de ensino / ONG
							</Text>
							<Text fontFamily="body" fontSize="md" py={2}>
								Cadastro de instituicao para divulgar programas da minha organizacao
							</Text>
						</VStack>
					</HStack>
				</Box>
			);
		} else {
			return null;
		}
	};

	const DetailUser = () => {
		if (isDetailUserVisible) {
			return (
				<Box justifyContent="center" alignItems="center" h={140}>
					<HStack bg="lightGreen.500" rounded="md">
						<VStack>
							<Center p={2}>
								<Icon
									as={Ionicons}
									name="information-circle-outline"
									color={colors.black}
									size={iconsSize}
								/>
							</Center>
						</VStack>

						<VStack flex={1}>
							<Text fontFamily="heading" fontSize="md" py={2}>
								Sou Imigrante em busca de oportunidades
							</Text>
							<Text fontFamily="body" fontSize="md" py={2}>
								Cadastro de imigrante a procura de programas
							</Text>
						</VStack>
					</HStack>
				</Box>
			);
		} else {
			return null;
		}
	};

	function handlePaginaDoArthur() {
		navigation.navigate('registerProgramForm1');
	}

	return (
		<VStack flex={1} px={6} pb={6} mt={10}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<HStack alignItems="center" m={2}>
					<Center flex={1}>
						<Text fontFamily="body" fontSize="xl">
							Cadastro
						</Text>
					</Center>
				</HStack>

				<Divider my={4} bgColor="green.500" />

				<HStack alignItems="center" mt={10}>
					<Center flex={1}>
						<Image rounded="full" source={logo} alt="Image logo" />
					</Center>
				</HStack>

				<VStack mt={10}>
					<Divider my={4} bgColor="green.500" />

					<HStack>
						<TouchableOpacity onPress={handleLogin} >
							<Center>
								<Text fontSize="lg">Procuro informacoes{'        '}</Text>
							</Center>
						</TouchableOpacity>

						<Center flex={1}>
							<Divider orientation="vertical" h={10} bgColor="green.500" />
						</Center>

						<Center w="20%">
							<Icon
								as={Ionicons}
								name="information-circle-outline"
								color={colors.green[700]}
								size={iconsSize}
								onPress={openUserDetail}
							/>
						</Center>
					</HStack>

					<Divider my={4} bgColor="green.500" />

					<HStack>
						<TouchableOpacity onPress={handleRegisterInstitution}>
							<Center>
								<Text fontSize="lg">Sou instituicao de ensino </Text>
							</Center>
						</TouchableOpacity>

						<Center flex={1}>
							<Divider orientation="vertical" h={10} bgColor="green.500" />
						</Center>

						<Center w="20%">
							<Icon
								as={Ionicons}
								name="information-circle-outline"
								color={colors.green[700]}
								size={iconsSize}
								onPress={openInstitutionDetail}
							/>
						</Center>
					</HStack>

					<Divider my={4} bgColor="green.500" />

					<DetailUser />
					<DetailInstitution />

					<Box justifyContent="center" alignItems="center">
						<TouchableOpacity onPress={handleSendToLogin}>
							<Text fontSize="md">
								Ja tem uma conta?{" "}
								<Text underline color={colors.green[700]}>
									Entre aqui
								</Text>{" "}
							</Text>
						</TouchableOpacity>
					</Box>

					<Box justifyContent="center" alignItems="center">
						<TouchableOpacity onPress={handleSendToInformationRoutes}>
							<Text fontSize="md">
								Entrar sem criar conta{" "}
								<Text underline color={colors.green[700]}>
									Entre aqui
								</Text>{" "}
							</Text>
						</TouchableOpacity>
					</Box>
				</VStack>
			</ScrollView>
		</VStack>
	)
}
