import { useForm, Controller } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView } from "native-base"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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
	local?: string,
	idioma?: string,
	dataInicioPrograma?: string,
	dataFimPrograma?: string,
	link?: string
}

const signUpSchema = yup.object({
	// local: yup.string().required('Informe o local.'),
	// idioma: yup.string().required('Informe o idioma.'),
	// dataInicioPrograma: yup.string().required('Informe a data do inicio do programa.'),
	// dataFimPrograma: yup.string().required('Informe a data final do programa.'),
	// link: yup.string().required('Informe o link.'),
});

export function RegisterProgramForm2() {
	const navigation = useNavigation<AuthNavigatorRoutesProps>();
	const { t, i18n } = useTranslation();

	const route = useRoute();
	const program = route.params as ProgramDTO;

	const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

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
								label={"Local do Programa"}
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
								label={"Idioma utilizado:"}
								onValueChange={value => onChange(value)}
							/>

						)}
						name="idioma"
					/>
					<Controller
						control={control}
						rules={{
							required: true,
							maxLength: 100,
						}}

						render={({ field: { onChange, value } }) => (
							<DateInput
								{...register("dataInicioPrograma")}
								inputTitle="Início do Programa*:"
								variant={"underlined"}
								placeholder="DD/MM/AAAA"
								value={value}
								onChange={onChange}
								onChangeText={onChange}
							/>
						)}
						name="dataInicioPrograma"
					/>
					<Controller
						control={control}
						name="dataFimPrograma"

						rules={{
							required: true,
							maxLength: 100,
						}}

						render={({ field: { onChange, value } }) => (
							<DateInput
								{...register("dataFimPrograma")}
								inputTitle="Fim do Programa*:"
								variant={"underlined"}
								value={value}
								placeholder="DD/MM/AAAA"
								onChange={onChange}
								onChangeText={onChange}
							/>
						)}
					/>
					<Controller
						control={control}
						rules={{
							required: 'Campo obrigatório',
							maxLength: 100,
						}}

						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								{...register("link")}
								inputTitle="Link de Acesso*:"
								variant={"underlined"}
								placeholder="Link"
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						)}
						name="link"
					/>
				</VStack>

				<Center mt={2}>
					<Button
						title="Proximo"
						onPress={handleSubmit(onSubmit)}
						variant="outline"
					/>
				</Center>
			</VStack>

		</ScrollView>

	)
}
