import React, { useEffect, useState } from "react";
import { ScrollView, Select } from "native-base";

import { countryAcronyms } from '@utils/countriesList/acronym';
import { useTranslation } from "react-i18next";

export function MenuSelectCountries() {
	const [t, i18n] = useTranslation();
	const [namePlaceholder, setNamePlaceholder] = useState("");

	function selectPlaceholderLanguage() {
		if (i18n.language === "pt") {
			setNamePlaceholder("Selecione seu pais");
			countryAcronyms[0].value = "Nao desejo selecionar";
		} else if (i18n.language === "en") {
			setNamePlaceholder("Select your country");
			countryAcronyms[0].value = "I don't want to select";
		} else if (i18n.language === "fr") {
			setNamePlaceholder("Sélectionnez votre pays");
			countryAcronyms[0].value = "Je ne veux pas sélectionner";
		} else if (i18n.language === "es") {
			setNamePlaceholder("Seleccione su país");
			countryAcronyms[0].value = "No quiero seleccionar";
		}
	}

	useEffect(() => {
		selectPlaceholderLanguage();
	}, [i18n.language])

	return (
		<Select
			selectedValue={namePlaceholder}
			onValueChange={(itemValue) => setNamePlaceholder(itemValue)}
			placeholder={namePlaceholder}
			variant="unstyled"
			borderBottomWidth={1}
			borderColor="green.700"
			_selectedItem={{
				bg: "green.700",
			}}
			fontSize="lg"
		>
			{countryAcronyms.map((country) => (
				<Select.Item
					key={country.label}
					label={country.value}
					value={country.value}
					alignItems="center"
					_pressed={{ bg: "green.500" }}
					borderRadius={5}
				/>
			))}
		</Select>

	);
}