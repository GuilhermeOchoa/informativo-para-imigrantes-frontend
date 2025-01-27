import React, { useState } from 'react';
import { AppError } from '@utils/AppError';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { postImmigrant } from '@services/Immigrant';
import { useNavigation } from "@react-navigation/native";
import { MenuSelectCountries } from '@components/MenuSelectCountries';
import { VStack, ScrollView, useToast, HStack, Center, Text, Divider, Box, Icon } from 'native-base';

import { Input, PasswordInput } from '@components/Input';

import * as yup from 'yup'
import { Button } from '@components/Button';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { KeyboardAvoidingView, Platform } from 'react-native';

type FormDataProps = {
	email: string,
	name: string,
	countryOfOrigin?: string,
	password: string,
	confirmPassword: string;
}

const signUpSchema = yup.object({
	email: yup.string().required('Informe o e-mail.').email('E-mail invalido.'),
	name: yup.string().required('Informe o nome.'),
	password: yup.string().required('Informe a senha.').min(8, "A senha deve ter pelo menos 8 digitos"),
	confirmPassword: yup.string().required('Confirme a senha.').oneOf([yup.ref("password"), ''], 'Senha diferente da anterior'),
});

const UserSignIn = () => {
	const toast = useToast();
	const [t, i18n] = useTranslation();

	const [isLoading, setIsLoading] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState('');

	const navigation = useNavigation<AuthNavigatorRoutesProps>();

	const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

	async function addImmigrant({ email, name, countryOfOrigin, password }: FormDataProps) {
		try {
			setIsLoading(true);

			await postImmigrant({ email, name, countryOfOrigin: selectedCountry, password });

			toast.show({
				title: "Cadastro realizado com sucesso",
				placement: "top",
				bgColor: "green.500",
				duration: 3000,
			});

			navigation.navigate("login");

		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : t("Nao foi possivel cadastrar o usuario")

			toast.show({
				title,
				placement: "top",
				bgColor: "red.500"
			});

		} finally {
			setTimeout(() => { setIsLoading(false); }, 750)
		}
	}

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 70}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<VStack flex={1} px={6} pb={6} mt={12}>

					<HStack alignItems="center" m={2} mb={6}>

						<VStack flex={1}>
							<Center>
								<Text fontFamily="body" fontSize="xl">
									{t("Cadastro de Usuario")}
								</Text>
							</Center>

							<Divider my={4} bgColor="green.500" />

							<Center>
								<Text fontFamily="body" fontSize="lg" pt={6}>
									{t("Informações do usuário")}
								</Text>
							</Center>
						</VStack>

					</HStack>

					<Controller
						control={control}
						name='name'
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Nome *"
								onChangeText={onChange}
								value={value}
								errorMessage={errors.name?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="email"
						render={({ field: { onChange, value } }) => (
							<Input
								value={value}
								placeholder="Email *"
								autoCapitalize="none"
								onChangeText={onChange}
								keyboardType='email-address'
								errorMessage={errors.email?.message}
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
								type={2}
								placeHolderParam={t("senha")}
								errorMessage={errors.password?.message}
								mt={0}
							/>
						)}
					/>

					<Controller
						control={control}
						name="confirmPassword"
						render={({ field: { onChange, value } }) => (
							<PasswordInput
								placeholder={t("confirmeASenha")}
								onChangeText={onChange}
								value={value}
								errorMessage={errors.confirmPassword?.message}
								mt={0}
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

					<Box justifyContent="center" alignItems="center" py={12} >
						<HStack bg="lightGreen.500" rounded="md" p={2}>

							<VStack>
								<Center p={1}>
									<Icon
										as={Ionicons}
										name="heart-sharp"
									/>
								</Center>
							</VStack>

							<VStack flex={1}>
								<Text bold fontSize="md">Compromisso com sua privacidade</Text>
								<Text fontSize="md">
									<Text bold >Seus dados não serão compartilhados com ninguém. </Text>
									Seu cadastro jamais será distribuído para instituições ou órgãos governamentais de qualquer tipo.
								</Text>
							</VStack>
						</HStack>
					</Box>

					<Center>
						<Button
							title="Finalizar Cadastro"
							isLoading={isLoading}
							_loading={{
								backgroundColor: "green.700"
							}}
							onPress={handleSubmit(addImmigrant)}
							rounded="full"
						/>
					</Center>
				</VStack>

			</ScrollView >
		</KeyboardAvoidingView>

	);
};

export default UserSignIn;
