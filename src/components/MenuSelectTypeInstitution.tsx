import React, { useState } from "react";
import { Box, Center, CheckIcon, Select, View } from "native-base";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
	selectTypeFunction: (type: string) => void;
	selectedType: string;
}

export function MenuSelectTypeInstitution({ selectTypeFunction, selectedType, ...rest }: Props) {

	return (
		<Center>
			<Box maxW="300">
				<Select
					selectedValue={selectedType}
					onValueChange={selectTypeFunction}
					minWidth="250"
					accessibilityLabel="Selecione o tipo de instituicao"
					placeholder="Selecione o tipo de instituicao"
				>

					<Select.Item label="Educacao Basica" value="HIGHER" />
					<Select.Item label="Ensino Superior" value="BASIC" />
					<Select.Item label="O.N.G" value="ONG" />
				</Select>
			</Box>
		</Center>
	)
}