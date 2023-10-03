import React, { useState } from "react";
import { View } from "native-base";

import { countryAcronyms } from '@utils/countriesList/acronym';
import { Picker } from "@react-native-picker/picker";

export function MenuSelectCountries() {
	const [selectedCountry, setSelectedCountry] = useState('');

	const onCountryChange = (value: any) => {
		setSelectedCountry(value);
	};

	return (
		<View borderBottomColor="green.500" borderBottomWidth={1}>
			<Picker
				selectedValue={selectedCountry}
				onValueChange={onCountryChange}
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