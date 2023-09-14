import React, { useState } from "react";
import { Button, HStack, Menu, Image, Text, Icon, useTheme } from "native-base";
import { useTranslation } from "react-i18next";
import BrasilsPng from "@assets/flag_br.png";
import EuaPng from "@assets/flag_us.png";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    onLanguageChange: (language: string) => void;
}

export function MenuSelectLanguage({ onLanguageChange }: Props) {
    const { t, i18n } = useTranslation();

    let language = i18n.language === "pt_BR" ? "Portugues" : "English";

    const [selectedLanguage, setSelectedLanguage] = useState(language);
    const [optionSelectedLanguage, setOptionSelectedLanguage] = useState([
        {
            id: "1",
            name: "Portugues",
            icon: BrasilsPng,
        },
        {
            id: "2",
            name: "Ingles",
            icon: EuaPng,
        }
    ]);

    function handleSelectLanguage(optionselectedLanguage: any) {
        setSelectedLanguage(optionselectedLanguage.name);

        i18n.changeLanguage(optionselectedLanguage.name === "Portugues" ? "pt_BR" : "en_US");
        onLanguageChange(optionselectedLanguage);
    }

    return (
        <Menu
            w={90}
            shouldOverlapWithTrigger={false}
            trigger={(triggerProps) => {
                return (
                    <Button
                        bg="#F8F8F8"
                        w={90}
                        alignSelf="flex-end"
                        borderWidth={0}
                        _pressed={{ bg: "gray" }}
                        {...triggerProps}
                    >
                        <HStack alignItems="center">
                            {
                                selectedLanguage === "Portugues" ?
                                    <Image key={1} rounded="full" source={BrasilsPng} alt="imagem do idioma" w={10} h={10} />
                                    :
                                    <Image key={2} rounded="full" source={EuaPng} alt="imagem do idioma" w={10} h={10} />
                            }
                        </HStack>
                    </Button>
                );
            }}
        >
            {optionSelectedLanguage.map((item) => (
                <Menu.Item
                    key={item.id}
                    onPress={() => {
                        handleSelectLanguage(item);
                    }}
                >
                    <HStack flex={1} justifyContent="center">
                        <Image rounded="full" source={item.icon} alt={item.name} w={10} h={10} />
                    </HStack>
                </Menu.Item>
            ))}
        </Menu>
    );
}