import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { MenuSelectLanguage } from "@components/MenuSelectLanguage";
import { CarouselSlides } from "@components/CarouselSlides";

export function Onboarding() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  function onLanguageChange(language: string) {
    setSelectedLanguage(language);
  }

  useEffect(() => {
  }, [selectedLanguage]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MenuSelectLanguage onLanguageChange={onLanguageChange} />
      </View>
      <CarouselSlides navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    marginTop: -30,
  },
  header: {
    marginTop: 60,
    paddingHorizontal: 12,
    paddingBottom: 0,
  },
});