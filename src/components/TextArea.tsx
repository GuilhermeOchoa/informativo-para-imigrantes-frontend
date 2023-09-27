
import { TextArea as NativeBaseTextArea, IInputProps, FormControl, Text } from 'native-base'
import React from 'react'

type Props = IInputProps & {
	errorMessage?: string | null;
    inputTitle: string;
}

export function TextArea({ inputTitle, errorMessage = null, isInvalid, ...rest }: Props) {
    const invalid = errorMessage !== null || isInvalid;
    return (
    <FormControl mb={8} isInvalid={invalid}>
        <Text style={{ fontSize: 15 }} mb={4}>
            {inputTitle}
        </Text>
        <NativeBaseTextArea
            w="full" //Ocupa a largura toda da tela
            h={20}
            backgroundColor={'gray.100'}
            maxLength={2000}
            isInvalid={invalid}
            {...rest}
            _focus={{ borderColor: 'green.500' }}
            autoCompleteType={undefined}
        />
        <FormControl.ErrorMessage>
            {errorMessage}
        </FormControl.ErrorMessage>
    </FormControl>
    );
}