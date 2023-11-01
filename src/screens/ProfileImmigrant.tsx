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
import { getImmigrant } from "@services/Immigrant";
import { ImmigrantDTO } from "@dtos/ImmigrantDTO";
import { Loading } from "@components/Loading";

type FormDataProps = {
	name: string;
	email: string;
	password: string;
	old_password: string;
	confirm_password: string;
}

const profileSchema = yup.object({
	name: yup.string().required('Informe o nome.'),
	password: yup.string().min(6, 'A senha deve ter pelo menos 8 digitos.').nullable().transform((value) => !!value ? value : null),
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

	const [dataUser, setDataUser] = useState<ImmigrantDTO | null>(null);
	
	async function handleProfileUpdate(data: FormDataProps) {
		try {
			setIsLoading(true);

			//as proximas 2 linhas atualiza no contexto o nome do usuario quando for editado na tela de perfil
			const userUpdate = user; //dado atual do usuario

			// await api.put('/users', data);

			//a proxima linhas atualiza no contexto o nome do usuario quando for editado na tela de perfil
			// await updateUserProfile(userUpdate); //atualiza tanto no dispositivo quanto no estado

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


	function handleGoBack() {
		signOut();
	}

	async function fetchProfile() {
		try {
			setIsLoading(true);
			console.log(user.email)
			const response = await getImmigrant(user.email);

			setDataUser(response.data);
			console.log(dataUser)
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

	const { control, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
		resolver: yupResolver(profileSchema)
	});

	function onLanguageChange(language: string) {
		setSelectedLanguage(language);
	}

	useEffect(() => {
		fetchProfile();
	}, []);

	useEffect(() => {
		if (dataUser) {
			setValue("name", dataUser.name);
			setValue("email", dataUser.email);
			setIsLoading(false);
		}
	}, [dataUser]);

	return (
		<VStack flex={1} bg="#F8F8F8" px={4} >
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

			{dataUser?.email ? <Loading /> :
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
			}

		</VStack>
	)


}