import { VStack, View, Text, Image } from "native-base";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AdmNavigatorRoutesProps } from '@routes/adm.routes';
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import Modal from 'react-native-modal';

import pucrsmock from '@assets/pucrsmock.png'


export function AcceptInstitution() {

    const navigation = useNavigation<AdmNavigatorRoutesProps>();
    
    function declineInstitutions() {
        navigation.navigate('declineInstitution');
    }

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    function handleCancel() {
        navigation.goBack();
    }

    return (
        <VStack flex={1} pb={6} pt={12} bg="#F8F8F8">
            <TouchableOpacity onPress={handleCancel}>
                <Ionicons name="chevron-back-outline" size={28} color="#5E4C5A" style={styles.arrow} />
            </TouchableOpacity>
            <View style={styles.circle}>
                <Image source={pucrsmock} alt="Image logo" style={styles.logo} resizeMode="contain"/>
            </View>
            <View>
                <Text color={"#5E4C5A"} fontSize={23} alignSelf={'center'} fontWeight={'bold'}>Pontifícia Universidade Católica do Rio Grande do Sul</Text>
            </View>

            <View>
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={true} style={styles.scrollView}>
                    <View pt={4}>
                            <View>
                                <Text ml={8} style={styles.info}>Contato:</Text>
                                <Text ml={8}>atendimento@edu.pucrs.br</Text>
                            </View>
                            <View>
                                <Text ml={8} style={styles.info}>CNPJ:</Text>
                                <Text ml={8}>88.630.413/0002-81</Text>
                            </View>
                            <View>
                                <Text ml={8} style={styles.info}>Escopo Educacional:</Text>
                                <Text ml={8}>Ensino superior</Text>
                            </View>

                    </View> 

                    <View pt={2} style={styles.desc}>
                        <Text style={styles.info}>Descrição: </Text>
                        <View>
                            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={true} style={styles.contentContainer}>
                                <Text pl={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec viverra sem magna, vitae posuere quam ultrices nec. Curabitur scelerisque est eu arcu tincidunt molestie. Donec non efficitur justo, a placerat velit. Cras nibh felis, semper aliquet odio sed, tempus maximus orci. Nunc eu neque eu metus convallis fermentum. In hac habitasse platea dictumst. Donec id orci bibendum, condimentum mi sed, eleifend est. Nulla dictum blandit imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec viverra sem magna, vitae posuere quam ultrices nec. Curabitur scelerisque est eu arcu tincidunt molestie. Donec non efficitur justo, a placerat velit. Cras nibh felis, semper aliquet odio sed, tempus maximus orci. Nunc eu neque eu metus convallis fermentum. In hac habitasse platea dictumst. Donec id orci bibendum, condimentum mi sed, eleifend est. Nulla dictum blandit imperdiet.                                
                                </Text>
                                
                            </ScrollView>
                            
                        </View>
                        
                    </View>
                    <View style={styles.button}>
                    <Button
                            title={"Aprovar Instituição"}
                            onPress={handleModal}
                            rounded="full"
                            variant="solid"
                            fontSize={'lg'}
                            color={"white"}
                            marginBottom={1.5}
                            alignSelf={'center'}
                            backgroundColor={'#55917F'}
                            width={225}

                        />
                        <Button
                            title={"Recusar Instituição"}
                            onPress={declineInstitutions}
                            rounded="full"
                            variant="outline"
                            fontSize={'lg'}
                            alignSelf={'center'}
                            width={225}
                        />

                    </View>
                </ScrollView>

            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <Text fontWeight={'bold'} alignSelf={'center'} pb={2} color={'#5E4C5A'} fontSize={25}>Aprovar Instituição </Text>
                    <Text alignSelf={'center'} pb={2} fontSize={15}>Ao aceitar essa instituição,
                        ela estará permitida a solicitar cadastros de programas.
                        Deseja prosseguir?</Text>
                    <Button title="Aprovar Instituição" onPress={declineInstitutions} rounded="full" variant="solid" alignSelf={'center'} mb={1.5} />
                    <Button title="Cancelar" onPress={handleModal} rounded="full" variant="outline" alignSelf={'center'} />
                </View>
            </Modal>
        </VStack>
    )
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
        overflow: "hidden",
        marginBottom: 20,
    },
    info: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 8,
        color: '#5E4C5A',
    },
    infoContainer: {
        height: 300,
        width: 500,
    },
    logo: {
        width: "100%",
        height: "100%",
        alignSelf: 'center',
    },
    scrollView: {
        backgroundColor: '#F5F5F5',
    },
    contentContainer: {
        backgroundColor: '#f5f5f5',
        height: 238,
        borderRadius: 6,
        borderWidth: 0.3,
    },
    desc: {
        width: 321,
        height: 571,
        //backgroundColor: "blue",
        alignSelf: 'center',
        marginBottom: -310,
    },
    button: {
        paddingTop: 50,
        width: 400,
        height: 370,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: 360,
        height: 275,
    },
    arrow:{
        marginLeft: 10,
        marginTop: 10,
    },

})
