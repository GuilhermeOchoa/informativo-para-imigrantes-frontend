import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Image, useToast, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { TextDTO } from '@dtos/TextDTO';
import { getText } from '@services/Texts';
import { AppError } from '@utils/AppError';
import { CarouselSlides } from "@components/CarouselSlides";
import { MenuSelectLanguage } from "@components/MenuSelectLanguage";
import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';

export function Onboarding() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  function onLanguageChange(language: string) {
    setSelectedLanguage(language);
  }

  useEffect(() => {
    console.log(`Língua selecionada agora é: ${selectedLanguage}`);
  }, [selectedLanguage]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MenuSelectLanguage onLanguageChange={onLanguageChange} />
      </View>
      <Text>{selectedLanguage === 'pt_BR' ? 'Português' : 'Inglês'}</Text>
      <CarouselSlides navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    padding: 0,
    margin: 0,
    marginVertical: -30,
    flex: 1,
  },
  header: {
    marginTop: 60,
    paddingHorizontal: 12,
    paddingBottom: 0,
  },
});
