import { Input as InputNativeBase, VStack, Text, HStack, Center, Image, Icon, Heading, useToast, Pressable } from "native-base";

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useAuth } from "@hooks/useAuth";
import { MenuSelectLanguage } from "@components/MenuSelectLanguage";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AppError } from "@utils/AppError";
import { Button } from "@components/Button";
import { getImmigrant, updateImmigrant } from "@services/Immigrant";
import { ImmigrantDTO } from "@dtos/ImmigrantDTO";
import { Loading } from "@components/Loading";
import { MenuSelectCountries } from "@components/MenuSelectCountries";

type FormDataProps = {
	name: string;
	email: string;
	countryOfOrigin?: string,
	password: string;
	old_password: string;
	confirm_password: string;
}

const profileSchema = yup.object({
	email: yup.string().required('Informe o e-mail.').email('E-mail invalido.'),
	name: yup.string().required('Informe o nome.'),
	password: yup.string().min(8, 'A senha deve ter pelo menos 8 digitos.').nullable().transform((value) => !!value ? value : null),
	confirm_password: yup
		.string()
		.nullable()
		.transform((value) => !!value ? value : null)
		.oneOf([yup.ref('password'), null], 'As senhas devem ser iguais.')
		.when('password', {
			is: (Field: any) => Field,
			then: () => yup
				.string()
				.nullable()
				.required('Informe a confirmação da senha.')
				.transform((value) => !!value ? value : null),
		}),
});

