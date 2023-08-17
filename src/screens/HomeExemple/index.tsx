import { useNavigation } from '@react-navigation/native';
import { ButtonText, Container, StyledButton } from './styles';
import { ExempleTitle } from '@components/ExempleTitle';

export function HomeExemple() {
	const navigation = useNavigation();

	function handleNextPage() {
		navigation.navigate('next');
	}

	return (
		<Container>
			<ExempleTitle type={0} />
			<StyledButton onPress={handleNextPage}>
				<ButtonText>Iniciar</ButtonText>
			</StyledButton>
		</Container>
	);
}
