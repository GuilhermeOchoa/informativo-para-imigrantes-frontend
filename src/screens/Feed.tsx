import React, { useEffect, useState } from 'react';
import { VStack, Center, FlatList, HStack, useToast, Divider, Text } from 'native-base';

import { OpportunityCard } from '@components/OpportunityCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { getCategoriesWithCount } from '@services/Programs';
import { OpportunityDTO } from '@dtos/OpportunityDTO';

export async function Feed() {
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const toast = useToast();
    let feed: OpportunityDTO[] = []

    const { t, i18n } = useTranslation();

    async function fetchFeed() {
       try {
         const response = await getCategoriesWithCount();
         if (response) {
            feed = response.data.map((item: any) => ({
                type: item.type,
                quantity: item.quantity,
              }));
         }

         console.log(response)
       } catch (error) {
         
       }
     }
      


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
                    data={feed}
                    renderItem={({ item }) => (
                    <OpportunityCard
                        data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 10 }}
                />
        </VStack>
    );
}