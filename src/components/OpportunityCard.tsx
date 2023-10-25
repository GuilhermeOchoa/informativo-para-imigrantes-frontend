import { Icon, Text, VStack, HStack } from "native-base";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { Button } from "./Button";
import { OpportunityDTO } from '../dtos/OpportunityDTO';
import { ActionButton } from "./ActionButton";

type Props = TouchableOpacityProps & {
    data: any
}

type data = {
    opportunity: OpportunityDTO,
}

export function OpportunityCads({ data }: Props) {
    const { t, i18n } = useTranslation();

    return (

        <>
            <HStack p="3" rounded="3xl" bg={"lightGreen.500"} height={100}>

                <VStack  marginLeft={1} flex={1}>
                    <Text fontSize={20} marginBottom={22}>
                        {data.type}
                    </Text>

                </VStack>

                <VStack textAlign={"center"} margin={0} flex={1}>
                    <Text padding={0} fontSize={40} alignSelf={"flex-end"} marginRight={13}>
                        {data.quantity}
                    </Text>

                    <Text fontSize={20} marginLeft={3} alignSelf={"flex-end"} >
                        Itens
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
