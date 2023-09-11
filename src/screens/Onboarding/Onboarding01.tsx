import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState} from 'react';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Text, VStack, View, Button, Image, useToast } from 'native-base';
import { SafeAreaView } from 'react-native';
import { TextDTO} from '@dtos/TextDTO';
import { getText } from '@services/Texts';
import { AppError } from '@utils/AppError'
import styles from './styles';
import flag_br from '@assets/flag_br.png';
import logo from '@assets/logo.png';

export function Onboarding01() {
    const [text, setText] = useState<TextDTO>();

    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const toast = useToast();

    function onboarding02() {
        navigation.navigate('onboarding02');
    }

    async function fetchArticles(){
        try{    
            const response = await getText('en', 'onboarding_title', 1);
            setText(response.data);
        }catch(error){
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : "Nao foi possivel carregar os textos.";
        
            toast.show({
                title,
                placement: "top",
                bgColor: "red.500"
            });
        }
    }
    return (
        <VStack style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <View style={styles.languageText}>
                        <Text>Português (Brasil)</Text>
                        <View style={styles.flagIcon}>
                            <Image source={flag_br}  
                                defaultSource={flag_br}
                                alt="Portugues (Brasil)"
                                style={styles.squareImage}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.topContainer}>
                    <Text style={styles.welcomeText}>{text?.content}</Text>
                </View>
                <View style={styles.logoImage}>
                    <Image source={logo} />
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


