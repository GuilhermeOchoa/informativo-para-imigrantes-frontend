
import { Input as NativeBaseInput, IInputProps, FormControl, Text } from 'native-base'
import React from 'react'

type Props = IInputProps & {
	errorMessage?: string | null;
    inputTitle: string;
}

export function Input({ inputTitle, errorMessage = null, isInvalid, ...rest }: Props) {
    const invalid = errorMessage !== null || isInvalid;
    return (
    <FormControl mb={4} isInvalid={invalid}>
        <Text style={{ fontSize: 15 }}>
            {inputTitle}
        </Text>
        <NativeBaseInput
            w="full" 		//Ocupa a largura toda da tela
            h={10}
            isInvalid={invalid}
            {...rest}
            colorScheme={undefined}
            _disabled={undefined}
            onFocus={undefined}
        >
        </NativeBaseInput>
        
        <FormControl.ErrorMessage>
            {errorMessage}
        </FormControl.ErrorMessage>
    </FormControl>
    );
}