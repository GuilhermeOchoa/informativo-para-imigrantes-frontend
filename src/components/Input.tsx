import { MaterialIcons } from '@expo/vector-icons';
import { t } from 'i18next';
import { Input as NativeBaseInput, IInputProps, FormControl, Text, Pressable, Icon } from 'native-base';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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


export function MaskedInputField({ type, value, onChange, errorMessage = null, isInvalid, ...rest }: any) {
	const [hasFocus, setFocus] = useState(false);
	const invalid = !!errorMessage || isInvalid;
	const [paramValue, setParamValue] = useState(value || '');

	useEffect(() => {
		if (value !== undefined) {
			setParamValue(value);
		}
	}, [value]);

	function handleFieldChange(masked: any) {
		if (masked === '' && value === undefined) {
			// Não redefina o valor se todos os dígitos forem apagados
		} else {
			setParamValue(masked);
		}
		if (onChange) {
			onChange(masked);
		}
	}

	let mask;
	switch (type) {
		case 1:
			mask = Masks.BRL_CNPJ;
			break;
		case 2:
			mask = Masks.BRL_CPF;
			break;
		case 3:
			mask = Masks.BRL_PHONE;
			break;
	}

	return (
		<FormControl isInvalid={invalid} mb={4}>
			<MaskInput
				style={{
					borderBottomWidth: 1,
					borderBottomColor: hasFocus ? "#55917F" : "#cacad0",
					height: 56,
					fontSize: 20,
				}}
				onFocus={() => setFocus(true)}
				onBlur={() => {
					setFocus(false);
					if (onChange) {
						onChange(paramValue);
					}
				}}
				placeholderTextColor="#A1A1AA"
				value={paramValue}
				onChangeText={handleFieldChange}
				mask={mask}
				{...rest}
			/>

			<FormControl.ErrorMessage _text={{ color: "red.500" }}>
				{errorMessage}
			</FormControl.ErrorMessage>
		</FormControl>
	);
}

export function PasswordInput({ placeHolderParam, onChangeText, value, errorMessage = null, isInvalid, type, ...rest }: any) {
	const [show, setShow] = useState(false);
	const { t, i18n } = useTranslation();
	const invalid = !!errorMessage || isInvalid;

	return (
		<FormControl
			isInvalid={invalid}
			mb={4}
		>

			<NativeBaseInput
				variant={type === 1 ? 'rounded' : 'underlined'}
				w={type === 1 ? "90%" : "100%"}
				fontSize={type === 1 ? "md" : "lg"}
				h={14}
				placeholderTextColor="gray.400"
				placeholder={placeHolderParam}
				onChangeText={onChangeText}
				value={value}
				type={show ? "text" : "password"}
				InputRightElement={
					<Pressable onPress={() => setShow(!show)}>
						<Icon
							as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
							size={6}
							mr="4"
							color="muted.400"
						/>
					</Pressable>
				}
				fontFamily="body"
				mt={4}
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
		</FormControl>

	);
}