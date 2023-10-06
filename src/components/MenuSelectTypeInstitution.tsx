import React, { useState } from "react";
import { Box, Center, CheckIcon, FormControl, IInputProps, ISelectItemProps, ISelectProps, Select, View, WarningOutlineIcon } from "native-base";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & ISelectProps & {
	selectTypeFunction: (type: string) => void;
	selectedType: string;
	errorMessage?: string | null;
}

export function MenuSelectTypeInstitution({ errorMessage = null, selectTypeFunction, selectedType, ...rest }: Props) {

	return (
		<Center>
			<FormControl w="full" isRequired isInvalid={!!errorMessage} {...rest}>

				<Select
					selectedValue={selectedType}
					onValueChange={selectTypeFunction}
					accessibilityLabel="Selecione o tipo de instituicao"
					placeholder="Selecione o tipo de instituicao"
				>

					<Select.Item label="Educacao Basica" value="HIGHER" />
					<Select.Item label="Ensino Superior" value="BASIC" />
					<Select.Item label="O.N.G" value="ONG" />
				</Select>

				<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
					{errorMessage}
				</FormControl.ErrorMessage>
			</FormControl>
		</Center>
	)
}