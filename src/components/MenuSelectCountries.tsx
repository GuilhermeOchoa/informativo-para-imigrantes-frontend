import React, { useState } from "react";
import { View } from "native-base";

import { countryAcronyms } from '@utils/countriesList/acronym';
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
	selectCountryFunction: (country: string) => void;
	selectedCountry: string;
}

export function MenuSelectCountries({ selectCountryFunction, selectedCountry, ...rest }: Props) {

	return (
		<View borderBottomColor="green.500" borderBottomWidth={1}>
			<Picker
				selectedValue={selectedCountry}
				onValueChange={selectCountryFunction}
			>
				<Picker.Item label="Select a country" value="" />
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