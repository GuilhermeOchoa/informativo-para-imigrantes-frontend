import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
	title: string;
}

export function Button({ title, ...rest }: Props) {
	return (
		<NativeBaseButton
			w="full" 		//Ocupa a largura toda da tela
			h={14}
			bg="green.500"
			borderColor="green.500"
			rounded="full"	//Arredonda as bordas
			_pressed={{		//quando clicar muda de cor
				bg: "lightGreen.500"
			}}
			{...rest}
		>
			<Text
				color="white"
				fontFamily="heading"
				fontSize="lg"
			>
				{title}
			</Text>
		</NativeBaseButton>
	);
}
