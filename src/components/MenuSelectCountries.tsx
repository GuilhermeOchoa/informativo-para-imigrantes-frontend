import React from "react";
import { View } from "native-base";

import { countryAcronyms } from '@utils/countriesList/acronym';
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacityProps } from "react-native";

import { useTranslation } from "react-i18next";

type Props = TouchableOpacityProps & {
	selectCountryFunction: (country: string) => void;
	selectedCountry: string | undefined;
}

export function MenuSelectCountries({ selectCountryFunction, selectedCountry }: Props) {
	const [t, i18n] = useTranslation();

	return (
		<View borderBottomColor="green.500" borderBottomWidth={1}>
			<Picker
				selectedValue={selectedCountry}
				onValueChange={selectCountryFunction}
				style={{
					marginLeft: -15
				}}
			>
				<Picker.Item label={t("Selecione um pais (opcional)")} value="" style={{ fontSize: 18 }} />
				{
					countryAcronyms.map((country) => (
						<Picker.Item
							key={country.value}
							label={country.label + ' - ' + country.value}
							value={country.value}
						/>
					))
				}
			</Picker>
		</View>
	);
}