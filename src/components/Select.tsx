import React from "react";
import { Select as NativeBaseSelect, CheckIcon, Text, Center, FormControl, WarningOutlineIcon, ISelectProps } from "native-base";

type Props = ISelectProps & {
  isInvalid?: boolean;
  errorMessage?: string | null;
  inputTitle: string;
  label: string;
  onValueChange: (value: any) => void;
  options: { label: string; value: any }[];
}

export function Select({ onValueChange, options, inputTitle, errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = errorMessage !== null || isInvalid;
  console.log("invalid", isInvalid);
  return (
    <Center>
      <FormControl mb={8} paddingRight={6} isInvalid={invalid} >
        <Text style={{ fontSize: 15 }} mb={2}>
          {inputTitle}
        </Text>
        <NativeBaseSelect
          {...rest}
          onValueChange={(itemValue) => onValueChange(itemValue)}
          _selectedItem={{
            borderColor: 'green.400',
            backgroundColor: 'green.200',
            endIcon: <CheckIcon size={5} 
          />
          }}
          
        >
          {options.map((option) => (
            <NativeBaseSelect.Item
              key={option.value} 
              label={option.label} 
              value={option.value} />
          ))}

        </NativeBaseSelect>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errorMessage}
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};