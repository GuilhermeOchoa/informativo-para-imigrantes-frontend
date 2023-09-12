import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Text, VStack, Button, View, Image } from 'native-base';
import { SafeAreaView } from 'react-native';
import onboardingImg from '@assets/onboarding_img02.png';
import styles from "./styles";



export function Onboarding03() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function onboarding04() {
        navigation.navigate('onboarding04');
    }
    return (
        <VStack style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerContainer} />
                <Text style={styles.titleText}>
                    Proteção de dados
                </Text>
                <View style={styles.squareContainer}>
                    <Image source={onboardingImg} style={styles.squareImage} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.messageText}>
                        Jamais guardaremos qualquer tipo de dado seu. Você continuará anônimo, pelo tempo que desejar.
                    </Text>
                </View>

                <Button style={styles.button} onPress={onboarding04}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </Button>
            </SafeAreaView>
        </VStack>
    );
}

