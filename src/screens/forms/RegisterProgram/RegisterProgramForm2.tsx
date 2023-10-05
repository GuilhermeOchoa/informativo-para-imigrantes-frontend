import { useForm, Controller, useFormContext } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView } from "native-base"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { Select } from "@components/Select"
import { ProgramLanguageOptions, ProgramLocalOptions } from "@utils/SelectOptions"
import { DateInput } from "@components/DateInput"


export function RegisterProgramForm2({ navigation }: any) {
    const { register, handleSubmit, control, formState } = useFormContext();

    const { errors } = formState;

    const onSubmit = (data: any) => {
        console.log(data)
        navigation.navigate('Página 3 de 3', data)
    }

    return (
        <VStack flex={1} px={6} pb={2} mt={2}>
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

                <VStack flex={1} mt={1} mb={2}>

                    <Controller
                        control={control}
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
                        name="local"
                    />
                    <Controller
                        control={control}
                        rules={{ required: false}}
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
                        name="dataFimPrograma"
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
            </ScrollView>

            <Button title="Continuar" onPress={handleSubmit(onSubmit)}>
                Continuar
            </Button>
        </VStack>


    )
}

