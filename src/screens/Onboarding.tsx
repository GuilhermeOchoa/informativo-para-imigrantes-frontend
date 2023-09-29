import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { MenuSelectLanguage } from "@components/MenuSelectLanguage";
import { CarouselSlides } from "@components/CarouselSlides";
import { HStack, VStack } from "native-base";

export function Onboarding() {
    const { t, i18n } = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    function onLanguageChange(language: string) {
        setSelectedLanguage(language);
    }

    return (
        <VStack flex={1} bg="#F8F8F8">
            <HStack justifyContent="flex-end" alignItems="flex-end" mt={10} mr={2}>
                <MenuSelectLanguage onLanguageChange={onLanguageChange} />
            </HStack>

            <CarouselSlides />
        </VStack>
    );
}
