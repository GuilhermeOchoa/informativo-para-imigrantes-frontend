import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
	errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
	const invalid = !!errorMessage || isInvalid;

	return (
		<FormControl isInvalid={invalid} mb={4}>
			<NativeBaseInput
				variant="underlined"
				{...rest}
			/>

			<FormControl.ErrorMessage _text={{ color: "red.500" }}>
				{errorMessage}
			</FormControl.ErrorMessage>
		</FormControl >
	);
}