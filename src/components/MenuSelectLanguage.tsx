import React, { useState } from "react";
import { Button, HStack, Menu, Image, Text, Icon, useTheme } from "native-base";
import { useTranslation } from "react-i18next";
import BrasilsPng from "@assets/flag_br.png";
import EuaPng from "@assets/flag_us.png";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    onLanguageChange: () => Promise<void>;
  };

  export function MenuSelectLanguage({ onLanguageChange }: Props) {
    const { t, i18n } = useTranslation();
  
    let language = i18n.language === "pt_BR" ? "Portugues" : "English";
    console.log(language);
  
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
      },
    ]);
  
    async function handleSelectLanguage(optionselectedLanguage: any) {
      setSelectedLanguage(optionselectedLanguage.name);
  
      i18n.changeLanguage(optionselectedLanguage.name === "Portugues" ? "pt_BR" : "en_US");
      await onLanguageChange();
    }
  
    return (
      <Menu
        w={90}
        shouldOverlapWithTrigger={false}
        trigger={(triggerProps) => {
          return (
            <Button
              bg="white"
              w={90}
              alignSelf="flex-end"
              borderWidth={1}
              _pressed={{ bg: "white" }}
              {...triggerProps}
            >
              <HStack alignItems="center">
                <Text>{selectedLanguage === "Portugues" ? "PT" : "EN"}</Text>
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