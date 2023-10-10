import { Avatar, Box, Circle, Fab, HStack, Icon, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { decode } from 'html-entities';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { ProgramDTO } from "@dtos/ProgramDTO";
import { ArticleDTO } from "@dtos/ArticleDTO";
import { InstitutionDTO } from "@dtos/InstitutionDTO";
import { ActionButton } from "./ActionButton";

type Props = TouchableOpacityProps & {
    data: ProgramDTO | ArticleDTO | InstitutionDTO, //define o tipo de dado que será renderizado
    cardType: "program" | "article", //define o tipo de card que será renderizado
    cardContext: "feed" | "articles" | "adminPrograms" | "adminInstitutions" | "myPrograms" //define o contexto em que o card será renderizado
}

const mockedProgramData: ProgramDTO = { //remover depois
    name: "Programa de ensino de inglês para imigrantes",
    description: " O programa de ensino de inglês para imigrantes é um programa que visa ensinar inglês para imigrantes",
    initialDate: "2021-08-01",
    endDate: "2021-12-01",
    language: "en",
    link: " https://www.google.com/ ",
    timeEnrollment: 120,
    institutionId: 1,
    status: "APPROVED",
    timeDuration: 30,
    minimalRequirements: ["Ser imigrante", "Ter vontade de aprender"],
}

const mockedArticleData: ArticleDTO = { //remover depois
    id: "1",
    title: "Programa de ensino de inglês para imigrantes",
    content: " O programa de ensino de inglês para imigrantes é um programa que visa ensinar inglês para imigrantes",
    externalUrl: "en",
}


const mockedInstitutionData: InstitutionDTO = { //remover depois
    institutionName: "Programa de ensino de inglês para imigrantes",
    email: "O programa de ensino de inglês para imigrantes é um programa que visa ensinar inglês para imigrantes",
    cnpj: "en",
    type: "ONG",
    registrantName: "Fulano de Tal",
    registrantCpf: "12345678910",
    registrantRole: "Gerente",
    phone: "12345678910",
    attachment: "",
    password: "vault"
}


export function Card(/*{ data, cardType, cardContext, ...rest }: Props*/) {
    const { t, i18n } = useTranslation();

    const type = "approved" //remover depois
    return (
        <HStack bg="lightGreen.500" alignItems="center" p={5} rounded="3xl" mb={4}>

            <VStack>
                    <Text fontSize="md" fontFamily="heading" width="70%">
                        {"Programa 1"}
                    </Text>

                    {/*<Avatar variant="rounded" marginRight="9"/> Boa! mas pra facilitar o uso das props, vamos usar o Action Button (ele já vem com o método "onPress")*/}

                <Text fontSize="sm" color="black" mt={1} mb={7} numberOfLines={3} width="40%">
                    Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet
                </Text>

            </VStack>
            <ActionButton
                status={type}
                onPress={() => { console.log("oi") }
            }
            /> 
            
        </HStack>
    );
}
