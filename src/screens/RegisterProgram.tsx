import React from "react"
import { useForm, FormProvider } from "react-hook-form"
import { RegisterProgramForm1 } from "./forms/RegisterProgram/RegisterProgramForm1"
import { RegisterProgramForm2 } from "./forms/RegisterProgram/RegisterProgramForm2"
import { RegisterProgramForm3 } from "./forms/RegisterProgram/RegisterProgramForm3"


export default function App() {
  const methods = useForm()
  const onSubmit = (data: any) => console.log(data)


  return (
    <FormProvider {...methods}>
      // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <RegisterProgramForm1 />
        <RegisterProgramForm2 />
        <RegisterProgramForm3 />
        <input type="submit" />
      </form>
    </FormProvider>
  )
}

