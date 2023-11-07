import { VStack, HStack, View, Text, Image, Center } from "native-base";
import { LogBox, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from '@routes/app.routes';



import pucrsmock from '@assets/pucrsmock.png'

//ainda faltando estilizar a página

export function AcceptPrograms() {


    const navigation = useNavigation<AppNavigatorRoutesProps>();
    function declinedScreen() {
        navigation.navigate('declinedScreen');
    }



    return (
        <VStack flex={1} pb={6} mt={12} bg="#F8F8F8">
            <View style={styles.circle}>
                <Image source={pucrsmock} alt="Image logo" style={styles.logo} />
            </View>
            <View>
                <Text color={"#5E4C5A"} fontSize={23} alignSelf={'center'} fontWeight={'bold'}>Programa de Auxílio ao Imigrante</Text>
            </View>

            <View>
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={true} style={styles.scrollView}>

                    <View pt={4}>
                        <Text ml={8} style={styles.info}>Instituição: Pontifícia Universidade Católica do Rio Grande do Sul</Text>
                    </View>

                    <View pt={2} style={styles.desc}>
                        <Text style={styles.info}>Descrição: </Text>
                        <View>
                            <ScrollView showsVerticalScrollIndicator={true} style={styles.contentContainer}>
                                <Text pl={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec viverra sem magna, vitae posuere quam ultrices nec. Curabitur scelerisque est eu arcu tincidunt molestie. Donec non efficitur justo, a placerat velit. Cras nibh felis, semper aliquet odio sed, tempus maximus orci. Nunc eu neque eu metus convallis fermentum. In hac habitasse platea dictumst. Donec id orci bibendum, condimentum mi sed, eleifend est. Nulla dictum blandit imperdietLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at enim augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec viverra sem magna, vitae posuere quam ultrices nec. Curabitur scelerisque est eu arcu tincidunt molestie. Donec non efficitur justo, a placerat velit. Cras nibh felis, semper aliquet odio sed, tempus maximus orci. Nunc eu neque eu metus convallis fermentum. In hac habitasse platea dictumst. Donec id orci bibendum, condimentum mi sed, eleifend est. Nulla dictum blandit imperdiet.                                
                                </Text>
                            </ScrollView>
                        </View>

                        <View style={styles.infoContainer}>
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
                                <TouchableOpacity>
                                    <Text style={styles.link}>www.pucrs.com.br</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.info}>Anexo:</Text>

                        </View>

                    </View>

                    <View style={styles.button}>

                        <Button
                            title={"Aprovar programa"}
                            //onPress={oi}
                            rounded="full"
                            variant="solid"
                            style={styles.accept}
                            fontSize={'md'}
                            color={"white"}

                        />


                        <Button
                            title={"Recusar programa"}
                            onPress={declinedScreen}
                            rounded="full"
                            variant="outline"
                            style={styles.decline}
                            fontSize={'md'}
                        />
                    </View>


                </ScrollView>
            </View>

        </VStack>

    )
}

const styles = StyleSheet.create({
    circle: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        overflow: "hidden",
        marginTop: 20,
        marginBottom: 20,
    },
    info: {
        fontSize: 16,
        fontWeight: 'bold',
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
    accept: {
        backgroundColor: '#55917F',
        alignSelf: 'center',
        marginTop: 20,
    },
    decline: {
        backgroundColor: "#fff",
        alignSelf: 'center',
        marginTop: 4,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginTop: 25,
        //marginHorizontal: 3,
        borderTopColor: '#000000',
        borderTopWidth: 1,
    },
    contentContainer: {
        backgroundColor: '#E5E5E5',
        height: 238,
        borderRadius: 6,
        borderWidth: 0.6,
    },
    desc: {
        width: 321,
        height: 571,
        //backgroundColor: "blue",
        alignSelf: 'center',

    },
    button: {
        width: 400,
        height: 300,
        //backgroundColor: 'blue', 
        alignSelf: 'center',
        // padding: 20,
    },
    link: {
        color: '#0891B2',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    }
})