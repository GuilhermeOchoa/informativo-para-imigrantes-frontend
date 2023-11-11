import { UseFormClearErrors, Controller, useForm } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView, useToast } from "native-base"

import { Button } from "@components/Button"
import { Select } from "@components/Select"
import { TagSelection } from "@components/TagSelection"
import FileAttachment from "@components/FileAttachment"
import { useAuth } from "@hooks/useAuth"

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { TagOptions, ProgramTypesOptions } from "@utils/SelectOptions"
import { postProgramForm } from "@services/Forms"
import { useNavigation, useRoute } from "@react-navigation/native"
import { InstitutionNavigatorRoutesProps } from "@routes/institution.routes"
import { useTranslation } from "react-i18next"
import { ProgramDTO } from "@dtos/ProgramDTO"
import { AppError } from "@utils/AppError"
import { useState } from "react"
import { KeyboardAvoidingView, Platform } from "react-native"

type FormDataProps = {
	//	tags?: TagsDTO[],
	tags?: string[],
	programType: string,
}

type routesData = {
	data?: ProgramDTO,
	fetchPrograms: () => void
}

const signUpSchema = yup.object({
	// tags: yup.string().required('Informe o local.'),
	programType: yup
		.string()
		.required('Informe o tipo de programa'),
})


export function RegisterProgramForm3() {

	const navigation = useNavigation<InstitutionNavigatorRoutesProps>();
	const { t, i18n } = useTranslation();

	const user = useAuth();
	const toast = useToast();
	const route = useRoute();
	const program = route.params as routesData;

	const [isLoading, setIsLoading] = useState(false);
	//	const [tags, setTags] = useState<string[]>([]);


	// async function fetchTags() {
	// 	try {
	// 		setIsLoading(true);
	// 		const response = await getAllTags(i18n.language ? i18n.language : "pt");
	// 		console.log("response", response.data)
	// 		setTags(response.data);
	// 	} catch (error) {
	// 		const isAppError = error instanceof AppError;
	// 		const title = isAppError ? error.message : t("Nao foi possivel carregar as tags")

	// 		toast.show({
	// 			title,
	// 			placement: "top",
	// 			bgColor: "red.500"
	// 		});
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// }

	// useEffect(() => {
	// 	fetchTags();
	// }, [i18n.language])


	const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

	async function onSubmit({ tags }: FormDataProps) {
		console.log("program", program)
		try {
			const programData = {
				institutionEmail: user.user.email ? user.user.email : "naofornecido@naofornecido.com",
				title: program.data?.title,
				description: program.data?.description,
				enrollmentInitialDate: formatarData(program.data?.enrollmentInitialDate),
				enrollmentEndDate: formatarData(program.data?.enrollmentEndDate),
				location: program.data?.location,
				language: program.data?.language,
				programInitialDate: formatarData(program.data?.programInitialDate),
				programEndDate: formatarData(program.data?.programEndDate),
				link: program.data?.link,
				tags: tags
			};

			setIsLoading(true);
			console.log(programData)

			await postProgramForm(programData);

			program.fetchPrograms();

			toast.show({
				title: "Programa cadastrado com sucesso",
				placement: "top",
				bgColor: "green.500",
				duration: 3000,
			});

			setTimeout(function () {
				navigation.navigate("myPrograms");
			}, 3000);

		} catch (error) {
			const isAppError = error instanceof AppError;
			const title = isAppError ? error.message : t("Nao foi possivel cadastrar o programa")

			toast.show({
				title,
				placement: "top",
				bgColor: "red.500"
			});
		} finally {
			setIsLoading(false);
		}
	}

	function formatarData(data?: any): string | undefined {
		if (!data) {
			return undefined;
		}

		const partesDaData = data.split('/');

		if (partesDaData.length !== 3) {
			return undefined;
		}

		const dataFormatada = `${partesDaData[2]}-${partesDaData[1]}-${partesDaData[0]}`;
		return dataFormatada;
	}

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 70}
		>
			<ScrollView showsVerticalScrollIndicator={false}>

				<VStack flex={1} px={6} pb={2} mt={12}>
					<HStack alignItems="center" m={2}>

						<VStack flex={1}>
							<Center>
								<Text style={{ fontSize: 20 }}>
									{"Cadastro de Programa"}
								</Text>
							</Center>
						</VStack>
					</HStack>

					<Divider my={4} bgColor="green.500" />
					<ScrollView>

						<VStack flex={1} mt={8}>
							<Controller
								control={control}
								name="programType"
								rules={{ required: false }}
								render={({ field: { onChange } }) => (
									<Select
										{...register("programType")}
										options={ProgramTypesOptions}
										inputTitle="Tipo de programa:"
										placeholder="Selecione o tipo"
										label={t("Tipos de programa")}
										onValueChange={value => onChange(value)}
									/>
								)}
							/>

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
							<Center>
								<Text style={{ fontSize: 15, marginTop: 20 }}>
									{"Anexar arquivo:"}
								</Text>
							</Center>

							<FileAttachment />
						</VStack>
					</ScrollView>

					<Center mt={24}>
						<Button
							title="Finalizar cadastro"
							onPress={handleSubmit(onSubmit)}
							rounded="full"
						/>
					</Center>
				</VStack>
			</ScrollView>
		</KeyboardAvoidingView>

	)
}
