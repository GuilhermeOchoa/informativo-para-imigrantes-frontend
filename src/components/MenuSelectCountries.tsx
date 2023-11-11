import React, { useState } from "react";
import { Modal, FormControl, Input, Center, VStack, Box, IconButton, HStack, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { countryAcronyms } from '@utils/countriesList/acronym';
import { ChevronDownIcon } from "native-base";

type Props = {
	selectCountryFunction: (country: string) => void;
	selectedCountry: string | undefined;
};

export function MenuSelectCountries({ selectCountryFunction, selectedCountry }: Props) {
	const [t] = useTranslation();
	const [countryFilter, setCountryFilter] = useState('');
	const [isModalVisible, setIsModalVisible] = useState(false);

	const initialLabel = selectedCountry
		? countryAcronyms.find(country => country.value === selectedCountry)?.label
		: '';
	const [selectedLabel, setSelectedLabel] = useState(initialLabel);

	const filteredCountries = countryFilter
		? countryAcronyms
			.filter((country) => country.label.toLowerCase().includes(countryFilter.toLowerCase()))
			.slice(0, 2)
		: [];

	const handleSelectCountry = (country: any) => {
		setSelectedLabel(country.label);
		setCountryFilter('');
		setIsModalVisible(false);
		selectCountryFunction(country.value);
	};


	return (
		<Center width="100%">
			<FormControl>
				<FormControl.Label>{t("País")}</FormControl.Label>
				<TouchableOpacity onPress={() => setIsModalVisible(true)}>
					<Box
						borderWidth={1}
						borderColor="muted.300"
						p={3}
						borderRadius="md"
					>
						<HStack alignItems="center" space={2}>
							<Text flex={1}>
								{selectedLabel || t("Selecione um país")}
							</Text>
							<IconButton
								icon={<ChevronDownIcon />}
								onPress={() => setIsModalVisible(true)}
							/>
						</HStack>
					</Box>
				</TouchableOpacity>
			</FormControl>

			<Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
				<Modal.Content maxWidth="400px" minHeight="100px" maxHeight="400px">
					<Modal.CloseButton />
					<Modal.Header>{t("Selecione seu pais")}</Modal.Header>
					<Modal.Body>
						<VStack space={4}>
							<Input
								value={countryFilter}
								onChangeText={setCountryFilter}
								placeholder={t("Comece a digitar o nome do país")}
							/>

							<Box>
								{filteredCountries.map((country) => (
									<TouchableOpacity key={country.value} onPress={() => handleSelectCountry(country)}>
										<Box borderBottomWidth="1" borderBottomColor="muted.300" p="3">
											{country.label}
										</Box>
									</TouchableOpacity>
								))}
							</Box>
						</VStack>
					</Modal.Body>
				</Modal.Content>
			</Modal>
		</Center>
	);
}