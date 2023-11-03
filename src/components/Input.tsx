import { Input as NativeBaseInput, IInputProps, FormControl, Text } from 'native-base';
import { useState } from 'react';
import MaskInput, { Masks } from 'react-native-mask-input';

type Props = IInputProps & {
	errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
	const invalid = !!errorMessage || isInvalid;

	return (
		<FormControl
			isInvalid={invalid}
			mb={4}
		>
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

export function MaskedInput({ errorMessage = null, isInvalid, ...rest }: Props) {
	const [phone, setPhone] = useState('');
	const [hasFocus, setFocus] = useState(false);
	const invalid = !!errorMessage || isInvalid;

	return (
		<FormControl
			isInvalid={invalid}
			mb={4}
		>
			<MaskInput
				style={{
					borderBottomWidth: 1,
					borderBottomColor: hasFocus ? "#55917F" : "#A1A1AA",
					height: 56,
					fontSize: 20
				}}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				value={phone}
				onChangeText={(masked) => {
					setPhone(masked);
				}}
				mask={Masks.BRL_PHONE}
			/>

			<FormControl.ErrorMessage _text={{ color: "red.500" }}>
				{errorMessage}
			</FormControl.ErrorMessage>
		</FormControl >

	);
}