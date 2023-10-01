import { useForm, Controller } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text } from "native-base"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { TextArea } from "@components/TextArea"
import { Platform, ScrollView } from "react-native"

// build schema using yup
const registerProgramSchema = yup.object().shape({
    nomePrograma: yup.string().required('Nome do programa é obrigatório'),
    descricao: yup.string().required('Descrição do programa é obrigatória'),
    dataInicio: yup.string().required('Data de início é obrigatória'),
    dataFim: yup.string().required('Data fim é obrigatória'),
})

export function RegisterProgramForm1({ navigation }: any) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerProgramSchema),
    })
    const onSubmit = (data: any) => {
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
                            <Input
                                inputTitle="Início das inscrições*:"
                                variant={"underlined"}
                                placeholder="DD/MM/AAAA"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                errorMessage={errors.dataInicio?.message}
                            />
                        )}
                        name="dataInicio"
                    />
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}

                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                inputTitle="Fim das inscrições*:"
                                variant={"underlined"}
                                placeholder="DD/MM/AAAA"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                errorMessage={errors.dataFim?.message}
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

