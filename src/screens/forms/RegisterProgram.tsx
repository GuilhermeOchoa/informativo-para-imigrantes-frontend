
import React from "react"

import { useForm } from "react-hook-form"
import { FormProvider } from "react-hook-form";

import { createStackNavigator } from "@react-navigation/stack";

import { RegisterProgramForm1 } from "./RegisterProgram/RegisterProgramForm1"
import { RegisterProgramForm2 } from "./RegisterProgram/RegisterProgramForm2"
import { RegisterProgramForm3 } from "./RegisterProgram/RegisterProgramForm3"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Stack = createStackNavigator();


const registerProgramSchema = yup.object().shape({
    nomePrograma: yup.string().required('Nome do programa é obrigatório'),
    descricao: yup.string().required('Descrição do programa é obrigatória'),
    dataInicio: yup.string().required('Insira uma data de início válida, no formato DD/MM/AAAA'),
    dataFim: yup.string().required('Insira uma data fim válida no formato DD/MM/AAAA'),
    dataInicioPrograma: yup.string().required('Data de início é obrigatória'),
    dataFimPrograma: yup.string().required('Data de fim é obrigatória'),
    link: yup.string().url().required('Link de Acesso é obrigatório'),
})



export default function RegisterProgram() {
    const methods = useForm({
        resolver: yupResolver(registerProgramSchema),
    })

    return (
        <FormProvider {...methods}>
            <Stack.Navigator initialRouteName="RegisterProgramForm1">
                <Stack.Screen name="Página 1 de 3" component={RegisterProgramForm1} />
                <Stack.Screen name="Página 2 de 3" component={RegisterProgramForm2} />
                <Stack.Screen name="Página 3 de 3" component={RegisterProgramForm3} />
            </Stack.Navigator>
        </FormProvider>
    )
}