export function ProfileImmigrant() {
	const toast = useToast();
	const { user, signOut } = useAuth();
	const { t, i18n } = useTranslation();
	const [show, setShow] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
	const [selectedCountry, setSelectedCountry] = useState('');

	const [dataUser, setDataUser] = useState<ImmigrantDTO | null>(null);

	async function handleProfileUpdate(data: FormDataProps) {
		try {
			setIsLoading(true);

			let updatedData = {
				name: data.name,
				countryOfOrigin: data.countryOfOrigin,
				password: data.password
			}

			await updateImmigrant(user.email, updatedData);

			//a proxima linhas atualiza no contexto o nome do usuario quando for editado na tela de perfil
			//await updateUserProfile(userUpdate); //atualiza tanto no dispositivo quanto no estado

			toast.show({
				title: 'Perfil atualizado com sucesso',
				placement: 'top',
				bgColor: 'green.500',
			});

		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : "Nao foi possivel carregar os dados do usuario."

			toast.show({
				title,
				placement: "top",
				bgColor: "red.500"
			});
		} finally {
			setIsLoading(false);
		}
	}

	async function fetchProfile() {
		try {
			setIsLoading(true);
			const response = await getImmigrant(user.email);

			setDataUser(response.data);
		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : t("Nao foi possivel carregar os dados do usuario")

			toast.show({
				title,
				placement: "top",
				bgColor: "red.500"
			});
		} finally {
			setIsLoading(false);
		}
	}

	function handleGoBack() {
		signOut();
	}

	function onLanguageChange(language: string) {
		setSelectedLanguage(language);
	}

	const { control, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
		resolver: yupResolver(profileSchema)
	});

	useEffect(() => {
		fetchProfile();
	}, []);

	useEffect(() => {
		if (dataUser) {
			setValue("name", dataUser.name);
			setValue("email", dataUser.email);
			setValue("countryOfOrigin", dataUser.countryOfOrigin);
			setIsLoading(false);
		}
	}, [dataUser]);

	return (
		<VStack flex={1} px={4} >
			<HStack pb={6} mt={12} alignItems="center" justifyContent="space-between">

				<TouchableOpacity onPress={handleGoBack}>
					<HStack alignItems="center">
						<Icon
							as={SimpleLineIcons}
							name="logout"
							color="gray.700"
							size={7}
						/>

						<Text fontFamily="body" fontSize="md" pl={2}>
							Sair da conta
						</Text>
					</HStack>
				</TouchableOpacity>

				<MenuSelectLanguage onLanguageChange={onLanguageChange} />
			</HStack>

			{!user.email ? (
				<Text>Crie uma conta para acessar seu perfil.</Text>
			) : isLoading ? (
				<Loading />
			) : (
				<ScrollView contentContainerStyle={{ paddingBottom: 36 }} showsVerticalScrollIndicator={false}>
					<Center mt={6} >

						<Controller
							control={control}
							name="name"
							render={({ field: { onChange, value } }) => (
								<InputNativeBase
									onChangeText={onChange}
									value={value}
									h={16}
									pl={4}
									InputRightElement={
										<Icon
											as={<SimpleLineIcons name="pencil" />}
											size={6}
											mr="4"
											color="muted.400"
										/>
									}
									bg="white"
									placeholder="Name"
									rounded="full"
									fontFamily="body"
									fontSize="md"
									_focus={{
										borderBottomWidth: 1,
										borderColor: "green.500"
									}}
								/>
							)}
						/>

						<Controller
							control={control}
							name="email"
							render={({ field: { onChange, value } }) => (
								<InputNativeBase
									onChangeText={onChange}
									value={value}
									h={16}
									pl={4}
									InputRightElement={
										<Icon
											as={<SimpleLineIcons name="pencil" />}
											size={6}
											mr="4"
											color="muted.400"
										/>
									}
									placeholder="E-mail"
									rounded="full"
									fontFamily="body"
									fontSize="md"
									mt={4}
									bg="white"
									_focus={{
										borderBottomWidth: 1,
										borderColor: "green.500"
									}}
								/>
							)}
						/>

						<Controller
							control={control}
							name="countryOfOrigin"
							render={() => (
								<MenuSelectCountries
									selectCountryFunction={setSelectedCountry}
									selectedCountry={selectedCountry}
								/>
							)}
						/>

						<Heading color="gray.500" fontSize="md" mb={2} alignSelf="flex-start" mt={12} fontFamily="heading">
							Alterar senha
						</Heading>

						<Controller
							control={control}
							name="old_password"
							render={({ field: { onChange, value } }) => (
								<InputNativeBase
									onChangeText={onChange}
									value={value}
									h={16}
									type={show ? "text" : "password"}
									InputRightElement={
										<Pressable onPress={() => setShow(!show)}>
											<Icon
												as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
												size={6}
												mr="4"
												color="muted.400"
											/>
										</Pressable>
									}
									placeholder="Senha antiga"
									rounded="full"
									fontFamily="body"
									fontSize="md"
									mt={4}
									_focus={{
										borderBottomWidth: 1,
										borderColor: "green.500"
									}}
								/>
							)}
						/>

						<Controller
							control={control}
							name="password"
							render={({ field: { onChange, value } }) => (
								<InputNativeBase
									onChangeText={onChange}
									value={value}
									h={16}
									type={show ? "text" : "password"}
									InputRightElement={
										<Pressable onPress={() => setShow(!show)}>
											<Icon
												as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
												size={6}
												mr="4"
												color="muted.400"
											/>
										</Pressable>
									}
									placeholder="Nova Senha"
									rounded="full"
									fontFamily="body"
									fontSize="md"
									mt={4}
									_focus={{
										borderBottomWidth: 1,
										borderColor: "green.500"
									}}
								/>
							)}
						/>

						<Controller
							control={control}
							name="confirm_password"
							render={({ field: { onChange, value } }) => (
								<InputNativeBase
									onChangeText={onChange}
									value={value}
									h={16}
									type={show ? "text" : "password"}
									InputRightElement={
										<Pressable onPress={() => setShow(!show)}>
											<Icon
												as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
												size={6}
												mr="4"
												color="muted.400"
											/>
										</Pressable>
									}
									placeholder="Confirme a nova senha"
									rounded="full"
									fontFamily="body"
									fontSize="md"
									my={4}
									_focus={{
										borderBottomWidth: 1,
										borderColor: "green.500"
									}}
								/>
							)}
						/>


						<Button
							title="Salvar alterações"
							onPress={handleSubmit(handleProfileUpdate)}
							rounded="full"
						/>
					</Center>

				</ScrollView>
			)}

		</VStack>
	)


}