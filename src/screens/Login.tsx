import React, { useState } from "react";
import {
	Image,
	Text,
	VStack,
	HStack,
	Center,
	useTheme,
	Input as InputNativeBase,
	Icon,
	Pressable,
	ScrollView,
} from "native-base";

import logo from "@assets/logo.png";
import "@utils/i18n/i18n";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { MenuSelectLanguage } from "@components/MenuSelectLanguage";
import { Button } from "@components/Button";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { MaterialIcons } from "@expo/vector-icons";
import { AppError } from "@utils/AppError";

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "@hooks/useAuth";
import { TouchableOpacity } from "react-native";
import { PasswordInput } from "@components/Input";

type FormDataProps = {
	email: string,
	password: string
}

const signUpSchema = yup.object({
	email: yup
		.string()
		.required('Informe o e-mail.')
		.email('Informe um e-mail valido.'),
	password: yup.string().required('Informe a senha.').min(8, "A senha deve ter pelo menos 8 digitos"),
});

export function Login() {
	const { t, i18n } = useTranslation();

	const navigation = useNavigation<AppNavigatorRoutesProps>();
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
	const [messageError, setMessageError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const { signIn } = useAuth();

	const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

	function onLanguageChange(language: string) {
		setSelectedLanguage(language);
	}

	async function handleLogin({ email, password }: FormDataProps) {
		try {
			setIsLoading(true);

			await signIn(email, password);

			setMessageError('')

		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : t("Email ou senha incorreta")

			setMessageError(title);

		} finally {
			setIsLoading(false);
		}
	}

	function handleForgotPassword() {
		alert("adicionar redirect para tela de esqueci minha senha");
	};

	function handleGoBack() {
		navigation.goBack()
	};

	return (

		<VStack flex={1} bg="#F8F8F8">
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
				<HStack justifyContent="flex-end" alignItems="flex-end" mt={10} mr={2}>
					<MenuSelectLanguage onLanguageChange={onLanguageChange} />
				</HStack>

				<Center>
					<Text fontSize="xl">{t("Bem-vindo")}</Text>
				</Center>

				<HStack alignItems="center" mt={4}>
					<Center flex={1}>
						<Image rounded="full" source={logo} alt="Image logo" />
					</Center>
				</HStack>

				<VStack mt={8} alignItems="center">

					<Controller
						control={control}
						name='email'
						render={({ field: { onChange, value } }) => (
							<InputNativeBase
								onChangeText={onChange}
								value={value}
								w="90%"
								h={14}
								InputLeftElement={
									<Icon
										as={<MaterialIcons name="person" />}
										size={6}
										ml="4"
										color="gray.400"
									/>
								}
								placeholder="E-mail"
								keyboardType="email-address"
								autoCapitalize="none"
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
						name="password"
						render={({ field: { onChange, value } }) => (
							<PasswordInput
								onChangeText={onChange}
								value={value}
								type={1}
								placeholder="Senha"
								ml={5}
							/>
						)}
					/>

					<Center h="20%" pt={2}>
						<Text color="red.500" fontSize="md">{messageError}</Text>
						<Text color="red.500" fontSize="md">{errors.email?.message}</Text>
						<Text color="red.500" fontSize="md">{errors.password?.message}</Text>
					</Center>

					<Button
						title={t("Entrar")}
						onPress={handleSubmit(handleLogin)}
						isLoading={isLoading}
						rounded="full"
					/>

					<TouchableOpacity onPress={handleForgotPassword}>
						<Center pt={8}>
							<Text underline color="purple.500" fontSize="md">{t("Esqueci a senha")}</Text>
						</Center>
					</TouchableOpacity>

					<Center pt={4}>
						<TouchableOpacity onPress={handleGoBack}>
							<Text color=".500" fontSize="md">{t("Nao tem uma conta")}{" "}
								<Text bold underline color="green.500">{t("Cadastre-se aqui")}</Text>
							</Text>
						</TouchableOpacity>
					</Center>
				</VStack>

			</ScrollView>
		</VStack>
	);
}
