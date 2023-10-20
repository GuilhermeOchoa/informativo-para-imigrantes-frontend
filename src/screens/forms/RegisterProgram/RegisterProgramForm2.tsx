import { useForm, Controller } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView } from "native-base"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from "react"

import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { Select } from "@components/Select"
import { ProgramLanguageOptions, ProgramLocalOptions } from "@utils/SelectOptions"
import { DateInput } from "@components/DateInput"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"
import { useNavigation, useRoute } from "@react-navigation/native"
import { ProgramDTO } from "@dtos/ProgramDTO"
import { useTranslation } from "react-i18next"

type FormDataProps = {
	local: string,
	idioma: string,
	dataInicioPrograma: string,
	dataFimPrograma: string,
	link: string
}

const signUpSchema = yup.object({
	local: yup
	.string()
	.required('Informe o local.'),
	idioma: yup
	.string()
	.required('Informe o idioma.'),
	dataInicioPrograma: yup
	.string()
	.required('Informe a data do inicio do programa.'),
	dataFimPrograma: yup
	.string()
	.required('Informe a data final do programa.'),
	link: yup
	.string()
	.required('Informe o link.'),
});

export function RegisterProgramForm2() {
	const navigation = useNavigation<AuthNavigatorRoutesProps>();
	const { t, i18n } = useTranslation();
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [selectedInitialDate, setSelectedInitialDate] = useState('');

	const route = useRoute();
	const program = route.params as ProgramDTO;

	const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

    function handleEndDate(newDate: string) {
		setSelectedEndDate(newDate)
		setValue("dataFimPrograma", newDate)
	}
    function handleInitialDate(newDate: string) {
		setSelectedInitialDate(newDate)
		setValue("dataInicioPrograma", newDate)
	}

	function onSubmit({ local, idioma, dataInicioPrograma, dataFimPrograma, link }: FormDataProps) {
		const data = {
			institutionName: program.name,
			description: program.description,
			initialDate: program.initialDate,
			endDate: program.endDate,
			local,
			idioma,
			dataInicioPrograma,
			dataFimPrograma,
			link
		};

		navigation.navigate("registerProgramForm3", data)
	}

	return (
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


				<VStack flex={1} mt={1} mb={2}>

					<Controller
						control={control}
						name="local"
						rules={{ required: false }}
						render={({ field: { onChange } }) => (
							<Select
								{...register("local")}
								options={ProgramLocalOptions}
								inputTitle="Local do programa:"
								isInvalid={!!errors.local}
								placeholder="Selecione o local"
								label={t("Local do Programa")}
								onValueChange={value => onChange(value)}
							/>

						)}
					/>
					<Controller
						control={control}
						rules={{ required: false }}
						render={({ field: { onChange } }) => (
							<Select
								{...register("idioma")}
								options={ProgramLanguageOptions}
								isInvalid={!!errors.idioma}
								inputTitle="Idioma:"
								placeholder="Idioma"
								label={t("Idioma")}
								onValueChange={value => onChange(value)}
							/>

						)}
						name="idioma"
					/>
					<Text style={{ fontSize: 15 }}>
						{t("DataInicioPrograma")}
						</Text>
					<Controller
					control={control}
					name="dataInicioPrograma"
					rules={{
						required: true,
						maxLength: 100,
					}}
					render={() => (
						<DateInput
							variant={"underlined"}
							selectDateFunction={handleInitialDate}
							selectedDate={selectedInitialDate}
                            errorMessage={errors.dataInicioPrograma?.message}
						/>
					)}
				/>
					<Text style={{ fontSize: 15 }}>
						{t("DataFinalPrograma")}
						</Text>
					<Controller
					control={control}
					name="dataFimPrograma"
					rules={{
						required: true,
						maxLength: 100,
					}}
					render={() => (
						<DateInput
							variant={"underlined"}
							selectDateFunction={handleEndDate}
							selectedDate={selectedEndDate}
                            errorMessage={errors.dataFimPrograma?.message}
						/>
					)}
				/>
					<Controller
					control={control}
					name='link'
					render={({ field: { onChange, value } }) => (
						<Input
							placeholder="Link*"
							errorMessage={errors.link?.message}
							onChangeText={onChange}
							value={value}
						/>
					)}
			/>
				</VStack>

				<Center mt={2}>
					<Button
						title={t("Proximo")}
						onPress={handleSubmit(onSubmit)}
						rounded="full"
						variant="outline"
					/>
				</Center>
			</VStack>

		</ScrollView>

	)
}
