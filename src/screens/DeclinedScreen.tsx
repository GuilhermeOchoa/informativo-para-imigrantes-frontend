import { StyleSheet } from 'react-native';
import { VStack, Image, View, Text } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import pucrsmock from '@assets/pucrsmock.png'

export function DeclinedScreen() {


    return (
        <VStack flex={1} pb={6} mt={12} bg="#F8F8F8">
            <View style={styles.circle}>
                <Image source={pucrsmock} alt="Image logo" style={styles.logo} />
            </View>
            <View>
                <Text color={"#5E4C5A"} fontSize={23} alignSelf={'center'} fontWeight={'bold'}>Programa de Auxílio ao Imigrante</Text>
            </View>

            <View style={styles.content}>
                <Text color={"#ffffff"} fontWeight={'bold'}>Você está rejeitando a solicitacao</Text>
                <Text color={"#ffffff"}>Esclareça os motivos para a rejeição no campo abaixo, para que a Instituição possa verificar possíveis ações corretivas em uma eventual nova tentativa.</Text>

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
    logo: {
        width: "100%",
        height: "100%",
        alignSelf: 'center',
    },
    info: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        width: 333,
        height: 129,
        padding: 12,
        backgroundColor: '#5E4C5AD9',
        alignSelf: 'center',
        borderRadius: 6,
    }
})
