
import React from "react"

import { useForm } from "react-hook-form"
import { FormProvider } from "react-hook-form";

import { createStackNavigator } from "@react-navigation/stack";

import { RegisterProgramForm1 } from "./forms/RegisterProgram/RegisterProgramForm1"
import { RegisterProgramForm2 } from "./forms/RegisterProgram/RegisterProgramForm2"
import { RegisterProgramForm3 } from "./forms/RegisterProgram/RegisterProgramForm3"

const Stack = createStackNavigator();

export default function RegisterProgram() {
    const methods = useForm()
    //create state for each form page 

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

