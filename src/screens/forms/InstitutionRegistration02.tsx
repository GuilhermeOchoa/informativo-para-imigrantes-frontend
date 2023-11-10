import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { VStack, HStack, Center, Text, Divider, ScrollView } from "native-base";

import { Input, MaskedInputField } from '@components/Input';
import { Button } from '@components/Button';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { InstitutionDTO } from "@dtos/InstitutionDTO";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";

type FormDataProps = {
	registrantName: string,
	registrantCpf: string,
	registrantRole: string,
	email: string,
	phone: string,
}

const signUpSchema = yup.object({
	registrantName: yup.string().required('Informe o nome.'),
	registrantCpf: yup
		.string()
		.required('Informe o CPF.')
		.min(14, 'O CPF deve conter 11 digitos.'),
	registrantRole: yup.string().required('Informe o cargo.'),
	email: yup
		.string()
		.required('Informe o e-mail.')
		.email('Informe um e-mail valido.'),
	phone: yup
		.string()
		.required('Informe o numero de telefone.'),
});


export function InstitutionRegistration02() {
	const { t, i18n } = useTranslation();
	const [messageError, setMessageError] = useState('');

	const navigation = useNavigation<AuthNavigatorRoutesProps>();

	const route = useRoute();
	const institution = route.params as InstitutionDTO;

	const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

	function addInstitution({ registrantName, registrantCpf, registrantRole, email, phone }: FormDataProps) {
		const data = {
			institutionName: institution.institutionName,
			cnpj: institution.cnpj,
			type: institution.type,
			registrantName,
			registrantCpf,
			registrantRole,
			email,
			phone
		};
		console.log(data)

		navigation.navigate("institutionRegistration03", data)
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
								<Text fontFamily="body" fontSize="xl" textAlign="center">
									{t("CadastroInstituicao")}
								</Text>
							</Center>

							<Divider my={4} bgColor="green.500" />

							<Center>
								<Text fontFamily="body" fontSize="lg" pt={8} textAlign="center">
									{t("InformacoesCadastrante")}
								</Text>
							</Center>
						</VStack>

					</HStack>

					<Controller
						control={control}
						name='registrantName'
						render={({ field: { onChange, value } }) => (
							<Input
								value={value}
								placeholder={t("informeSeuNome")}
								onChangeText={onChange}
								errorMessage={errors.registrantName?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name='registrantCpf'
						render={({ field: { onChange, value } }) => (
							<MaskedInputField
								type={2}
								value={value}
								placeholder="CPF *"
								keyboardType="number-pad"
								onChangeText={onChange}
								errorMessage={errors.registrantCpf?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name='registrantRole'
						render={({ field: { onChange, value } }) => (
							<Input
								value={value}
								onChangeText={onChange}
								placeholder={t("cargo")}
								errorMessage={errors.registrantRole?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name='email'
						render={({ field: { onChange, value } }) => (
							<Input
								value={value}
								placeholder="E-mail *"
								autoCapitalize="none"
								onChangeText={onChange}
								keyboardType="email-address"
								errorMessage={errors.email?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name='phone'
						render={({ field: { onChange, value } }) => (
							<MaskedInputField
								type={3}
								value={value}
								onChangeText={onChange}
								keyboardType="number-pad"
								placeholder={t("telefone")}
								errorMessage={errors.phone?.message}
							/>
						)}
					/>

					<Center mt={10}>
						<Button
							title={t("Proximo")}
							onPress={handleSubmit(addInstitution)}
							rounded="full"
							variant="outline"
						/>
					</Center>
				</VStack>

			</ScrollView >
		</KeyboardAvoidingView>
	);
}