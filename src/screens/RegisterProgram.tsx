
import React from "react"

import { useForm } from "react-hook-form"
import { FormProvider } from "react-hook-form";
import * as yup from 'yup';

import { createStackNavigator } from "@react-navigation/stack";

import { RegisterProgramForm1 } from "./forms/RegisterProgram/RegisterProgramForm1"
import { RegisterProgramForm2 } from "./forms/RegisterProgram/RegisterProgramForm2"
import { RegisterProgramForm3 } from "./forms/RegisterProgram/RegisterProgramForm3"
import { yupResolver } from "@hookform/resolvers/yup";

const Stack = createStackNavigator();

const validationSchema = yup.object().shape({
    nomePrograma: yup.string().required('Nome do programa é obrigatório'),
    descricao: yup.string().required('Descrição do programa é obrigatória'),
    dataInicio: yup.string().required('Insira uma data de início válida, no formato DD/MM/AAAA'),
    dataFim: yup.string().required('Insira uma data fim válida no formato DD/MM/AAAA'),
    local: yup.string().required('Local é obrigatório'),
    idioma: yup.string().required('Idioma é obrigatório'),
    dataInicioPrograma: yup.string().required('Insira uma data início válida, no formato DD/MM/AAAA'),
    dataFimPrograma: yup.string().required('Insira uma data fim válida, no formato DD/MM/AAAA'),
    link: yup.string().url().required('Link de Acesso é obrigatório'),
    informacoesAdicionais: yup.string().notRequired(),
    tags: yup.string().notRequired(),
});

export default function RegisterProgram() {
    const methods = useForm({
        resolver: yupResolver(validationSchema),
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

