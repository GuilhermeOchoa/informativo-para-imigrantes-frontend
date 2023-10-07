import { Input as NativeBaseInput, IInputProps, FormControl, Text, ISelectProps, DeleteIcon, IconButton, Pressable } from 'native-base';;
import DateTimePicker from "@react-native-community/datetimepicker"
import { parse, isValid } from 'date-fns';
import { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';

type Props = IInputProps & ISelectProps & {
    errorMessage?: string | null | any;
    selectedDate: string;
    selectDateFunction: (type: string) => void;
};

export function DateInput({ errorMessage = null, selectDateFunction, selectedDate, ...rest }: Props) {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState<boolean>(false);

    const toggleDatePicker = () =>{
        setShowPicker(!showPicker);
    }

    const teste = ({type}: any, selectedDate: any)=>{
        if(type == "set"){
            toggleDatePicker();
            const currentDate = selectedDate;
            setDate(currentDate);
            selectDateFunction(formatarData(currentDate));
        }else {
            toggleDatePicker();
        }
    }

    function formatarData(data: string): string {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }


    return (
        <FormControl mb={10} isInvalid={!!errorMessage} {...rest}>

            {showPicker && (
                <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={teste}
            />
            )}
            
            <Pressable onPress={toggleDatePicker}>
                <NativeBaseInput
                w="full"
                h={10}
                {...rest}
                value={selectedDate}
                keyboardType="numeric"
                placeholder="dd/mm/aaaa"
                _focus={{
                    borderColor: 'green.500',
                    backgroundColor: 'white.800',
                }}
                onPressIn={(toggleDatePicker)}
                fontSize={'lg'}
            />
            </Pressable>
            <FormControl.ErrorMessage>
                <Text>Campo obrigatório</Text>
            </FormControl.ErrorMessage>
        </FormControl>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})