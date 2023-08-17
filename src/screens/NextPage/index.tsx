import { useNavigation } from '@react-navigation/native';
import { ExempleTitle } from '@components/ExempleTitle';
import { ButtonText, Container, StyledButton } from './styles';

export function NextPage() {
	const navigation = useNavigation();

	function handleNextPage() {
		navigation.navigate('home');
	}

	return (
		<Container>
			<ExempleTitle type={1} />
			<StyledButton onPress={handleNextPage}>
				<ButtonText>Voltar</ButtonText>
			</StyledButton>
		</Container>
	);
}
