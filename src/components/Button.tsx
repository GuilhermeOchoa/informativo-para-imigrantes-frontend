import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
	title: string;
	variant?: "solid" | "outline"; // a variant vai ser ou solid ou outline, mas por padrao é solid
}

export function Button({ title, variant = "solid", ...rest }: Props) {
	return (
		<NativeBaseButton
			w="50%"
			h={14}
			bg={variant === "outline" ? "lightGreen.500" : "green.700"}
			borderWidth={variant === "outline" ? 0 : 0}
			borderColor="green.500"
			rounded="sm"
			_pressed={{
				bg: variant === "outline" ? "green.700" : "green.500"
			}}
			{...rest}
		>
			<Text
				color={variant === "outline" ? "gray.600" : "white"}
				fontFamily="heading"
				fontSize="md"
			>
				{title}
			</Text>
		</NativeBaseButton>
	);
}