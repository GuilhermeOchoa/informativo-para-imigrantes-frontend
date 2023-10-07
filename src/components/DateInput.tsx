import { Input as NativeBaseInput, IInputProps, FormControl, Text, ISelectProps, DeleteIcon, IconButton } from 'native-base';
import { parse, isValid, set } from 'date-fns';
import { useState } from 'react';
import { StyleSheet } from 'react-native';


type Props = IInputProps & {
	errorMessage?: string | null;
	inputTitle: string;
	onChange: (value: string) => void;
};

export function DateInput({ inputTitle, errorMessage = null, onChange, isInvalid, ...rest }: Props) {
	const [value, setValue] = useState('');
	const invalid = errorMessage !== null || isInvalid;

	const handleChange = (text: string) => {
		const cleanedText = text.replace(/\D/g, '');

		const formattedText = cleanedText
			.split('')
			.reduce((acc, char, index) => acc + char + (index === 1 || index === 3 ? '/' : ''), '');

		const parsedDate = parse(formattedText, 'dd/MM/yyyy', new Date());

		setValue(formattedText);
		if (isValid(parsedDate)) {
			onChange(text);
		}
	};

	return (
		<FormControl mb={10} isInvalid={invalid}>
			<Text style={{ fontSize: 15 }}>{inputTitle}</Text>
			<NativeBaseInput
				w="full"
				h={10}
				{...rest}
				onChangeText={handleChange}
				value={value}
				keyboardType="numeric"
				placeholder="DD/MM/YYYY"
				_focus={{
					borderColor: 'green.500',
					backgroundColor: 'white.800',
				}}
				fontSize={'lg'}
			/>
			<IconButton
				style={styles.icon}
				icon={<DeleteIcon size={6} style={styles.icon} />}
				onPress={() => setValue('')}

			/>
			<FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
		</FormControl>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	icon: {
		position: 'absolute',
		right: 10,
		top: 5,
		color: '#5E4C5A',
	},
});
