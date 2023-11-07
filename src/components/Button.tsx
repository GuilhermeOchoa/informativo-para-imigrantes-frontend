import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
	title: string;
	variant?: "solid" | "outline"; // a variant vai ser ou solid ou outline, mas por padrao � solid
	titleStyle?: { fontSize: number, color: string }; 
}

export function Button({ title, variant = "solid", titleStyle, ...rest }: Props) {
	return (
		<NativeBaseButton
			w="50%"
			h={14}
			bg={variant === "outline" ? "white" : "green.700"}
			borderWidth={variant === "outline" ? 2 : 0}
			borderColor="green.500"
			rounded="sm"
			_pressed={{
				bg: variant === "outline" ? "gray.200" : "green.500"
			}}
			{...rest}
		>
			<Text
				color={titleStyle?.color || (variant === "outline" ? "green.500" : "white")}
				fontFamily="heading"
				fontSize={titleStyle?.fontSize || "sm"}
			>
				{title}
			</Text>
		</NativeBaseButton>
	);
}