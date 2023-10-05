import { useForm, Controller, useFormContext } from "react-hook-form"
import { VStack, HStack, Center, Divider, Text, ScrollView } from "native-base"

import { parse, format } from "date-fns"

import { Button } from "@components/Button"
import { TextArea } from "@components/TextArea"
import { TagSelection } from "@components/TagSelection"
import FileAttachment from "@components/FileAttachment"

import { TagOptions } from "@utils/SelectOptions"
import { postProgramForm } from "@services/Forms"

export function RegisterProgramForm3({ navigation }: any) {


    const { register, handleSubmit, control, formState } = useFormContext();

    const { errors } = formState;

    const onSubmit = (data: any) => {
        console.log(data)
        //todo transform dates from string to Date
        
        const { dataInicio, 
                dataFim, 
                nomePrograma, 
                descricao, 
                local, 
                idioma, 
                dataInicioPrograma, 
                dataFimPrograma, 
                link, 
                tags, 
                informacoesAdicionais 
            } = data
        
        const description = descricao;

        const dataInicioParsed = parse(dataInicio, 'dd/MM/yyyy', new Date())
        const dataFimParsed = parse(dataFim, 'dd/MM/yyyy', new Date())
        const dataInicioProgramaParsed = parse(dataInicioPrograma, 'dd/MM/yyyy', new Date())
        const dataFimProgramaParsed = parse(dataFimPrograma, 'dd/MM/yyyy', new Date())

        const dataToSend = {
            dataInicioParsed,
            dataFimParsed,
            nomePrograma,
            description,
            local,
            idioma,
            dataInicioProgramaParsed,
            dataFimProgramaParsed,
            link,
            tags,
            informacoesAdicionais
        }
        console.log("dataToSend", dataToSend)
        return postProgramForm(dataToSend)
    }

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
                <Controller
                        control={control}
                        rules={{
                            maxLength: 10,
                        }}

                        render={({ field: { onChange } }) => (
                            <TagSelection
                                {...register("tags")}
                                placeholder="Selecione as tags do programa"
                                onValueChange={value => onChange(value)}
                                inputTitle={"Tags:"} 
                                label={"tags"} 
                                options={TagOptions}                            
                            />
                        )}
                        name="tags"
                    />

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 1000,
                        }}

                        render={({ field: { onChange, onBlur } }) => (
                            <TextArea
                                {...register("informacoesAdicionais")}
                                placeholder="Requisitos do candidato, informações adicionais, etc."
                                onBlur={onBlur}
                                onChangeText={onChange}
                                inputTitle={"Informações Adicionais:"}
                            />
                        )}
                        name="informacoesAdicionais"
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

