import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Text, VStack, Button, View, Image } from 'native-base';
import { SafeAreaView } from 'react-native';
import onboardingImg from '@assets/onboarding_img03.png';
import styles from "./styles";



export function Onboarding04() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function goHome() {
        navigation.navigate('home');
    }
    return (
        <VStack style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerContainer} />
                <Text style={styles.titleText}>
                    Tudo pronto!
                </Text>
                <View style={styles.squareContainer}>
                    <Image source={onboardingImg} style={styles.squareImage} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.messageText}>
                        Toque na tela ou deslize para a esquerda para começar a utilizar o aplicativo.
                    </Text>
                </View>

                <Button style={styles.button} onPress={goHome}>
                    <Text style={styles.buttonText}>Início</Text>
                </Button>
            </SafeAreaView>
        </VStack>
    );
}

