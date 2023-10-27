import { UseFormClearErrors, Controller,useForm } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView, useToast } from "native-base"

import { parse } from "date-fns"
import { useEffect, useState } from "react"
import { Button } from "@components/Button"
import { TextArea } from "@components/TextArea"
import { TagSelection } from "@components/TagSelection"
import FileAttachment from "@components/FileAttachment"
import { useAuth } from "@hooks/useAuth"
import { getAllTags } from "@services/Tags"

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { TagOptions } from "@utils/SelectOptions"
import { postProgramForm } from "@services/Forms"
import { useNavigation, useRoute } from "@react-navigation/native"
import { InstitutionNavigatorRoutesProps } from "@routes/institution.routes"
import { useTranslation } from "react-i18next"
import { ProgramDTO } from "@dtos/ProgramDTO"
import { AppError } from "@utils/AppError"
import { TagsDTO } from "@dtos/TagsDTO"

type FormDataProps = {
//	tags?: TagsDTO[],
	tags?: string[],
}

const signUpSchema = yup.object({
	// tags: yup.string().required('Informe o local.'),
});

export function RegisterProgramForm3() {

	const navigation = useNavigation<InstitutionNavigatorRoutesProps>();
	const { t, i18n } = useTranslation();

	const user = useAuth();
	const toast = useToast();
	const route = useRoute();

	const program = route.params as ProgramDTO;

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
			const data = {
				institutionEmail: user.user.email ? user.user.email : "naofornecido@naofornecido.com",
				title: program.title,
				description: program.description,
				enrollmentInitialDate: "2023-10-21",
				enrollmentEndDate: "2023-10-21",
				location: program.location,
				language: program.language,
				programInitialDate: "2023-10-21",
				programEndDate: "2023-10-21",
				link: program.link,
				tags: tags
			};
			setIsLoading(true);
			console.log(data)

			await postProgramForm(data);
			toast.show({
				title: "Programa cadastrado com sucesso",
				placement: "top",
				bgColor: "green.500"
			});

			setTimeout(function () {
				navigation.navigate("myPrograms");
			}, 5000);

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
			navigation.navigate("myPrograms");
		}
	}

	return (
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

	)
}
