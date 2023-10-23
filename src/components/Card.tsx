import { Box, Icon, Text } from "native-base";
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

type Props = TouchableOpacityProps & {
    data: any,
    cardType: "program" | "article" | "institution",
    cardContext: "feed" | "articles" | "adminPrograms" | "adminInstitutions" | "myPrograms"
}

type data = {
    institutionData: InstitutionDTO,
    programData: ProgramDTO,
    articleData: ArticleDTO
}


export function Card({ data, cardType, cardContext, ...rest }: Props) {
    console.log(cardType, cardContext)
    const { t, i18n } = useTranslation();

    const status = "pending" //remover depois
    console.log(data)

    return (
        <>
            {cardType !== "article" && (
                    cardContext === "adminPrograms" ||
                    cardContext === "adminInstitutions" ||
                    cardContext === "myPrograms") &&
                    <ActionButton
                        status={status}
                    />
                }
            <Box p="5" rounded="3xl" bg={"lightGreen.500"} height={160}>

                <Text fontSize="md" fontFamily="heading" numberOfLines={1} width={230}>
                    {cardType === "program"
                        ? data.name
                        : cardType === "article"
                            ? data.title
                                : data.institutionName
                    }
                </Text>
                <Box>
                    <Text fontSize="sm" color="black" mt={1} p={1} numberOfLines={3}>
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
                <Box mt={2} >
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
                    onPress={() => { console.log("oi") }}
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
