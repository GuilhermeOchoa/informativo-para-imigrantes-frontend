import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { VStack, HStack, Center, Text, Divider, ScrollView, useToast } from "native-base";

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { InstitutionDTO } from "@dtos/InstitutionDTO";
import { postInstitution } from "@services/Institution";
import { AppError } from "@utils/AppError";

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
			const data = {
				institutionName: institution.institutionName,
				email: institution.email,
				cnpj: institution.cnpj,
				type: institution.type,
				registrantName: institution.registrantName,
				registrantCpf: institution.registrantCpf,
				registrantRole: institution.registrantRole,
				phone: institution.phone,
				attachment: "",
				password
			};

			setIsLoading(true);

			await postInstitution(data);

			toast.show({
				title: "Cadastro realizado com sucesso",
				placement: "top",
				bgColor: "green.500"
			});

			setTimeout(function () {
				navigation.navigate("registerProgramForm1");
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
					name="password"
					render={({ field: { onChange, value } }) => (
						<Input
							placeholder="Senha *"
							secureTextEntry
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
							placeholder="Confirme a Senha *"
							secureTextEntry
							onChangeText={onChange}
							value={value}
							errorMessage={errors.confirmPassword?.message}
						/>
					)}
				/>


				<Center mt={10}>
					<Button
						title="Proximo"
						onPress={handleSubmit(addInstitution)}
						rounded="full"
						variant="solid"
					/>
				</Center>
			</VStack>

		</ScrollView >
	);
}