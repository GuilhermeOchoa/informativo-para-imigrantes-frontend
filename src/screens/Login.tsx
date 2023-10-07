import { AppNavigatorRoutesProps } from "@routes/onboarding.routes";
import React, { useState } from "react";
import {
  Image,
  Text,
  VStack,
  HStack,
  Divider,
  Center,
  useTheme,
  Box,
} from "native-base";
import logo from "@assets/logo.png";

import "@utils/i18n/i18n";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet } from "react-native";

export function Login() {
  const { sizes, colors } = useTheme();
  const { t, i18n } = useTranslation();

  const iconsSize = sizes[2];
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleClickableTextlPress = () => {
    alert("adicionar redirect para tela de login");
  };

  const ClickableText = ({ onPress }: any) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <VStack>
          <Box p={8} justifyContent="center" alignItems="center">
            <Text fontSize="md">
              Não tem uma conta?{" "}
              <Text textDecorationLine="underline" color={colors.green[700]}>
                Cadastre-se aqui
              </Text>{" "}
            </Text>
          </Box>
        </VStack>
      </TouchableOpacity>
    );
  };

  return (
    <VStack flex={1} px={6} pb={6} mt={12}>
      <HStack alignItems="center" m={2}>
        <Center flex={1}>
          <Text fontFamily="body" fontSize="xl">
            {t("Bem-vindo(a)")}
          </Text>
        </Center>
      </HStack>

      <Divider my={4} bgColor="green.500" />

      <HStack alignItems="center" mt={10}>
        <Center flex={1}>
          <Image rounded="full" source={logo} alt="Image logo" />
        </Center>
      </HStack>

      <VStack mt={10}>
        <HStack>
          <Center>
            <Text fontSize="lg">Sou instituicao de ensino </Text>
          </Center>

          <Center ml="9">
            <TouchableOpacity onPress={handleClickableTextlPress}>
              <Text fontSize="lg"> {t("Esqueci a senha")} </Text>
            </TouchableOpacity>
          </Center>
        </HStack>

        <Divider my={4} bgColor="green.500" />
        <Box>
          <ClickableText onPress={handleClickableTextlPress}></ClickableText>
        </Box>
      </VStack>
    </VStack>
  );
}
