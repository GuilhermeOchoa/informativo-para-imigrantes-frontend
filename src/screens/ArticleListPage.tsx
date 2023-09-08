import { useNavigation } from '@react-navigation/native';
import { VStack, Center, Text, FlatList } from 'native-base'
import { View, StyleSheet } from "react-native";

import { CardComponent } from '../components/ArticleCard';
import { useEffect, useState } from 'react';
import { api } from '@services/Api';
import { ArticleDTO } from 'src/models/ArticleDTO';


export function ArticleCardListPage() {
    const navigation = useNavigation();

    const [articles, setArticles] = useState<ArticleDTO[]>([])

    async function fetchArticles() {
        try {
            const response = await api.get("/3646ef4f-2ceb-491e-940d-826ad9a310a9")
            console.log(response.data)
            setArticles(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchArticles()
    })

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack>
            <Text fontSize={20} marginTop={2} marginLeft={2}>Informativo</Text>

            <FlatList
                data={articles}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <CardComponent data={item}/>
                )}
            />

        </VStack>

    );
}