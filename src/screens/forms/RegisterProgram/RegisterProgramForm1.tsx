import { useState } from "react"
import { Controller, useForm } from "react-hook-form";
import { VStack, HStack, Center, Divider, Text, Box } from "native-base"

import { ScrollView } from "react-native"
import { useTranslation } from "react-i18next"
import { useNavigation } from "@react-navigation/native"
import { InstitutionNavigatorRoutesProps } from "@routes/institution.routes"
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { TextArea } from '@components/TextArea'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { DateInput } from "@components/DateInput";

type FormDataProps = {
	title: string,
	description: string,
	enrollmentInitialDate: string,
	enrollmentEndDate: string
}

const signUpSchema = yup.object({
	title: yup
	.string()
	.required('Informe o nome.')
	.min(3, 'O título deve conter mais de 3 digitos'),
	description: yup
	.string()
	.required('Informe o nome.')
	.min(8, 'A descrição deve conter mais de 12 digitos'),
	enrollmentInitialDate: yup
	.string()
	.required('Informe a data do início das inscrições.'),
	enrollmentEndDate: yup
	.string()
	.required('Informe a data do termino das inscrições.'),
});

export function RegisterProgramForm1() {
	const { t, i18n } = useTranslation();

	const navigation = useNavigation<InstitutionNavigatorRoutesProps>();
	const [selectedEndDate, setSelectedEndDate] = useState('');
    const [selectedInitialDate, setSelectedInitialDate] = useState('');

	const { control, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

    function handleEndDate(newDate: string) {
		setSelectedEndDate(newDate)
		setValue("enrollmentEndDate", newDate)
	}
    function handleInitialDate(newDate: string) {
		setSelectedInitialDate(newDate)
		setValue("enrollmentInitialDate", newDate)
	}

	function onSubmit({ title, description, enrollmentInitialDate, enrollmentEndDate }: FormDataProps) {
		console.log({ title, description, enrollmentInitialDate, enrollmentEndDate })
		navigation.navigate("registerProgramForm2", { title, description, enrollmentInitialDate, enrollmentEndDate })
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<VStack flex={1} px={6} pb={6} mt={12}>

				<HStack alignItems="center" m={2} mb={2}>

					<VStack flex={1}>
						<Center>
							<Text fontFamily="body" fontSize="xl">
								{t("Cadastro de Programa")}
							</Text>
						</Center>

						<Divider my={4} bgColor="green.500" />

						<Center>
							<Text fontFamily="body" fontSize="lg" pt={8}>
								{t("Informações do programa")}
							</Text>
						</Center>
					</VStack>

				</HStack>

				<Controller
					control={control}
					name='title'
					render={({ field: { onChange, value } }) => (
						<Input
							placeholder="Titulo*"
							errorMessage={errors.title?.message}
							onChangeText={onChange}
							value={value}
						/>
					)}
				/>

				<Text pt={8} pb={2} fontSize="lg" color="gray.400">Descricao*</Text>

				<Controller
					control={control}
					name='description'
					render={({ field: { onChange, value } }) => (
						<TextArea
							placeholder="Descrição do programa"
							fontSize="md"
							onChangeText={onChange}
							value={value}
							errorMessage={errors.description?.message}
							w="full"
							bg="white.400"
							mb={2} inputTitle={""}						
						/>
					)}
				/>
				<Text style={{ fontSize: 15, marginBottom: 4 }}>{"Inicio das inscrições*:"}</Text>
                <Controller
					control={control}
					name="enrollmentInitialDate"
					rules={{
						required: true,
						maxLength: 100,
					}}
					render={() => (
						<DateInput
							variant={"underlined"}
							selectDateFunction={handleInitialDate}
							selectedDate={selectedInitialDate}
                            errorMessage={errors.enrollmentInitialDate?.message}
						/>
					)}
				/>

                <Text style={{ fontSize: 15, marginBottom: 4 }}>{"Fim das inscrições*:"}</Text>
				<Controller
					control={control}
					name="enrollmentEndDate"
					rules={{
						required: true,
						maxLength: 100,
					}}
					render={() => (
						<DateInput
							
							variant={"underlined"}
							selectDateFunction={handleEndDate}
							selectedDate={selectedEndDate}
                            errorMessage={errors.enrollmentEndDate?.message}
						/>
					)}
				/>
				<Center mt={10}>
					<Button
						title="Proximo"
						onPress={handleSubmit(onSubmit)}
						variant="outline"
						rounded="full"
					/>
				</Center>
			</VStack>

		</ScrollView >
	)
}
