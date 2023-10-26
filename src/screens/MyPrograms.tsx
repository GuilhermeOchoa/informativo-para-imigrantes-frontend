import {
  VStack,
  Text,
  HStack,
  Center,
  Divider,
  Icon,
  FlatList,
  Fab,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import "@utils/i18n/i18n";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { InstitutionNavigatorRoutesProps } from "@routes/institution.routes";
import { useNavigation } from "@react-navigation/native";

import { Card } from "@components/Card";

export function MyPrograms() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<InstitutionNavigatorRoutesProps>();

  const handleRegisterProgramForm = () => {
    navigation.navigate("registerProgramForm1");
  };

  const programas = [
    {
      name: "Programa de ensino de inglês para imigrantes",
      description:
        " O programa de ensino de inglês para imigrantes é um programa que visa ensinar inglês para imigrantes",
      initialDate: "2021-08-01",
      endDate: "2021-12-01",
      language: "en",
      tags: [
        { label: "tag1", value: "tag1" },
        { label: "tag2", value: "tag2" },
        { label: "tag3", value: "tag3" },
      ],
      link: " https://www.google.com/ ",
      timeEnrollment: 120,
      institutionId: 1,
      status: "APPROVED",
      timeDuration: 30,
      minimalRequirements: ["Ser imigrante", "Ter vontade de aprender"],
    },
    {
      name: "Programa de ensino de russo para imigrantes",
      description:
        " O programa de ensino de russo para imigrantes é um programa que visa ensinar russo para imigrantes",
      initialDate: "2021-08-01",
      endDate: "2021-12-01",
      language: "en",
      tags: [
        { label: "tag1", value: "tag1" },
        { label: "tag2", value: "tag2" },
        { label: "tag3", value: "tag3" },
      ],
      link: " https://www.google.com/ ",
      timeEnrollment: 120,
      institutionId: 1,
      status: "APPROVED",
      timeDuration: 30,
      minimalRequirements: ["Ser imigrante", "Ter vontade de aprender"],
    },
    {
      name: "Programa de ensino de francês para imigrantes",
      description:
        " O programa de ensino de francês para imigrantes é um programa que visa ensinar francês para imigrantes",
      initialDate: "2021-08-01",
      endDate: "2021-12-01",
      language: "en",
      tags: [
        { label: "tag1", value: "tag1" },
        { label: "tag2", value: "tag2" },
        { label: "tag3", value: "tag3" },
      ],
      link: " https://www.google.com/ ",
      timeEnrollment: 120,
      institutionId: 1,
      status: "APPROVED",
      timeDuration: 30,
      minimalRequirements: ["Ser imigrante", "Ter vontade de aprender"],
    },
    {
      name: "Programa de ensino de espanhol para imigrantes",
      description:
        " O programa de ensino de espanhol para imigrantes é um programa que visa ensinar espanhol para imigrantes",
      initialDate: "2021-08-01",
      endDate: "2021-12-01",
      language: "en",
      tags: [
        { label: "tag1", value: "tag1" },
        { label: "tag2", value: "tag2" },
        { label: "tag3", value: "tag3" },
      ],
      link: " https://www.google.com/ ",
      timeEnrollment: 120,
      institutionId: 1,
      status: "APPROVED",
      timeDuration: 30,
      minimalRequirements: ["Ser imigrante", "Ter vontade de aprender"],
    },
  ];

  return (
    <SafeAreaView>
      <VStack flex={1} px={6} pb={6} mt={12}>
        <HStack alignItems="center" m={2}>
          <HStack flex={1} alignItems="center">
            <Center flex={1} mr={7}>
              <Text fontFamily="body" fontSize="xl">
                {t("Meus Programas")}
              </Text>
            </Center>
          </HStack>
        </HStack>

        <Divider my={4} bgColor="green.500" />
        <FlatList
          data={programas}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Card data={item} cardType="program" cardContext="myPrograms" />
          )}
          ListEmptyComponent={() => (
            <VStack
              flex={1}
              justifyContent="center"
              alignItems="center"
              mt={16}
            >
              <Text fontFamily="body" fontSize="lg">
                {t("Nao ha programas disponiveis")}
              </Text>
            </VStack>
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 10 }}
        />
        <Fab
          placement="bottom-right"
          style={{ backgroundColor: "#55917F" }}
          renderInPortal={false}
          shadow={2}
          size="sm"
          icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
          onPress={handleRegisterProgramForm}
        />
      </VStack>
    </SafeAreaView>
  );
}
