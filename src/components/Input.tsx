
import { Input as NativeBaseInput, IInputProps, FormControl, Text } from 'native-base'
import React from 'react'

type Props = IInputProps & {
	errorMessage?: any | null;
    inputTitle: string;
}

export function Input({ inputTitle, isInvalid, value, ...rest }: Props) {
    const invalid = isInvalid || value === '' ;
    return (
    <FormControl mb={10} isInvalid={invalid}>
        <Text style={{ fontSize: 15 }}>
            {inputTitle}
        </Text>
        <NativeBaseInput
            w="full" 		//Ocupa a largura toda da tela
            h={10}
            {...rest}
            _focus={{
                borderColor: 'green.500',
                backgroundColor: 'white.800'
            }}
            size={'lg'}
        >
        </NativeBaseInput>
        
        <FormControl.ErrorMessage>
            <Text>Campo obrigatório</Text>
        </FormControl.ErrorMessage>
    </FormControl>
    );
}