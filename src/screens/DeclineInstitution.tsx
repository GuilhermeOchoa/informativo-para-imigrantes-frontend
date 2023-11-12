import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { VStack, Image, View, Text, HStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from '@components/Button';
import { useNavigation } from "@react-navigation/native";
import { AdmNavigatorRoutesProps } from '@routes/adm.routes';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import pucrsmock from '@assets/pucrsmock.png';

export function DeclineInstitution() {

    const navigation = useNavigation<AdmNavigatorRoutesProps>();
    function handleCancel() {
        navigation.goBack();
    }

    const [reason, setReason] = React.useState('');

    return (
        <VStack flex={1} pb={6} mt={12} bg="#F8F8F8">
            <TouchableOpacity>
                <Ionicons name="chevron-back-outline" size={28} color="#5E4C5A" style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.circle}>
                <Image source={pucrsmock} alt="Image logo" style={styles.logo} resizeMode="contain" />
            </View>
            <View style={styles.container}>
                <Text color={"#5E4C5A"} fontSize={23} alignSelf={'center'} fontWeight={'bold'}>
                    Programa de Auxílio ao Imigrante
                </Text>
            </View>
            <View style={styles.content}>
                <HStack space={2}>
                <AntDesign name="infocirlceo" size={23} color="white" />
                    <Text color={"#ffffff"} fontWeight={'bold'} pl={1}>
                        Você está rejeitando a solicitação
                    </Text>
                </HStack>
                <Text color={"#ffffff"} pl={9}>
                    Esclareça os motivos para a rejeição no campo abaixo, para que a Instituição possa verificar possíveis ações corretivas em uma eventual nova tentativa.
                </Text>
            </View>
            <TextInput
                style={styles.textInput}
                placeholder="Digite o motivo da rejeicao da instituicao"
                onChangeText={(text) => setReason(text)}
                value={reason}
                multiline={true}
                caretHidden={false}
            />
            <View style={styles.button}>
                <Button
                    title={"Recusar instituição"}
                    //onPress={}
                    rounded="full"
                    variant="solid"
                    fontSize={'lg'}
                    color={"white"}
                    alignSelf={'center'}
                    marginBottom={1.5}
                    backgroundColor={'#55917F'}
                    width={218}

                />
                <Button
                    title={"Cancelar"}
                    onPress={handleCancel}
                    rounded="full"
                    variant="outline"
                    fontSize={'lg'}
                    alignSelf={'center'}
                    width={218}
                />
            </View>
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
    },
    circle: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        overflow: 'hidden',
        marginBottom: 20,
    },
    logo: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    icon: {
        marginLeft: 10,
        marginTop: 10,      
    },
    info: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 18,
    },
    content: {
        width: 333,
        height: 129,
        padding: 12,
        backgroundColor: '#5E4C5AD9',
        alignSelf: 'center',
        borderRadius: 6,
        marginTop: 20,
    },
    button: {
        width: 400,
        height: 370,
        marginTop: 35
    },
    textInput: {
        width: 333,
        height: 150,
        backgroundColor: '#f5f5f5',
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 6,
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: 0.3,
        textAlignVertical: 'top'
    },
});
