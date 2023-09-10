import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Text, VStack, View, Button, Image } from 'native-base';
import { SafeAreaView } from 'react-native';
import styles from "./styles";
import onboarding02 from '@assets/onboarding02.png';





export function Onboarding02() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function onboarding03() {
        navigation.navigate('onboarding03');
    }
    return (
        <VStack style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerContainer} />
                <Text style={styles.titleText}>
                    Estamos aqui para ajudar
                </Text>
                <View style={styles.squareContainer}>
                    <Image source={onboarding02} style={styles.squareImage} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.messageText}>
                        Aqui você vai encontrar oportunidades educacionais e de crescimento pessoal, para ajudar na sua nova vida.
                    </Text>
                </View>

                <Button style={styles.button} onPress={onboarding03}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </Button>
            </SafeAreaView>
        </VStack>
    );
}

