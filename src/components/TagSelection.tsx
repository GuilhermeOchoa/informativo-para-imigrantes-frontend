import React, { useState } from 'react';
import { 
        Select as NativeBaseSelect, 
        Text, 
        Center, 
        FormControl, 
        WarningOutlineIcon, 
        ISelectProps, 
        View, 
        HStack, 
        Badge, 
        DeleteIcon, 
        AddIcon 
    } from 'native-base';

type Props = ISelectProps & {
    isInvalid?: boolean;
    errorMessage?: string | null;
    inputTitle: string;
    label: string;
    onValueChange: (values: { label: string; value: any }[]) => void; 
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

    const [selectedValues, setSelectedValues] = useState<any[]>([]); 
    const handleValueChange = (itemValue: any) => {
        console.log(itemValue)
        
        const existingIndex = selectedValues.findIndex((obj) => obj.value === itemValue);
    
        if (existingIndex !== -1) {
          const updatedValues = [...selectedValues];
          updatedValues.splice(existingIndex, 1);
          setSelectedValues(updatedValues);
        } else {
          const selectedOption = options.find((option) => option.value === itemValue);
          if (selectedOption) {
            setSelectedValues([...selectedValues, selectedOption]);
            onValueChange([...selectedValues, selectedOption]);
          }
        }
      };

      const newItem = (itemValue: any) => selectedValues.find((obj) => obj.value === itemValue);
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
                                    key={option.value}
                                    label={option.label}
                                    value={option.value}
                                    _pressed={{
                                        backgroundColor: 'green.600',
                                        borderRadius: 'lg',
                                    }}
                                    endIcon={newItem(option.value) ? <DeleteIcon size="lg" /> : <AddIcon size="lg"/> }
                                >
                                    {option.label}
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
            
          <HStack space={3} flexWrap={"wrap"} mb={8}>
            {selectedValues.map((tag) => (
              <Badge variant={"outline"} colorScheme={"success"} mb={2} key={tag.value}>
                {tag.label}
              </Badge>
            ))}
          </HStack>
        </>
    );
}
