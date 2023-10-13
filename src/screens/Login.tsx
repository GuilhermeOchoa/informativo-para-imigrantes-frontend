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
  View,
} from "native-base";
import logo from "@assets/logo.png";
import "@utils/i18n/i18n";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { MenuSelectLanguage } from "@components/MenuSelectLanguage";
import { Button } from "@components/Button";

export function Login() {
  const { sizes, colors } = useTheme();
  const { t, i18n } = useTranslation();

  const iconsSize = sizes[2];
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  function onLanguageChange(language: string) {
    setSelectedLanguage(language);
  }

  const handleClickableTextlPress = () => {
    alert("adicionar redirect para tela de login");
  };

  const handleForgotPassword = () => {
    alert("adicionar redirect para tela de esqueci minha senha");
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
    <VStack flex={1} px={6} pb={6} mt={12} backgroundColor={"#f8f8f8"}>
      <HStack justifyContent="flex-end" alignItems="flex-end" mr={2}>
        <MenuSelectLanguage onLanguageChange={onLanguageChange} />
      </HStack>
      <HStack alignItems="center" m={2}>
        <Center flex={1}>
          <Text fontFamily="body" fontSize="xl">
            {t("Bem-vindo(a)")}
          </Text>
        </Center>
      </HStack>
      <HStack alignItems="center" mt={10}>
        <Center flex={1}>
          <Image rounded="full" source={logo} alt="Image logo" />
        </Center>
      </HStack>

      <VStack mt={10}>
        <HStack>
          <Center>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Email" keyboardType="email-address" />
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Senha" secureTextEntry={true} />
            </View>
            <Center>
              <Text style={styles.text}>Email ou senha incorreto</Text>
            </Center>
            <Button style={styles.button} title="Login"></Button>
          </Center>
          <Center ml="9">
            <TouchableOpacity
              onPress={handleClickableTextlPress}
            ></TouchableOpacity>
          </Center>
        </HStack>
        <Center>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text>Esqueci minha senha</Text>
          </TouchableOpacity>
        </Center>

        <Center>
          <ClickableText onPress={handleClickableTextlPress}></ClickableText>
        </Center>
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    marginBottom: 20,
    width: 350,
    display: "flex",
    justifyContent: "center",
    height: 50,
    fontSize: 20,
    padding: 10,
  },
  button: {
    marginVertical: 20,
  },
  text: {
    color: 'red',
  }
});
