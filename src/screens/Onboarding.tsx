import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text, View, Image, useToast } from 'native-base';
import { CarouselSlides } from "@components/CarouselSlides";
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { TextDTO} from '@dtos/TextDTO';
import { getText } from '@services/Texts';
import { AppError } from '@utils/AppError';

export function Onboarding() {
  const [texts, setTexts] = useState<TextDTO[]>([]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();


  function onboarding02() {
      navigation.navigate('onboarding02');
  }

  async function fetchText(language: string, screen: string, sequence: number){
      try{    
          const response = await getText(language, screen, sequence);
          setTexts(response.data);
      }catch(error){
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
    fetchText('','',0);
}, [])


  return (
      <CarouselSlides textList={texts}/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    padding: 0,
    margin: 0,
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    flex: 1,
  },
});
