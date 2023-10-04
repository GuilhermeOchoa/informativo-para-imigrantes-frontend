import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MenuSelectCountries } from '@components/MenuSelectCountries';
import { Button, ScrollView, useToast } from 'native-base';
import { useTranslation } from 'react-i18next';
import { getmmigrant, postImmigrant } from '@services/Immigrant';
import { AppError } from '@utils/AppError';
import { ImmigrantDTO } from '@dtos/ImmigrantDTO';

import { Input } from '@components/Input';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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
	password: yup.string().required('Informe a senha.').min(6, "A senha deve ter pelo menos 6 digitos"),
	confirmPassword: yup.string().required('Confirme a senha.').oneOf([yup.ref("password"), ''], 'Senha diferente da anterior'),
});

const UserLogin = () => {
	const toast = useToast();
	const [t, i18n] = useTranslation();
	const [isLoading, setIsLoading] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState('');

	const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

	async function addImmigrant({ email, name, countryOfOrigin, password }: FormDataProps) {
		try {
			setIsLoading(true);

			await postImmigrant({ email, name, countryOfOrigin: selectedCountry, password });

		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : t("Nao foi possivel cadastrar o usuario")

			toast.show({
				title,
				placement: "top",
				bgColor: "red.500"
			});
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<ScrollView style={styles.container}>

			<Text style={styles.title}>Cadastro de usuário</Text>

			<Text style={styles.subtitle}>Informações do usuário</Text>

			<Controller
				control={control}
				name='name'
				render={({ field: { onChange, value } }) => (
					<Input
						placeholder="Digite seu nome"
						onChangeText={onChange}
						style={styles.input}
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
						placeholder="Digite seu email"
						onChangeText={onChange}
						style={styles.input}
						value={value}
						errorMessage={errors.name?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name="password"
				render={({ field: { onChange, value } }) => (
					<Input
						placeholder="Digite sua senha"
						secureTextEntry
						style={styles.input}
						onChangeText={onChange}
						value={value}
						errorMessage={errors.password?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name="confirmPassword"
				render={({ field: { onChange, value } }) => (
					<Input
						placeholder="Confirme sua senha"
						secureTextEntry
						onChangeText={onChange}
						value={value}
						style={styles.input}
						errorMessage={errors.password?.message}
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

			<View style={styles.message}>
				<Entypo style={styles.icon} name="heart" size={24} color="#737373" />
				<View style={styles.messageText}>
					<Text style={styles.boldText}>Compromisso com sua privacidade</Text>
					<Text>
						<Text style={styles.boldText}>Seus dados não serão compartilhados com ninguém. </Text>
						Seu cadastro jamais será distribuído para instituições ou órgãos governamentais de qualquer tipo.
					</Text>
				</View>
			</View>

			<Button
				onPress={handleSubmit(addImmigrant)}
				isLoading={isLoading}
			>
				Finalizar cadastro
			</Button>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	title: {
		fontSize: 22,
		alignSelf: 'center',
		marginTop: 30,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderColor: '#55917F',
		paddingHorizontal: 50,
	},
	subtitle: {
		fontSize: 18,
		alignSelf: 'center',
		paddingBottom: 40,
		marginTop: 40,
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginTop: 10,
		color: "#A3A3A3"
	},
	input: {
		borderBottomWidth: 1,
		borderColor: '#55917F',
		padding: 10,
		marginBottom: 10,
	},
	error: {
		color: 'red',
	},
	message: {
		backgroundColor: '#E1F0C4',
		opacity: 0.6,
		color: '#404040',
		marginTop: 60,
		marginBottom: 30,
		display: 'flex',
		flexDirection: 'row',
		padding: 10,
		height: 120,
		wordWrap: 'break-word',
	},
	messageText: {
		display: 'flex',
		wordWrap: 'break-word',
		padding: 5,

	},
	icon: {
		padding: 5,
	},
	boldText: {
		fontWeight: 'bold',
	},
	button: {
		backgroundColor: '#6BAB90',
		width: 150,
		height: 50,
		fontSize: 16,
		alignSelf: 'center',
		color: '#fff',
	}
});

export default UserLogin;
