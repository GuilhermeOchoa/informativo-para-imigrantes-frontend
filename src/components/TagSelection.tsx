import React, { useState } from 'react';
import { Select as NativeBaseSelect, CheckIcon, Text, Center, FormControl, WarningOutlineIcon, ISelectProps, View } from 'native-base';

type Props = ISelectProps & {
    isInvalid?: boolean;
    errorMessage?: string | null;
    inputTitle: string;
    label: string;
    onValueChange: (value: any) => void;
    options: { label: string; value: any }[];
};

export function TagSelection({
    onValueChange,
    options,
    inputTitle,
    errorMessage = null,
    isInvalid,
    ...rest
}: Props) {
    const invalid = errorMessage !== null || isInvalid;
    console.log('invalid', isInvalid);

    // Dummy state to store selected values
    const [selectedValues, setSelectedValues] = useState<any[]>([]); // add type annotation to selectedValues

    const handleValueChange = (itemValue: any) => {
        const updatedValues = [...selectedValues];

        if (updatedValues.includes(itemValue)) {
            // Remove the value if already selected
            const index = updatedValues.indexOf(itemValue);
            updatedValues.splice(index, 1);
        } else {
            // Add the value if not selected
            updatedValues.push(itemValue);
        }

        setSelectedValues(updatedValues);
        onValueChange(updatedValues);
    };

    return (
        <Center>
            <FormControl mb={8} paddingRight={6} isInvalid={invalid}>
                <Text style={{ fontSize: 15 }} mb={2}>
                    {inputTitle}
                </Text>
                <NativeBaseSelect
                    {...rest}
                    variant="underlined"
                    onValueChange={handleValueChange}
                    _selectedItem={{
                        borderColor: 'green.400',
                        backgroundColor: 'green.200',
                        endIcon: <CheckIcon size={5} />,
                    }}
                >
                    {options.map((option) => (
                        <NativeBaseSelect.Item key={option.value} label={option.label} value={option.value} />
                    ))}
                </NativeBaseSelect>
                <View>
                    {/* Display selected values as tags */}
                    {selectedValues.map((value) => (
                        <Text key={value} fontSize="sm" backgroundColor="gray.200" borderRadius="md" p={1} m={1}>
                            {value}
                        </Text>
                    ))}
                </View>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errorMessage}</FormControl.ErrorMessage>
            </FormControl>
        </Center>
    );
}
