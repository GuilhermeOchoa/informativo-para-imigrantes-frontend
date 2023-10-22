import { Input as NativeBaseInput, IInputProps, FormControl, Text, DeleteIcon, IconButton, Pressable, Box, Center } from 'native-base';;
import DateTimePicker from "@react-native-community/datetimepicker"
import { useState } from 'react';
import { Button } from '@components/Button';
import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = IInputProps & {
    errorMessage?: string | null | any;
    selectedDate: string;
    selectDateFunction: (type: string) => void;
};

export function DateInput({ errorMessage, selectDateFunction, selectedDate, ...rest }: Props) {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState<boolean>(false);

    // const toggleDatePicker = () => {
    //     console.log(!showPicker)
    //     setShowPicker(!showPicker);
    // }

    const teste = ({ type }: any, selectedDate: any) => {
        setShowPicker(Platform.OS === 'ios');
        const currentDate = selectedDate;
        setDate(currentDate);
        selectDateFunction(formatarData(currentDate));
    }


    function formatarData(data: string): string {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <FormControl mb={10} isInvalid={!!errorMessage} {...rest}>

                {/* Conditional rendering based on iOS or Android */}
                {Platform.OS === 'ios' &&
                    (
                    <Center>
                        <DateTimePicker
                                mode="date"
                                display="default"
                                value={date}
                                onChange={teste}
                            />
                    </Center>
                    )
                }

                {Platform.OS === 'android' &&
                    <Button
                        onPress={() => setShowPicker(!showPicker)}
                        title={selectedDate ? selectedDate : "clique para selecionar"}
                        width={"100%"}
                        borderRadius={10}
                        borderWidth={1}
                        borderColor={errorMessage ? "red.500" : "green.700"}
                        variant={'outline'}
                    >
                    </Button>
                }
                {Platform.OS === 'android' &&
                    showPicker &&
                    (
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <DateTimePicker
                                    mode="date"
                                    display="default"
                                    value={date}
                                    onChange={teste}
                                />
                            </View>
                        </View>
                    )
                }

                <FormControl.ErrorMessage>
                    <Text>Campo obrigatório</Text>
                </FormControl.ErrorMessage>
            </FormControl>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})
