import {
    VStack,
    Text,
    HStack,
    Center,
    Divider,
    Icon,
    FlatList,
    Fab,
    useToast,
  } from "native-base";
  import "@utils/i18n/i18n";
  import { useTranslation } from "react-i18next";
  import { AntDesign } from "@expo/vector-icons";
  import { AdmNavigatorRoutesProps } from "@routes/adm.routes";
  import { useNavigation } from "@react-navigation/native";
  import { useAuth } from "@hooks/useAuth";
  import { ProgramDTO } from "@dtos/ProgramDTO";
  import { getAllProgram } from "@services/Program";
  import { AppError } from "@utils/AppError";
  
  import { Card } from "@components/Card";
  import { useState, useEffect } from "react";
  import { Loading } from '@components/Loading';
import { getInstitutionsByStatus } from "@services/Institution";
  
  export function PendingInstitutions() {
    const { t, i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation<AdmNavigatorRoutesProps>();
    const [institutions, setInstitutions] = useState<ProgramDTO[]>([]);
    const { user, isLoadingUserStorageData } = useAuth();
    const toast = useToast();
  
    async function fetchInstitutions() {
      try {
        setIsLoading(true);
  
        const response = await getInstitutionsByStatus("PENDING");
        console.log("recuperou----"+response.data);
        setInstitutions(response.data);
      } catch (error) {
        const isAppError = error instanceof AppError;
        const title = isAppError
          ? error.message
          : t("Nao foi possivel resgatar as instituições pendentes");
  
        toast.show({
          title,
          placement: "top",
          bgColor: "red.500",
        });
      } finally {
        setIsLoading(false);
      }
    }
  
    useEffect(() => {
      fetchInstitutions();
    }, [i18n.language]);
  
    return (
        <VStack flex={1} px={6} pb={6} mt={12}>
          {isLoading ? (
            <Loading />
          ) : (
            <FlatList
              data={institutions}
              renderItem={({ item }) => (
                <Card data={item} cardType="institution" cardContext="adminInstitutions" />
              )}
              ListEmptyComponent={() => (
                <VStack
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  mt={16}
                >
                  <Text fontFamily="body" fontSize="lg">
                    {t("Nao ha instituicoes pendentes")}
                  </Text>
                </VStack>
              )}
              showsVerticalScrollIndicator={false}
              _contentContainerStyle={{ paddingBottom: 10 }}
            />
          )}
        </VStack>
    );
  }
  