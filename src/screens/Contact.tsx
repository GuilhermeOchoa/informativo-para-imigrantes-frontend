import { VStack, Text, HStack, Center, Divider } from "native-base";

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { storageUserRemove } from "@storage/storageUser";

export function Contact() {
    const { t, i18n } = useTranslation();

	console.log(i18n.language)

    async function deletStorage() {
        try {
            await storageUserRemove();
        } catch (error) {
            throw error;
        }
    }

    return (
        <VStack flex={1} px={6} pb={6} mt={12}>
            <HStack alignItems="center" m={2}>

                <VStack flex={1}>
                    <Center>
                        <Text fontFamily="body" fontSize="xl" onPress={deletStorage}>
                            {t("Contato")}
                        </Text>
                    </Center>
                </VStack>

            </HStack>

            <Divider my={4} bgColor="green.500" />
        </VStack>
    )
}