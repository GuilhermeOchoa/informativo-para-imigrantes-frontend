import { HStack, Icon, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { ArticleDTO } from "@dtos/ArticleDTO";
import { decode } from 'html-entities';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';

type Props = TouchableOpacityProps & {
    data: ArticleDTO
}

export function CardArticle({ data, ...rest }: Props) {
    const { t, i18n } = useTranslation();

    return (
        <TouchableOpacity {...rest}>
            <HStack flex={1} bg="lightGreen.500" alignItems="center" p={2} rounded="md" mb={4}>

                <VStack flex={1}>
                    <Text mb={2} fontSize="lg" fontFamily="heading">
                        {data.title}
                    </Text>

                    <Text fontSize="md" color="black" mt={1} numberOfLines={3}>
                        {decode(data.content)}
                    </Text>

                    <HStack justifyContent="flex-end" alignItems="flex-end" mt={2}>
                        <Text color="blue.900" fontSize="md">
                            {t("ver mais")}
                        </Text>

                        <Icon
                            as={MaterialIcons}
                            name="arrow-forward"
                            size={5}
                            color="blue.900"
                        />
                    </HStack>
                </VStack>

            </HStack>
        </TouchableOpacity>
    );
}
