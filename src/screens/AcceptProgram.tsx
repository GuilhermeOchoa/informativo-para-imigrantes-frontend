import { VStack, View, Text, Image } from "native-base";
import { StyleSheet, ScrollView, TouchableOpacity, Linking, } from "react-native";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AdmNavigatorRoutesProps } from '@routes/adm.routes';
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import Modal from 'react-native-modal';
import { Loading } from '@components/Loading';
import { useAuth } from '@hooks/useAuth';

import pucrsmock from '@assets/pucrsmock.png'

export function AcceptProgram() {

    const { user, isLoadingUserStorageData } = useAuth();

    if (isLoadingUserStorageData) {
      return <Loading />;
    }

    const userType = user.type;

    const navigation = useNavigation<AdmNavigatorRoutesProps>();

    const handlePress = () => {
        const url = 'https://www.pucrs.br';
        Linking.openURL(url);
    };

    function declineProgram() {
        navigation.navigate('declineScreen');
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
                <Image source={pucrsmock} alt="Image logo" style={styles.logo} resizeMode="contain" />
            </View>
            <View style={styles.container}>
                <Text color={"#5E4C5A"} fontSize={23} alignSelf={'center'} fontWeight={'bold'}>Programa de Auxílio ao Imigrante</Text>
            </View>

            <View>
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={true} style={styles.scrollView}>
                    <View pt={2} style={styles.desc}>
                        <View>
                            <Text>
                                <Text style={styles.info}>
                                    <Text style={{ fontWeight: 'bold' }}>Instituição:</Text>
                                </Text>
                                <Text> Pontifícia Universidade Católica do Rio Grande do Sul</Text>
                            </Text>
                        </View>
                        <Text style={styles.info}>Descrição: </Text>
                        <View>
                            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={true} style={styles.contentContainer}>
                                <Text pl={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec viverra sem magna, vitae posuere quam ultrices nec. Curabitur scelerisque est eu arcu tincidunt molestie. Donec non efficitur justo, a placerat velit. Cras nibh felis, semper aliquet odio sed, tempus maximus orci. Nunc eu neque eu metus convallis fermentum. In hac habitasse platea dictumst. Donec id orci bibendum, condimentum mi sed, eleifend est. Nulla dictum blandit imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec viverra sem magna, vitae posuere quam ultrices nec. Curabitur scelerisque est eu arcu tincidunt molestie. Donec non efficitur justo, a placerat velit. Cras nibh felis, semper aliquet odio sed, tempus maximus orci. Nunc eu neque eu metus convallis fermentum. In hac habitasse platea dictumst. Donec id orci bibendum, condimentum mi sed, eleifend est. Nulla dictum blandit imperdiet.
                                </Text>
                            </ScrollView>
                        </View>

                        <View >
                            <View>
                                <Text style={styles.info}>Tipo de programa:</Text>
                                <Text>Ensino Superior</Text>
                            </View>
                            <View>
                                <Text style={styles.info}>Local do programa:</Text>
                                <Text>Rio Grande do Sul</Text>
                            </View>
                            <View>
                                <Text style={styles.info}>Periodo de inscrição:</Text>
                                <Text>31/10/2023 até 31/12/2023</Text>
                            </View>
                            <View>
                                <Text style={styles.info}>Periodo do programa:</Text>
                                <Text>01/01/2024 até 31/12/2024</Text>
                            </View>
                            <View>
                                <Text style={styles.info}>Idioma:</Text>
                                <Text>Português</Text>
                            </View>
                            <View>
                                <Text style={styles.info}>Mais infomacoes:</Text>
                                <TouchableOpacity onPress={handlePress}>
                                    <Text style={styles.link}>www.pucrs.com.br</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.button}>
                    {userType === 'ADMIN' && (
                        <Button
                            title={"Aprovar programa"}
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
                    )}
                    {userType === 'ADMIN' && (
                        <Button
                            title={"Recusar programa"}
                            onPress={declineProgram}
                            rounded="full"
                            variant="outline"
                            fontSize={'lg'}
                            alignSelf={'center'}
                            width={225}
                        />
                    )}
                    </View>
                </ScrollView>
            </View>

            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <Text fontWeight={'bold'} alignSelf={'center'} pb={2} color={'#5E4C5A'} fontSize={25}>Aprovar programa </Text>
                    <Text alignSelf={'center'} pb={3} fontSize={15}>Ao aceitar o programa,
                        ele será disponibilizado a todos usuários.
                        Deseja prosseguir?</Text>
                    <Button title="Aprovar programa" /*onPress={}*/ rounded="full" variant="solid" alignSelf={'center'} mb={1.5} width={240} fontSize={'lg'} />
                    <Button title="Cancelar" onPress={handleModal} rounded="full" variant="outline" alignSelf={'center'} width={240} fontSize={'lg'} />
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
        paddingTop: 18,
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
        alignSelf: 'center',

    },
    button: {
        width: 400,
        height: 370,
        marginTop: 190
    },
    link: {
        color: '#0891B2',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: 360,
        height: 250,
    },
    arrow: {
        marginLeft: 10,
        marginTop: 10,
    }
})
