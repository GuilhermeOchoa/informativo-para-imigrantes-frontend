import { AppNavigatorRoutesProps } from "@routes/onboarding.routes";
import React, { useState } from "react";
import {
  Image,
  Text,
  VStack,
  HStack,
  Divider,
  Center,
  Icon,
  useTheme,
  Box,
  Button,
  View,
} from "native-base";
import logo from "@assets/logo.png";

import { Onboarding } from "@screens/Onboarding";
import { Articles } from "@screens/Articles";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet } from "react-native";

export function SelectRegister() {
  const { sizes, colors } = useTheme();

  const iconsSize = sizes[2];

  const [isDetailUserVisible, setIsDetailUserVisible] = React.useState(false);
  const [isDetailInstitutionVisible, setIsDetailInstitutionVisible] =
    React.useState(false);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleClickableTextlPress = () => {
    alert("adicionar redirect para tela de login");
  };

  const openUserDetail = () => {
    setIsDetailUserVisible(true);
    setIsDetailInstitutionVisible(false);
  };

  const openInstitutionDetail = () => {
    setIsDetailUserVisible(false);
    setIsDetailInstitutionVisible(true);
  };

  function Articles() {
    console.log("teste");
    navigation.navigate("articles");
  }

  const ClickableText = ({ onPress }: any) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <VStack>
          <Box p={8} justifyContent="center" alignItems="center">
            <Text fontSize="md">
              Ja tem uma conta?{" "}
              <Text textDecorationLine="underline" color={colors.green[700]}>
                Entre aqui
              </Text>{" "}
            </Text>
          </Box>
        </VStack>
      </TouchableOpacity>
    );
  };

  const DetailInstitution = () => {
    if (isDetailInstitutionVisible) {
      return (
        <Box justifyContent="center" alignItems="center" maxH={180}>
          <HStack bg="lightGreen.500" borderRadius={10}>
            <VStack>
              <Center p={2}>
                <Icon
                  as={Ionicons}
                  name="information-circle-outline"
                  color={colors.black}
                  size={iconsSize}
                />
              </Center>
            </VStack>

            <VStack flex={1}>
              <Text fontFamily="heading" fontSize="md" py={2}>
                Instituição de ensino / ONG
              </Text>
              <Text fontFamily="body" fontSize="md" py={2}>
                Praesent velit nunc, luctus tincid Donec nec pharetra magna.
              </Text>
            </VStack>
          </HStack>
        </Box>
      );
    } else {
      return null;
    }
  };

  const DetailUser = () => {
    if (isDetailUserVisible) {
      return (
        <Box justifyContent="center" alignItems="center" maxH={180}>
          <HStack bg="lightGreen.500">
            <VStack>
              <Center p={2}>
                <Icon
                  as={Ionicons}
                  name="information-circle-outline"
                  color={colors.black}
                  size={iconsSize}
                />
              </Center>
            </VStack>

            <VStack flex={1}>
              <Text fontFamily="heading" fontSize="md" py={2}>
                Sou Imigrante em busca de oportunidades
              </Text>
              <Text fontFamily="body" fontSize="md" py={2}>
                Praesent velit nunc, luctus tincid Donec nec pharetra magna.
              </Text>
            </VStack>
          </HStack>
        </Box>
      );
    } else {
      return null;
    }
  };

  return (
    <VStack flex={1} px={6} pb={6} mt={12}>
      <HStack alignItems="center" m={2}>
        <Center flex={1}>
          <Text fontFamily="body" fontSize="xl">
            Cadastro de Informacao
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
        <Divider my={4} bgColor="green.500" />
        <HStack>
          <Center>
            <Text fontSize="lg">Procuro informacoes</Text>
          </Center>
          <Center ml="20">
            <Divider orientation="vertical" h={10} bgColor="green.500" />
          </Center>

          <Center flex={1}>
            <Button bgColor={"white"} onPress={() => openUserDetail()}>
              <Icon
                as={Ionicons}
                name="information-circle-outline"
                color={colors.green[700]}
                size={iconsSize}
              />
            </Button>
          </Center>
        </HStack>
        <Divider my={4} bgColor="green.500" />
        <HStack>
          <Center>
            <Text fontSize="lg">Sou instituicao de ensino </Text>
          </Center>

          <Center ml="9">
            <Divider orientation="vertical" h={10} bgColor="green.500" />
          </Center>

          <Center flex={1}>
            <Button bgColor={"white"} onPress={() => openInstitutionDetail()}>
              <Icon
                as={Ionicons}
                name="information-circle-outline"
                color={colors.green[700]}
                size={iconsSize}
              />
            </Button>
          </Center>
        </HStack>

        <Divider my={4} bgColor="green.500" />

        <DetailUser />
        <DetailInstitution />

        <Box>
          <ClickableText onPress={handleClickableTextlPress}></ClickableText>
        </Box>
      </VStack>
    </VStack>
  );
}
