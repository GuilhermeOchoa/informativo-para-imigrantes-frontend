import { Title } from "./styles";

type Props = {
	type: number;
};

export function ExempleTitle({ type }: Props) {
	return (
		<Title>
			{type === 1 ? "Fim" : "Ola"}
		</Title>
	);
}
