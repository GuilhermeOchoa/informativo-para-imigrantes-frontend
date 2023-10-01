import { useForm, Controller } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView } from "native-base"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from "@components/Button"
import { Input } from "@components/Input"

type FormDataProps = {
    local: string;
    idioma: string;
    tipo: string;
    dataInicioPrograma: Date;
    dataFimPograma: Date;
    link: string;
    
}

// build schema using yup
const registerProgramSchema = yup.object().shape({
    local: yup.string().required('Local é obrigatório'),
    idioma: yup.string().required('Idioma é obrigatório'),
    tipo: yup.string().required('Tipo de programa é obrigatório'),
    dataInicioPrograma: yup.string().required('Data de início é obrigatória'),
    dataFimPrograma: yup.string().required('Data de fim é obrigatória'),
    link: yup.string().required('Link de Acesso é obrigatório'),
   
})

export function RegisterProgramForm2({navigation} : any) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerProgramSchema),
    })
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
                    rules={{
                        required: true,

                    }}
                    render={({ field: { onChange, onBlur } }) => (
                        <Input
                            inputTitle="Local do programa:"
                            variant="underlined"
                            placeholder="Local do programa"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            errorMessage={errors.local?.message}
                        />

                    )}
                    name="local"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,

                    }}
                    render={({ field: { onChange, onBlur } }) => (
                        <Input
                            inputTitle="Idioma:"
                            variant="underlined"
                            placeholder="Idioma"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            errorMessage={errors.idioma?.message}
                        />

                    )}
                    name="idioma"
                />
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}

                    render={({ field: { onChange, onBlur } }) => (
                        <Input
                            inputTitle="Início do Programa*:"
                            variant={"underlined"}
                            placeholder="DD/MM/AAAA"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            errorMessage={errors.dataInicioPrograma?.message}
                        />
                    )}
                    name="dataInicioPrograma"
                />
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}

                    render={({ field: { onChange, onBlur } }) => (
                        <Input
                            inputTitle="Fim do Programa*:"
                            variant={"underlined"}
                            placeholder="DD/MM/AAAA"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            errorMessage={errors.dataFimPrograma?.message}
                        />
                    )}
                    name="dataFimPrograma"
                />
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}

                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            inputTitle="Link de Acesso*"
                            variant={"underlined"}
                            placeholder="Link"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            errorMessage={errors.link?.message}
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

