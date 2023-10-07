import { Input as NativeBaseInput, IInputProps, FormControl, Text } from 'native-base';

type Props = IInputProps & {
	errorMessage?: string | null;
	inputTitle: string;
}

export function Input({inputTitle, errorMessage = null, isInvalid, ...rest }: Props) {
	const invalid = !!errorMessage || isInvalid;

	return (
		<FormControl
			isInvalid={invalid}
			mb={4}
		>
			<Text style={{ fontSize: 15 }}>{inputTitle}</Text>

			<NativeBaseInput
				variant="underlined"
				h={14}
				fontSize="lg"
				fontFamily="body"
				placeholderTextColor="gray.400"
				isInvalid={invalid}
				_invalid={{
					borderBottomWidth: 1,
					borderColor: "red.500"
				}}
				_focus={{
					borderBottomWidth: 1,
					borderColor: "green.500"
				}}
				{...rest}
			/>

			<FormControl.ErrorMessage _text={{ color: "red.500" }}>
				{errorMessage}
			</FormControl.ErrorMessage>
		</FormControl >
	);
}