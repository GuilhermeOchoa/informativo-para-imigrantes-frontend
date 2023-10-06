import { useForm, Controller, useFormContext } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView, useToast } from "native-base"

import { parse } from "date-fns"

import { Button } from "@components/Button"
import { TextArea } from "@components/TextArea"
import { TagSelection } from "@components/TagSelection"
import FileAttachment from "@components/FileAttachment"

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { TagOptions } from "@utils/SelectOptions"
import { postProgramForm } from "@services/Forms"
import { useNavigation, useRoute } from "@react-navigation/native"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"
import { useTranslation } from "react-i18next"
import { ProgramDTO } from "@dtos/ProgramDTO"
import { AppError } from "@utils/AppError"
import { useState } from "react"

type FormDataProps = {
	tags?: string,
	informacoesAdicionais?: string,
}

const signUpSchema = yup.object({
	// tags: yup.string().required('Informe o local.'),
	// informacoesAdicionais: yup.string().required('Informe o idioma.'),
});

export function RegisterProgramForm3() {

	const navigation = useNavigation<AuthNavigatorRoutesProps>();
	const { t, i18n } = useTranslation();
	const toast = useToast();

	const route = useRoute();
	const program = route.params as ProgramDTO;

	const [isLoading, setIsLoading] = useState(false);

	const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

	async function onSubmit() {
		try {
			const data = {
				name: "Meu Programa",
				institutionId: 1,
				description: "Descri��o do meu programa",
				link: "https://exemplo.com/programa",
				timeDuration: 12,
				minimalRequirements: ["Requisito 1", "Requisito 2"],
				timeEnrollment: 30,
				language: "Portugu�s",
				initialDate: "2023-10-05",
				endDate: "2023-12-31",
				status: "ACEITO"
			};

			setIsLoading(true);
			console.log(data)

			// await postProgramForm(data);

			toast.show({
				title: "Cadastro realizado com sucesso",
				placement: "top",
				bgColor: "green.500"
			});

			setTimeout(function () {
				navigation.navigate("selectRegister");
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

	// const onSubmit = (data: any) => {
	// 	console.log(data)
	// 	//todo transform dates from string to Date

	// 	const { dataInicio,
	// 		dataFim,
	// 		nomePrograma,
	// 		descricao,
	// 		local,
	// 		idioma,
	// 		dataInicioPrograma,
	// 		dataFimPrograma,
	// 		link,
	// 		tags,
	// 		informacoesAdicionais
	// 	} = data

	// 	const description = descricao;

	// 	const dataInicioParsed = parse(dataInicio, 'dd/MM/yyyy', new Date())
	// 	const dataFimParsed = parse(dataFim, 'dd/MM/yyyy', new Date())
	// 	const dataInicioProgramaParsed = parse(dataInicioPrograma, 'dd/MM/yyyy', new Date())
	// 	const dataFimProgramaParsed = parse(dataFimPrograma, 'dd/MM/yyyy', new Date())

	// 	const dataToSend = {
	// 		dataInicioParsed,
	// 		dataFimParsed,
	// 		nomePrograma,
	// 		description,
	// 		local,
	// 		idioma,
	// 		dataInicioProgramaParsed,
	// 		dataFimProgramaParsed,
	// 		link,
	// 		tags,
	// 		informacoesAdicionais
	// 	}
	// 	console.log("dataToSend", dataToSend)
	// 	return postProgramForm(dataToSend)
	// }

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
							<Text fontFamily="body" fontSize="lg" pt={2}>
								{t("Informacoes da Instituição")}
							</Text>
						</Center>
					</VStack>

				</HStack>

				<ScrollView>

					<VStack flex={1} mt={6}>
						<Controller
							control={control}
							rules={{
								maxLength: 10,
							}}

							render={({ field: { onChange } }) => (
								<TagSelection
									{...register("tags")}
									placeholder="Selecione as tags do programa"
									onValueChange={value => onChange(value)}
									inputTitle={"Tags:"}
									label={"tags"}
									options={TagOptions}
								/>
							)}
							name="tags"
						/>

						<Controller
							control={control}
							rules={{
								maxLength: 1000,
							}}
							name="informacoesAdicionais"
							render={({ field: { onChange, onBlur } }) => (
								<TextArea
									{...register("informacoesAdicionais")}
									placeholder="Requisitos do candidato, informações adicionais, etc."
									onBlur={onBlur}
									onChangeText={onChange}
									inputTitle={"Informações Adicionais:"}
								/>
							)}
						/>
						<Center>
							<Text style={{ fontSize: 15 }}>
								{"Anexar arquivo:"}
							</Text>
						</Center>

						<FileAttachment />
					</VStack>
				</ScrollView>

				<Center mt={10}>
					<Button
						title="Finalizar cadastro"
						onPress={handleSubmit(onSubmit)}
					/>
				</Center>
			</VStack>
		</ScrollView>

	)
}
