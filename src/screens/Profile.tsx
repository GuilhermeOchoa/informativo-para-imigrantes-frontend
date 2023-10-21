import { Input as InputNativeBase, VStack, Text, HStack, Center, Image, Icon, Heading, useToast, Pressable } from "native-base";

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useAuth } from "@hooks/useAuth";
import { MenuSelectLanguage } from "@components/MenuSelectLanguage";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AppError } from "@utils/AppError";
import { Button } from "@components/Button";

type FormDataProps = {
	name: string;
	email: string;
	password: string;
	old_password: string;
	confirm_password: string;
}

const profileSchema = yup.object({
	name: yup.string().required('Informe o nome.'),
	//.transform((value) => !!value ? value : null) = se tem conteudo no input usa o valor que ta la, se nao usa null
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
		})

});

export function Profile() {
	const { t, i18n } = useTranslation();
	const { user, signOut } = useAuth();

	const [isUpdating, setIsUpdating] = useState(false);
	const toast = useToast();
	const [show, setShow] = useState(false);

	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

	async function handleProfileUpdate(data: FormDataProps) {
		try {
			setIsUpdating(true);

			//as proximas 2 linhas atualiza no contexto o nome do usuario quando for editado na tela de perfil
			const userUpdate = user; //dado atual do usuario
			userUpdate.name = data.name; //novos dados do usuario

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
			setIsUpdating(false);
		}
	}


	const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
		defaultValues: {
			name: user.name,
			email: user.email,
		},
		resolver: yupResolver(profileSchema)
	});

	function handleGoBack() {
		signOut();
	}

	function onLanguageChange(language: string) {
		setSelectedLanguage(language);
	}

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

			{user.isLoggedIn ? (<ScrollView contentContainerStyle={{ paddingBottom: 36 }} showsVerticalScrollIndicator={false}>
				<Center mt={6} >

					{/* <TouchableOpacity onPress={handleUserPhotoSelect}>
						<Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
							Alterar foto
						</Text>
					</TouchableOpacity> */}

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
								placeholder="Name"
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
						isLoading={isUpdating}
						rounded="full"
					/>
				</Center>

			</ScrollView>) : (
				<Text>Cria uma conta para acessar seu perfil.</Text>
			)}

		</VStack>
	)


}