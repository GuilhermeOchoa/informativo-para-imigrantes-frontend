import React, { useEffect, useState } from 'react';
import { VStack, Center, FlatList, HStack, useToast, Divider, Text } from 'native-base';

import { AppError } from '@utils/AppError';
import { ArticleDTO } from '@dtos/ArticleDTO';
import { getArticles } from '@services/Articles';
import { OpportunityCads } from '@components/OpportunityCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { Loading } from '@components/Loading';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { getCategoriesWithCount } from '@services/Programs';

export function Feed() {
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const toast = useToast();

    const { t, i18n } = useTranslation();

    async function fetchFeed() {
        return getCategoriesWithCount();
    }

    const oportunidades =[{
        type: "Ensino superior",
        quantity: 2
    },
    {
        type: "Ensino superior",
        quantity: 4
    },
    {
        type: "Ensino superior",
        quantity: 5
    }]

    useEffect(() => {
        fetchFeed();
    }, [i18n.language])

    return (
        <VStack flex={1} px={6} pb={6} mt={12}>
            <HStack alignItems="center" m={2}>

                <VStack flex={1}>
                    <Center>
                        <Text fontFamily="body" fontSize="xl">
                            {t("Oportunidades")}
                        </Text>
                    </Center>
                </VStack>
            </HStack>
            <Divider my={4} bgColor="green.500" />

            <FlatList
                    data={oportunidades}
                    renderItem={({ item }) => (
                    <OpportunityCads
                        data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 10 }}
                />

        </VStack>
    );
}