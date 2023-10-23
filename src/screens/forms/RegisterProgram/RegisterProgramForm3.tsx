import { useForm, Controller, useFormContext } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView, useToast } from "native-base"

import { parse } from "date-fns"
import { useState } from "react"
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

type FormDataProps = {
	tags?: {label: string; value: string}[],
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

	async function onSubmit({ tags }: FormDataProps) {
		try {
			const data = {
				institutionEmail: "email@email.com",
				title: program.title,
				description: program.description,
				enrollmentInitialDate: "2023-10-21",
				enrollmentEndDate: "2023-10-21",
				location: program.location,
				language: program.language,
				programInitialDate: "2023-10-21",
				programEndDate: "2023-10-21",
				link: program.link
			};
			setIsLoading(true);
			console.log(data)

			await postProgramForm(data);

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
						rounded="full"
					/>
				</Center>
			</VStack>
		</ScrollView>

	)
}
