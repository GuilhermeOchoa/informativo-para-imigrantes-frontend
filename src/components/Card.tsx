import { Avatar, Circle, HStack, Icon, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { decode } from 'html-entities';

import '@utils/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { ProgramDTO } from "@dtos/ProgramDTO";
import { ArticleDTO } from "@dtos/ArticleDTO";
import { InstitutionDTO } from "@dtos/InstitutionDTO";

type Props = TouchableOpacityProps & {
    data: ProgramDTO | ArticleDTO | InstitutionDTO, //define o tipo de dado que será renderizado
    cardType: "program" | "article", //define o tipo de card que será renderizado
    cardContext: "feed" | "articles" | "adminPrograms" | "adminInstitutions" | "myPrograms" //define o contexto em que o card será renderizado
}

const mockedProgramData: ProgramDTO = { //remover depois
	name: "Programa de ensino de inglês para imigrantes",
	description:" O programa de ensino de inglês para imigrantes é um programa que visa ensinar inglês para imigrantes",
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
    content:" O programa de ensino de inglês para imigrantes é um programa que visa ensinar inglês para imigrantes",
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


    return (
        <HStack bg="lightYellow.500" alignItems="center" p={5} rounded="lg" mb={4}>
            <VStack flex={1} >
                <HStack bg="lightYellow.500">
                    <Text mb={2} mt={2} fontSize="sm" fontFamily="heading" width="50%">
                        {"Título do programa: ensinando inglês para imigrantes"}
                    </Text>
                    <Avatar variant="rounded">
                    </Avatar>
                    
                </HStack>

                <Text fontSize="md" color="black" mt={1} mb={7} numberOfLines={3}>
                    Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet
                </Text>
            </VStack>
        </HStack>
    );
}
