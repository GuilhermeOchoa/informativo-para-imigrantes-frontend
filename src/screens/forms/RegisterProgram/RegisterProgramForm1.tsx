import { useState } from "react"
import { Controller, useForm } from "react-hook-form";
import { VStack, HStack, Center, Divider, Text, Box } from "native-base"

import { Pressable, ScrollView } from "react-native"
import { useTranslation } from "react-i18next"
import { useNavigation } from "@react-navigation/native"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { TextArea } from '@components/TextArea'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { DateInput } from "@components/DateInput";

type FormDataProps = {
	name: string,
	description: string,
	initialDate: string,
	endDate: string
}

const programSchema = yup.object({
	name: yup
	.string()
	.required('Informe o nome.')
	.min(3, 'O título deve conter mais de 3 digitos'),
	description: yup
	.string()
	.required('Informe o nome.')
	.min(12, 'A descrição deve conter mais de 12 digitos'),
	initialDate: yup
	.string()
	.required('Informe a data do início das inscrições.'),
	endDate: yup
	.string()
	.required('Informe a data do termino das inscrições.'),
});

export function RegisterProgramForm1() {
	const { t, i18n } = useTranslation();

	const navigation = useNavigation<AuthNavigatorRoutesProps>();
	const [selectedEndDate, setSelectedEndDate] = useState('');
    const [selectedInitialDate, setSelectedInitialDate] = useState('');

	const { register, control, handleSubmit, formState: { errors }, setValue, getFieldState } = useForm<FormDataProps>({
		resolver: yupResolver(programSchema)
	});


    function handleInitialDate(newDate: string) {
		setSelectedInitialDate(newDate)
		setValue("initialDate", newDate)
	}

	function handleEndDate(newDate: string) {
		setSelectedEndDate(newDate)
		setValue("endDate", newDate)
	}

	function onSubmit({ name, description, initialDate, endDate }: FormDataProps) {
		console.log({ name, description, initialDate, endDate })
		navigation.navigate("registerProgramForm2", { name, description, initialDate, endDate })
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
					name='name'
					render={({ field: { onChange, value } }) => (
						<Input
							placeholder="Titulo*"
							errorMessage={errors.name?.message}
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
					name="initialDate"
					rules={{
						required: true,
						maxLength: 100,
					}}
					render={() => (
						<DateInput
							variant={"underlined"}
							selectDateFunction={handleInitialDate}
							selectedDate={selectedInitialDate}
                            errorMessage={errors.initialDate?.message}
						/>
					)}
				/>

                <Text style={{ fontSize: 15, marginBottom: 4 }}>{"Fim das inscrições*:"}</Text>
				<Controller
					control={control}
					name="endDate"
					rules={{
						required: true,
						maxLength: 100,
					}}
					render={() => (
						<DateInput
							
							variant={"underlined"}
							selectDateFunction={handleEndDate}
							selectedDate={selectedEndDate}
                            errorMessage={errors.endDate?.message}
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
