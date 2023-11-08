import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { VStack, HStack, Center, Text, Divider, ScrollView, useToast } from "native-base";

import { Input, PasswordInput } from '@components/Input';
import { Button } from '@components/Button';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { InstitutionDTO } from "@dtos/InstitutionDTO";
import { postInstitution } from "@services/Institution";
import { AppError } from "@utils/AppError";
import { Platform, KeyboardAvoidingView } from "react-native";

type FormDataProps = {
	password: string,
	confirmPassword: string,
}

const signUpSchema = yup.object({
	password: yup.string().required('Informe a senha.').min(8, "A senha deve ter pelo menos 8 digitos"),
	confirmPassword: yup.string().required('Confirme a senha.').oneOf([yup.ref("password"), ''], 'Senha diferente da anterior'),
});


export function InstitutionRegistration03() {
	const { t, i18n } = useTranslation();
	const toast = useToast();

	const navigation = useNavigation<AuthNavigatorRoutesProps>();
	const [isLoading, setIsLoading] = useState(false);

	const route = useRoute();
	const institution = route.params as InstitutionDTO;

	const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

	async function addInstitution({ password }: FormDataProps) {
		try {
			setIsLoading(true);

			const data = {
				institutionName: institution.institutionName,
				email: institution.email,
				cnpj: removeNumericChars(institution.cnpj),
				type: institution.type,
				registrantName: institution.registrantName,
				registrantCpf: removeNumericChars(institution.registrantCpf),
				registrantRole: institution.registrantRole,
				phone: removeNumericChars(institution.phone),
				attachment: "",
				password
			};

			await postInstitution(data);

			toast.show({
				title: "Cadastro realizado com sucesso",
				placement: "top",
				bgColor: "green.500"
			});

			setTimeout(function () {
				navigation.navigate("login");
			}, 5000);

		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : t("Nao foi possivel cadastrar a instituicao")

			toast.show({
				title,
				placement: "top",
				bgColor: "red.500"
			});
		} finally {
			setIsLoading(false);
		}
	}

	function removeNumericChars(str: any) {
		return str.replace(/\D/g, '');
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
						name="password"
						render={({ field: { onChange, value } }) => (
							<PasswordInput
								onChangeText={onChange}
								value={value}
								type={2}
								placeHolderParam={t("senha")}
								errorMessage={errors.password?.message}
							/>

						)}
					/>

					<Controller
						control={control}
						name="confirmPassword"
						render={({ field: { onChange, value } }) => (
							<PasswordInput
								placeholder={t("confirmeASenha")}
								secureTextEntry
								onChangeText={onChange}
								value={value}
								errorMessage={errors.confirmPassword?.message}
							/>
						)}
					/>

					<Center mt={10}>
						<Button
							title={t("FinalizarCadastro")}
							onPress={handleSubmit(addInstitution)}
							rounded="full"
							variant="solid"
							isLoading={isLoading}
						/>
					</Center>
				</VStack>

			</ScrollView >
		</KeyboardAvoidingView>

	);
}