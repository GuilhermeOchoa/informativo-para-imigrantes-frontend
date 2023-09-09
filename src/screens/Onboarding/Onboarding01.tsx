import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Text, VStack, View, Button, Image } from 'native-base';
import { SafeAreaView } from 'react-native';

import { useText } from './../../hooks/useText'

import styles from './styles';

export function Onboarding01() {


    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function onboarding02() {
        navigation.navigate('onboarding02');

    }

     const textObject = useText('en', 'onboarding_title', 1);

      console.log(textObject)
    return (
        <VStack style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <View style={styles.languageText}>
                        <Text>Português (Brasil)</Text>
                        <View style={styles.flagIcon}>
                            <Image source={require('./mocks/brasil.png')} style={styles.squareImage} />
                        </View>
                    </View>
                </View>
                <View style={styles.topContainer}>
                    <Text style={styles.welcomeText}>{textObject?.data.content}</Text>
                </View>
                <View style={styles.logoImage}>
                    <Image source={require('./mocks/logo.png')} />
                </View>
                <View style={styles.topContainer}>
                    <Text style={styles.appNameText}>Nome do aplicativo</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.introText}>
                        Antes de começar, vamos apresentar o aplicativo para que você possa aproveitá-lo ao máximo.
                    </Text>
                </View>

                <Button style={styles.button} onPress={onboarding02}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </Button>
            </SafeAreaView>
        </VStack>
    );
}


