import React, { useState } from "react";
import { Button, HStack, Menu, Image } from "native-base";
import { useTranslation } from "react-i18next";

import BrasilsPng from "@assets/flag_br.png";
import EuaPng from "@assets/flag_us.png";
import FrancaPng from "@assets/flag_fr.png";
import EspanhaPng from "@assets/flag_es.png";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
	onLanguageChange: (language: string) => void;
}

export function MenuSelectLanguage({ onLanguageChange }: Props) {
	const { t, i18n } = useTranslation();

	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
	const [optionSelectedLanguage, setOptionSelectedLanguage] = useState([
		{
			id: "1",
			name: "pt",
			icon: BrasilsPng,
		},
		{
			id: "2",
			name: "en",
			icon: EuaPng,
		},
		{
			id: "3",
			name: "fr",
			icon: FrancaPng,
		},
		{
			id: "4",
			name: "es",
			icon: EspanhaPng,
		}
	]);

	function handleSelectLanguage(optionselectedLanguage: any) {
		setSelectedLanguage(optionselectedLanguage.name);

		i18n.changeLanguage(optionselectedLanguage.name);
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
								(() => {
									switch (selectedLanguage) {
										case "pt":
											return (
												<Image key={1} rounded="full" source={BrasilsPng} alt="imagem do idioma" w={10} h={10} />
											);
										case "en":
											return (
												<Image key={2} rounded="full" source={EuaPng} alt="imagem do idioma" w={10} h={10} />
											);
										case "fr":
											return (
												<Image key={3} rounded="full" source={FrancaPng} alt="imagem do idioma" w={10} h={10} />
											);
										case "es":
											return (
												<Image key={4} rounded="full" source={EspanhaPng} alt="imagem do idioma" w={10} h={10} />
											);
										default:
											return null;
									}
								})()
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