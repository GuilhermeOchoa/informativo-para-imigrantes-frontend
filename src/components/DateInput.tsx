import { Input as NativeBaseInput, IInputProps, FormControl, Text } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
  inputTitle: string;
  onChange: (value: string) => void;
};

export function DateInput({ inputTitle, errorMessage = null, onChange, isInvalid, value, ...rest }: Props) {
  const invalid = errorMessage !== null || isInvalid;

  const handleChange = (text: string) => {
    // Validate the input format here
    // You can use a library like 'date-fns' for more advanced date parsing and validation

    const isValid = /^\d{2}\/\d{2}\/\d{4}$/.test(text);

    if (isValid) {
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
        value={value}
        onChangeText={handleChange}
        keyboardType="numeric"
        placeholder="DD/MM/YYYY"
        _focus={{
          borderColor: 'green.500',
          backgroundColor: 'white.800',
        }}
        fontSize={'lg'}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
