import React, { useEffect, useState } from 'react';
import { VStack, Center, FlatList, HStack, useToast, Divider, Text } from 'native-base';

import { AppError } from '@utils/AppError';
import { ArticleDTO } from '@dtos/ArticleDTO';
import { getArticles } from '@services/Articles';
import { CardArticle } from '@components/CardArticle';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { Loading } from '@components/Loading';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';

export function Articles() {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState<ArticleDTO[]>([]);
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const toast = useToast();

    const { t, i18n } = useTranslation();

    async function fetchArticles() {
        try {
            setIsLoading(true);

            const response = await getArticles(i18n.language);
            setArticles(response.data);
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : t("Nao foi possivel carregar os informativos")

            toast.show({
                title,
                placement: "top",
                bgColor: "red.500"
            });
        } finally {
            setIsLoading(false);
        }
    }

    function handleArticlePress(article: ArticleDTO) {
        navigation.navigate("articleDetails", article);
    }

    useEffect(() => {
        fetchArticles();
    }, [i18n.language])

    return (
        <VStack flex={1} px={6} pb={6} mt={12}>
            <HStack alignItems="center" m={2}>

                <VStack flex={1}>
                    <Center>
                        <Text fontFamily="body" fontSize="xl">
                            {t("Informativos")}
                        </Text>
                    </Center>
                </VStack>

            </HStack>

            <Divider my={4} bgColor="green.500" />

            {isLoading ? <Loading /> :
                <FlatList
                    data={articles}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <CardArticle
                            onPress={() => handleArticlePress(item)}
                            data={item}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <VStack flex={1} justifyContent="center" alignItems="center" mt={16}>
                            <Text fontFamily="body" fontSize="lg">
                                {t("Nao ha informativos disponiveis")}
                            </Text>
                        </VStack>
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 10 }}
                />
            }
        </VStack>
    );
}