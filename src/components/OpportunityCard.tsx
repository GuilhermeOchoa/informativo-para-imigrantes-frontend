import { Icon, Text, VStack, HStack } from "native-base";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { Button } from "./Button";

type Props = TouchableOpacityProps & {
    data: any,
    cardType: "program" | "article" | "institution",
    cardContext: "feed" | "articles" | "adminPrograms" | "adminInstitutions" | "myPrograms"
}


export function OpportunityCads({ data, cardType, cardContext, ...rest }: Props) {
    console.log(cardType, cardContext)
    const { t, i18n } = useTranslation();

    return (
        <>
            <HStack p="3" alignItems="center" rounded="3xl" bg={"lightGreen.500"} height={100}>

                <VStack flex={1}>
                    <Text marginLeft={2} fontSize="22" numberOfLines={1} width={230}>
                        {cardType === "program"
                            ? data.name
                            : cardType === "article"
                                ? data.title
                                : data.institutionName
                        }
                    </Text>

                    <Text marginLeft={2} fontSize="22" numberOfLines={1} width={230}>
                        {cardType === "program"
                            ? data.name
                            : cardType === "article"
                                ? data.title
                                : data.institutionName
                        }
                    </Text>

                </VStack>
            </HStack>

            <Button
                title={t("Clique para ver mais")}
                bottom={12}
                height={10}
                width={200}
                rounded={100}
                marginLeft={3}
                variant={"solid"}
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
        </>
    );
}
