import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Image, useToast,Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { TextDTO } from '@dtos/TextDTO';
import { getText } from '@services/Texts';
import { AppError } from '@utils/AppError';
import {CarouselSlides} from "@components/CarouselSlides"; // Import your CarouselSlides component
import { MenuSelectLanguage } from "@components/MenuSelectLanguage";
import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';


import flag_br from "@assets/flag_br.png";

export function Onboarding() {
  const { t, i18n } = useTranslation();
  const [texts, setTexts] = useState<TextDTO[]>([]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();

  async function fetchText(language: string, screen: string, sequence: number) {
    try {
      const response = await getText(language, screen, sequence);
      setTexts(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Nao foi possivel carregar os textos.";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500"
      });
    }
  }

  useEffect(() => {
    fetchText('', '', 0);
  }, [])

  function onboarding02() {
    navigation.navigate('onboarding02');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MenuSelectLanguage onLanguageChange={() => fetchText(i18n.language === "pt_BR" ? "en_US" : "pt_BR", '', 0)} style={styles.bottomRightComponent}></MenuSelectLanguage>
      </View>
      <CarouselSlides textList={texts} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 0,
    margin: 0,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingBottom: 50,
  },
  flagIcon: {
    width: 22,
    height: 22,
  },
  bottomRightComponent: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});