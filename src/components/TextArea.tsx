import { TextArea as NativeBaseTextArea, IInputProps, FormControl, Text } from 'native-base'

type Props = IInputProps & {
	errorMessage?: string | null;
    inputTitle: string;
}


export function TextArea({ inputTitle, errorMessage = null, isInvalid, ...rest }: Props) {
    const invalid = errorMessage !== null || isInvalid;

    return (
    <FormControl mb={6} >
        <Text style={{ fontSize: 15 }} mb={4}>
            {inputTitle}
        </Text>
        <NativeBaseTextArea
            w="full" //Ocupa a largura toda da tela
            h={20}
            backgroundColor={'gray.100'}
            maxLength={2000}
            _focus={{
                borderColor: 'green.500',
                backgroundColor: 'white.800'
            }}
            {...rest}
            isInvalid={invalid}
            _invalid={{ 
                borderColor: 'red.500', 
                backgroundColor: 'white.100'
            }}
            autoCompleteType={undefined}
        />
    </FormControl>
    );
}