import { Icon, Text, VStack, HStack, Center } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { OpportunityDTO } from '@dtos/OpportunityDTO';
import { Button } from "@components/Button";

import { useTranslation } from 'react-i18next';

type Props = TouchableOpacityProps & {
    data: OpportunityDTO
};

export function OpportunityCads({ data, ...rest }: Props) {
    const { t, i18n } = useTranslation();

    return (
        <HStack flex={1} bg="lightGreen.500" alignItems="center" p={4} rounded="3xl" mb={4}>

            <VStack flex={1}>
                <Text fontSize={28} color="gray.800">{t(data.type)}</Text>

                <TouchableOpacity {...rest}>

                    <Button
                        title={t("Clique para ver mais")}
                        height={10}
                        width={200}
                        rounded={100}
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
                </TouchableOpacity>

            </VStack>

            <VStack >
                <Center>
                    <Text fontWeight="normal" fontSize={38} color="gray.800">{data.quantity}</Text>
                    <Text fontWeight="normal" fontSize={22} color="gray.800">Itens</Text>
                </Center>
            </VStack>

        </HStack>



    );
}
