import { useForm, Controller } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView } from "native-base"


import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { TextArea } from "@components/TextArea"
import FileAttachment from "@components/FileAttachment"

// build schema using yup

export function RegisterProgramForm3() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({

    })
    const onSubmit = (data: any) => console.log(data)


    return (

        <VStack flex={1} px={6} pb={2} mt={4}>
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

                <VStack flex={1} mt={8}>
                    <Input
                        placeholder="Clique para inserir as tags"
                        inputTitle={"Tags:"}
                        isDisabled={false}
                        variant={"underlined"}

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
                                inputTitle={"Informações Adicionais:"}
                            />
                        )}
                        name="descricao"
                    />
                    <Center>
                        <Text style={{ fontSize: 15 }}>
                            {"Anexar arquivo:"}
                        </Text>
                        </Center>
                        <FileAttachment />
                </VStack>
            </ScrollView>

            <Button title="Continuar" onPress={handleSubmit(onSubmit)}>
                Finalizar Cadastro
            </Button>

        </VStack>


    )
}

