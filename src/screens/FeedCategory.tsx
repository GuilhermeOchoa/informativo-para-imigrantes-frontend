import React, { useEffect, useState } from 'react';
import { VStack, Center, FlatList, HStack, useToast, Divider, Text } from 'native-base';

import { AppError } from '@utils/AppError';
import { ArticleDTO } from '@dtos/ArticleDTO';
import { getArticles } from '@services/Articles';
import { Card } from '@components/Card';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { Loading } from '@components/Loading';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { CardArticle } from '@components/CardArticle';
import { ProgramDTO } from '@dtos/ProgramDTO';
import { getProgramByType } from '@services/Feed';

export function FeedCategory() {
    const [isLoading, setIsLoading] = useState(true);
    const [programs, setProgram] = useState<ProgramDTO[]>([]);
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const toast = useToast();
    const [programType, setProgramType] = "BASIC"

    const { t, i18n } = useTranslation();

    async function fetchPrograns() {
        try {
            setIsLoading(true);

            const response = await getProgramByType(programType);
            setProgram(response.data);
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


    // function handleArticlePress(article: ArticleDTO) {
    //     navigation.navigate("articleDetails", article);
    // }

    useEffect(() => {
        fetchPrograns();
    }, [i18n.language])

    return (
		<VStack flex={1} px={6} pb={6} mt={12}>
			<HStack alignItems="center" m={2}>

				<HStack flex={1} alignItems="center" >
					
					<Center flex={1} mr={7}>
						<Text fontFamily="body" fontSize="xl" >
							{t("Meus Programas")}
						</Text>
					</Center>

                    
				</HStack>

			</HStack>

			<Divider my={4} bgColor="green.500" />
			<FlatList
                    data={programs}
                    keyExtractor={item => item.name!}
                    renderItem={({ item }) => (
                    <Card
                        data={item}
                        cardType="program"
                        cardContext="myPrograms"
                        />
                    )}
                    ListEmptyComponent={() => (
                        <VStack flex={1} justifyContent="center" alignItems="center" mt={16}>
                            <Text fontFamily="body" fontSize="lg">
                                {t("Nao ha programas disponiveis")}
                            </Text>
                        </VStack>
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 10 }}
                />

		</VStack>
	);
}

