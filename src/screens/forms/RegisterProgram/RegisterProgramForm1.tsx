import { useForm, Controller, useFormContext } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text } from "native-base"
import * as yup from 'yup'

import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { TextArea } from "@components/TextArea"
import { DateInput } from "@components/DateInput"
import { ScrollView } from "react-native"

export function RegisterProgramForm1({ navigation }: any) {

    const { register, handleSubmit, control, formState } = useFormContext();

    const { errors } = formState;

    const onSubmit = (data: any) => {
        console.log(formState.isValid)
        console.log(data)
        navigation.navigate('Página 2 de 3', data)
    }


    return (
        <VStack flex={1} px={6} pb={1} mt={4}>
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
                <Center>
                    <Text style={{ fontSize: 15 }}>
                        {"Informações do programa"}
                    </Text>
                </Center>
                <VStack flex={1} mt={8}>

                    <Controller
                        control={control}
                        rules={{
                            required: true,

                        }}
                        render={({ field: { onChange, onBlur } }) => (
                            <Input
                                {...register("nomePrograma")}
                                inputTitle="Título*:"
                                variant="underlined"
                                placeholder="Nome do programa"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                errorMessage={errors.nomePrograma?.message}
                            />

                        )}
                        name="nomePrograma"
                    />
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 1000,
                        }}

                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextArea
                                {...register("descricao")}
                                placeholder="Descrição do programa"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                inputTitle={"Descrição*:"}
                                errorMessage={errors.descricao?.message}
                            />
                        )}
                        name="descricao"
                    />
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}

                        render={({ field: { onChange, onBlur } }) => (
                            <DateInput
                                {...register("dataInicio")}
                                inputTitle="Fim das inscrições*:"
                                variant={"underlined"}
                                placeholder="DD/MM/AAAA"
                                onBlur={onBlur}
                                errorMessage={errors.dataFim?.message} 
                                onChange={onChange}                            
                            />
                        )}
                        name="dataInicio"
                    />
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}

                        render={({ field: { onChange, onBlur } }) => (
                            <DateInput
                                {...register("dataFim")}
                                inputTitle="Fim das inscrições*:"
                                variant={"underlined"}
                                placeholder="DD/MM/AAAA"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                errorMessage={errors.dataFim?.message} 
                                onChange={onChange}                            
                            />
                        )}
                        name="dataFim"
                    />

                    <Button title="Continuar" onPress={handleSubmit(onSubmit)}>
                        Continuar
                    </Button>
                </VStack>
            </ScrollView>

        </VStack>
    )
}

