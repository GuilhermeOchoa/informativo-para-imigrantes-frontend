import { useNavigation } from '@react-navigation/native';
import { VStack, Center, Text } from 'native-base'
import { View, StyleSheet } from "react-native";

import { CardComponent } from '../components/ArticleCard';


export function ArticleCardListPage() {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack>
            <Text  fontSize={20} marginTop={2} marginLeft={2}>Informativo</Text>
            <CardComponent title="Artigo 1" description="Descrição artigo 1" />
        </VStack>

    );
}