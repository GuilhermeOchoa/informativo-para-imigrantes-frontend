import { Box, Hidden, Icon, Text } from "native-base";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { ProgramDTO } from "@dtos/ProgramDTO";
import { ArticleDTO } from "@dtos/ArticleDTO";
import { InstitutionDTO } from "@dtos/InstitutionDTO";
import { ActionButton } from "@components/ActionButton";
import { TagDisplay } from "@components/TagDisplay";
import { Button } from "./Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type Props = TouchableOpacityProps & {
    data: ProgramDTO | ArticleDTO | InstitutionDTO | any,
    cardType: "program" | "article" | "institution",
    cardContext: "feed" | "articles" | "adminPrograms" | "adminInstitutions" | "myPrograms",
    status?: string,
}

type data = {
    institutionData: InstitutionDTO,
    programData: ProgramDTO,
    articleData: ArticleDTO,
}


export function Card({ data, cardType, cardContext, status, ...rest }: Props) {
    const { t, i18n } = useTranslation();
    
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const onPressDetailsButton = () => {
        console.log("here!")
        navigation.navigate("detailScreen", {...data, cardType, cardContext});
    }

	return (
        <>
            {cardType !== "article" &&  (
                cardContext === "adminPrograms" ||
                cardContext === "adminInstitutions" ||
                cardContext === "myPrograms") &&
                <ActionButton
                    status={data.status as "PENDING" | "APPROVED" | "REJECTED"}
                />
            }
            <Box p="5" rounded="3xl" bg={"lightGreen.500"} height={160}>

                <Text fontSize="md" fontFamily="heading" numberOfLines={1} width={230}>
                    {cardType === "program"
                        ? data.title
                        : cardType === "article"
                            ? data.title
                            : data.institutionName
                    }
                </Text>

                <Box>
                    <Text fontSize="sm" color="black" mt={1} numberOfLines={1}>
                        {cardType === "program"
                            ? data.description
                            : cardType === "article"
                                ? data.content
                                : data.type + "\n "
                                + data.registrantName + " - "
                                + data.registrantRole + "\n Fone: "
                                + data.phone
                        }
                    </Text>
                </Box>

                <Box mt={2}>
                    {cardType === "program" &&
                        <TagDisplay
                            tags={data.tags}
                        />
                    }
                </Box>

            </Box>

            <Box>
                <Button
                    title={t("Ver mais")}
                    alignSelf={"flex-end"}
                    marginRight={4}
                    marginBottom={-6}
                    bottom={12}
                    height={10}
                    width={120}
                    rounded={100}
                    variant={"solid"}
                    onPress={onPressDetailsButton}
                    endIcon={
                        <Icon
                            as={MaterialIcons}
                            name="arrow-forward"
                            marginTop={1}
                            left={1}
                            size={5}
                            color="white"
                        />
                    }
                />
            </Box>
        </>

    );
}
