import { useForm, Controller } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView, Box } from "native-base"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from "react"

import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { Select } from "@components/Select"
import { ProgramLanguageOptions, ProgramLocalOptions } from "@utils/SelectOptions"
import { DateInput } from "@components/DateInput"
import { useNavigation, useRoute } from "@react-navigation/native"
import { ProgramDTO } from "@dtos/ProgramDTO"
import { useTranslation } from "react-i18next"
import { InstitutionNavigatorRoutesProps } from "@routes/institution.routes"
import { KeyboardAvoidingView, Platform } from "react-native"

type FormDataProps = {
	location: string,
	language: string,
	programInitialDate: string,
	programEndDate: string,
	link: string
}

type routesData = {
	data?: ProgramDTO,
	fetchPrograms: () => void
}

const signUpSchema = yup.object({
	location: yup
		.string()
		.required('Informe o local.'),
	language: yup
		.string()
		.required('Informe o idioma.'),
	programInitialDate: yup
		.string()
		.required('Informe a data do inicio do programa.'),
	programEndDate: yup
		.string()
		.required('Informe a data final do programa.'),
	link: yup
		.string()
		.required('Informe o link.'),
});

export function RegisterProgramForm2() {
	const navigation = useNavigation<InstitutionNavigatorRoutesProps>();
	const { t, i18n } = useTranslation();
	const [selectedEndDate, setSelectedEndDate] = useState('');
	const [selectedInitialDate, setSelectedInitialDate] = useState('');

	const route = useRoute();
	const program = route.params as routesData;

	const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

	function handleEndDate(newDate: string) {
		if (newDate < selectedInitialDate) {
			control.setError("programEndDate", {
				type: "manual",
				message: "Data final não pode ser menor que a data inicial"
			})
			setSelectedEndDate("")
			setValue("programEndDate", "")
		} else {
			setSelectedEndDate(newDate)
			setValue("programEndDate", newDate)
		}
	}
	function handleInitialDate(newDate: string) {
		setSelectedInitialDate(newDate)
		setValue("programInitialDate", newDate)
	}

	function onSubmit({ location, language, programInitialDate, programEndDate, link }: FormDataProps) {
		const data = {
			title: program.data?.title,
			description: program.data?.description,
			enrollmentInitialDate: program.data?.enrollmentInitialDate,
			enrollmentEndDate: program.data?.enrollmentEndDate,
			location,
			language,
			programInitialDate,
			programEndDate,
			link
		};

		navigation.navigate("registerProgramForm3", { data, fetchPrograms: program.fetchPrograms })

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
								<Text fontFamily="body" fontSize="xl">
									{t("Cadastro de Programa")}
								</Text>
							</Center>

							<Divider my={4} bgColor="green.500" />

							<Center>
								<Text fontFamily="body" fontSize="lg" pt={8}>
									{t("Informacoes do programa")}
								</Text>
							</Center>
						</VStack>

					</HStack>

					<Controller
						control={control}
						name="location"
						rules={{ required: false }}
						render={({ field: { onChange } }) => (
							<Select
								{...register("location")}
								options={ProgramLocalOptions}
								inputTitle="Local do programa:"
								isInvalid={!!errors.location}
								placeholder="Selecione o local"
								label={t("Local do Programa")}
								onValueChange={value => onChange(value)}
							/>

						)}
					/>

					<Controller
						name="language"
						control={control}
						rules={{ required: false }}
						render={({ field: { onChange } }) => (
							<Select
								{...register("language")}
								options={ProgramLanguageOptions}
								isInvalid={!!errors.language}
								inputTitle="Idioma:"
								placeholder="Idioma"
								label={t("Idioma")}
								onValueChange={value => onChange(value)}
							/>

						)}
					/>

					<Text pt={2} pb={2} fontSize="lg" color="gray.400">{t("DataInicialPrograma") + "*"}</Text>
					<Controller
						control={control}
						name="programInitialDate"
						rules={{
							required: true,
							maxLength: 100,
						}}
						render={() => (
							<DateInput
								variant={"underlined"}
								selectDateFunction={handleInitialDate}
								selectedDate={selectedInitialDate}
								errorMessage={errors.programInitialDate?.message}
							/>
						)}
					/>

					<Text pt={8} pb={2} fontSize="lg" color="gray.400">{t("DataFinalPrograma") + "*"}</Text>


					<Controller
						control={control}
						name="programEndDate"
						rules={{
							required: true,
							maxLength: 100,
						}}
						render={() => (
							<DateInput
								variant={"underlined"}
								selectDateFunction={handleEndDate}
								selectedDate={selectedEndDate}
								errorMessage={errors.programEndDate?.message}
							/>
						)}
					/>

					<Box pt={2} pb={2}>

						<Controller
							control={control}
							name='link'
							render={({ field: { onChange, value } }) => (
								<Input
									style={{ marginTop: 12 }}
									placeholder={t("Link") + "*"}
									errorMessage={errors.link?.message}
									onChangeText={onChange}
									value={value}
								/>
							)}
						/>
					</Box>
					<Center mt={6}>
						<Button
							title="Proximo"
							onPress={handleSubmit(onSubmit)}
							variant="outline"
							rounded="full"
						/>
					</Center>

				</VStack>

			</ScrollView>
		</KeyboardAvoidingView>

	)
}
