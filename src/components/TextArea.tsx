import { TextArea as NativeBaseTextArea, IInputProps, FormControl, Text } from 'native-base'

type Props = IInputProps & {
	errorMessage?: any;
	inputTitle: string;
}


export function TextArea({ inputTitle, errorMessage = null, isInvalid, ...rest }: Props) {
	const invalid = isInvalid || errorMessage;
	return (
		<FormControl mb={6} >
			<Text fontSize="md" mb={4}>
				{inputTitle}
			</Text>
			<NativeBaseTextArea
				fontSize="md"
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
			{isInvalid && (
				<FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
			)}
		</FormControl>
	);
}