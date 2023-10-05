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

export function Select({ onValueChange, options, inputTitle, isInvalid, ...rest }: Props) {
  const invalid = isInvalid; //not being used
  return (
    <Center>
      <FormControl mb={8}  isInvalid={invalid} >
        <Text style={{ fontSize: 15 }} mb={2}>
          {inputTitle}
        </Text>
        <NativeBaseSelect
          {...rest}
          onValueChange={(itemValue) => onValueChange(itemValue)}
          _selectedItem={{
            borderColor: 'green.400',
            backgroundColor: 'green.200',
            bg: "green.700",
            endIcon: <CheckIcon size={5} />
          }}
          _item={{
            borderColor: 'green.400',
          }}
          variant="underlined"
          fontSize="lg"
        >
          {options.map((option) => (
            <NativeBaseSelect.Item
              key={option.value} 
              label={option.label} 
              value={option.value} />
          ))}

        </NativeBaseSelect>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          <Text>Campo obrigatório</Text>
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};