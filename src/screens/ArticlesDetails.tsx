import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { VStack, Center, HStack, Icon, Divider, Text, ScrollView, useToast } from 'native-base';

import { ArticleDTO } from '@dtos/ArticleDTO';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { decode } from 'html-entities';
import { Linking } from 'react-native';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';

export function ArticlesDetals() {
    const { t, i18n } = useTranslation();
    const route = useRoute();
    const article = route.params as ArticleDTO;

    const toast = useToast();

    const navigation = useNavigation();

    function openLink() {
        try {
            Linking.openURL("article.externalUrl");
        } catch (error) {
            toast.show({
                title: t("Nao foi possivel abrir o link"),
                placement: "top",
                bgColor: "red.500"
            });
        }
    }

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack flex={1} px={6} pb={6} mt={12}>
            <HStack alignItems="center" m={2}>
                <TouchableOpacity >
                    <Icon
                        as={MaterialIcons}
                        name="arrow-back"
                        size={7}
                        onPress={handleGoBack}
                    />
                </TouchableOpacity>

                <VStack flex={1} mr={7}>
                    <Center>
                        <Text fontFamily="body" fontSize="xl">
                            {t("Informativos")}
                        </Text>
                    </Center>
                </VStack>

            </HStack>

            <Divider my={4} bgColor="green.500" />

            <ScrollView pr={2}>
                <VStack alignItems="center">
                    <Text fontSize="lg" mt={2} textAlign="justify">
                        {article.title}
                    </Text>

                    <Text fontSize="md" mt={6} textAlign="justify">
                        {decode(article.content)}
                    </Text>

                    <TouchableOpacity onPress={openLink}>
                        <Text>
                            <Text>{t("Fonte")}: </Text>
                            <Text color="blue.900" textAlign="justify">
                                {article.externalUrl}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </VStack>
            </ScrollView>

        </VStack>

    );
}