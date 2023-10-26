import React, { useState } from 'react';
import {
    Select as NativeBaseSelect,
    Text,
    Center,
    FormControl,
    WarningOutlineIcon,
    ISelectProps,
    View,
    DeleteIcon,
    AddIcon
} from 'native-base';
//import { TagsDTO } from '@dtos/TagsDTO';
import { TagDisplay } from './TagDisplay';

type Props = ISelectProps & {
    isInvalid?: boolean;
    errorMessage?: string | null;
    inputTitle: string;
    label: string;
    onValueChange: (values: { label: string; value: any }[]) => void;
    //    options: TagsDTO[];
    options: string[];
};

export function TagSelection({
    onValueChange,
    options,
    inputTitle,
    errorMessage = null,
    isInvalid,
    ...rest
}: Props) {

    const [selectedValues, setSelectedValues] = useState<any[]>([]);
    const newItem = (itemValue: any) => selectedValues.find((obj) => obj === itemValue);

    const handleValueChange = (itemValue: any) => {
        setSelectedValues((prevSelectedValues) => {
            const updatedValues = newItem(itemValue)
                ? prevSelectedValues.filter((obj) => obj !== itemValue)
                : [...prevSelectedValues, itemValue];
    
            onValueChange(updatedValues);
            return updatedValues;
        });
    };

    return (
        <>
            <Center>
                <FormControl mb={6}>
                    <Text style={{ fontSize: 15 }} mb={2}>
                        {inputTitle}
                    </Text>

                    <View>
                        <NativeBaseSelect
                            {...rest}
                            borderColor={'green.500'}
                            variant="underlined"
                            onValueChange={handleValueChange}
                            _selectedItem={{
                                borderColor: 'green.400',
                                backgroundColor: 'green.200',

                            }}

                            fontSize={'lg'}
                            placeholder="Selecione as tags do programa"

                        >
                            {options.map((option) => (
                                <NativeBaseSelect.Item
                                    key={option}
                                    label={option}
                                    value={option}
                                    _pressed={{
                                        backgroundColor: 'green.600',
                                        borderRadius: 'lg',
                                    }}
                                    endIcon={newItem(option) ? <DeleteIcon size="lg" /> : <AddIcon size="lg" />}
                                >
                                    {option}
                                </NativeBaseSelect.Item>
                            ))}
                        </NativeBaseSelect>
                    </View>

                    <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                        {errorMessage}
                    </FormControl.ErrorMessage>
                </FormControl>
            </Center>

            <TagDisplay
                tags={selectedValues}
            />
        </>
    );
}
