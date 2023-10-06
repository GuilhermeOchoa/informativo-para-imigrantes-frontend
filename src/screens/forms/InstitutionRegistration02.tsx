import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { VStack, HStack, Center, Text, Divider, ScrollView } from "native-base";

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { InstitutionDTO } from "@dtos/InstitutionDTO";

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
		.matches(/^\d{11}$/, 'O CPF deve conter 11 digitos numericos.'),
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

		navigation.navigate("institutionRegistration03", data)
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<VStack flex={1} px={6} pb={6} mt={12}>

				<HStack alignItems="center" m={2} mb={6}>

					<VStack flex={1}>
						<Center>
							<Text fontFamily="body" fontSize="xl">
								{t("Cadastro de Instituição")}
							</Text>
						</Center>

						<Divider my={4} bgColor="green.500" />

						<Center>
							<Text fontFamily="body" fontSize="lg" pt={8}>
								{t("Informações do cadastrante")}
							</Text>
						</Center>
					</VStack>

				</HStack>

				<Controller
					control={control}
					name='registrantName'
					render={({ field: { onChange, value } }) => (
						<Input
							placeholder="Informe seu nome *"
							onChangeText={onChange}
							value={value}
							errorMessage={errors.registrantName?.message}
						/>
					)}
				/>

				<Controller
					control={control}
					name='registrantCpf'
					render={({ field: { onChange, value } }) => (
						<Input
							placeholder="CPF *"
							onChangeText={onChange}
							value={value}
							errorMessage={errors.registrantCpf?.message}
						/>
					)}
				/>

				<Controller
					control={control}
					name='registrantRole'
					render={({ field: { onChange, value } }) => (
						<Input
							placeholder="Cargo *"
							onChangeText={onChange}
							value={value}
							errorMessage={errors.registrantRole?.message}
						/>
					)}
				/>

				<Controller
					control={control}
					name='email'
					render={({ field: { onChange, value } }) => (
						<Input
							placeholder="Email *"
							onChangeText={onChange}
							value={value}
							errorMessage={errors.email?.message}
						/>
					)}
				/>

				<Controller
					control={control}
					name='phone'
					render={({ field: { onChange, value } }) => (
						<Input
							placeholder="Telefone *"
							onChangeText={onChange}
							value={value}
							errorMessage={errors.phone?.message}
						/>
					)}
				/>

				<Center mt={10}>
					<Button
						title="Proximo"
						onPress={handleSubmit(addInstitution)}
						rounded="full"
						variant="outline"
					/>
				</Center>
			</VStack>

		</ScrollView >
	);
}