import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { VStack, HStack, Center, Text, Divider, ScrollView } from "native-base";

import { Input, MaskedInputField } from '@components/Input';
import { Button } from '@components/Button';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import { MenuSelectTypeInstitution } from "@components/MenuSelectTypeInstitution";
import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

type FormDataProps = {
	institutionName: string,
	cnpj: string,
	type: string
}

const signUpSchema = yup.object({
	institutionName: yup.string().required('Informe o nome.'),
	cnpj: yup
		.string()
		.required('Informe o CNPJ.')
		.min(18, 'O CNPJ deve conter 14 digitos.'),
	type: yup
		.string()
		.required('Selecione um tipo válido.')
});

export function InstitutionRegistration01() {
	const { t, i18n } = useTranslation();

	const navigation = useNavigation<AuthNavigatorRoutesProps>();
	const [selectedType, setSelectedType] = useState('');

	const { control, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

	function handleSelect(newType: string) {
		setSelectedType(newType)
		setValue("type", newType)
	}

	function addInstitution({ cnpj, institutionName, type }: FormDataProps) {
		navigation.navigate("institutionRegistration02", { cnpj, institutionName, type })
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
									{t("InformacoesInstituicao")}
								</Text>
							</Center>
						</VStack>

					</HStack>

					<Controller
						control={control}
						name='institutionName'
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder={t("nomeDaInstituicao")}
								onChangeText={onChange}
								value={value}
								errorMessage={errors.institutionName?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name='cnpj'
						render={({ field: { onChange, value } }) => (
							<MaskedInputField
								type={1}
								value={value}
								placeholder="CNPJ *"
								onChangeText={onChange}
								keyboardType="number-pad"
								errorMessage={errors.cnpj?.message}
							/>
						)}
					/>

					<Text color="gray.400" fontSize="lg" mt={8} mb={4}>
						{t("tipoInstituicao")}
					</Text>

					<Controller
						control={control}
						name="type"
						render={() => (
							<MenuSelectTypeInstitution
								selectTypeFunction={handleSelect}
								selectedType={selectedType}
								errorMessage={errors.type?.message}
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