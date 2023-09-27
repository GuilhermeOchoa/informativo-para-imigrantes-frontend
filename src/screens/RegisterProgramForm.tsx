import { useForm, Controller } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text } from "native-base"

import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { TextArea } from "@components/TextArea"


export function RegisterProgramForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nomePrograma: "",
            descricao: "",
            dataInicio: "",
            dataFim: "",
            linkAcesso: "",
        },
    })
    const onSubmit = (data: any) => console.log(data)


    return (

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
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            inputTitle="Título:"
                            variant="underlined"
                            placeholder="Nome do programa"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            errorMessage="Título obrigatório"
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
                            value={value} 
                            inputTitle={"Descrição:"}                            
                            errorMessage={"Favor informar descrição do programa"}
                            />
                    )}
                    name="descricao"
                />
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}

                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            inputTitle="Início das inscrições:"
                            variant={"underlined"}
                            placeholder="DD/MM/AAAA"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value} 
                            errorMessage={"Favor informar data de início das inscrições"} />
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
                            inputTitle="Fim das inscrições:"
                            variant={"underlined"}
                            placeholder="DD/MM/AAAA"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value} 
                            errorMessage={"Favor informar data de fim das inscrições"}
                        />
                    )}
                    name="dataFim"
                />
            </VStack>

            <Button title="Continuar" onPress={handleSubmit(onSubmit)}>
                Continuar
            </Button>
        </VStack>

    )
}

