import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';
import { Button } from 'react-native';
import { ExempleTitle } from '@components/ExempleTitle';

export function HomeExemple() {
	const navigation = useNavigation();

	function handleNextPage() {
		navigation.navigate('next');
	}

	return (
		<Container>
			<ExempleTitle type={0} />
			<Button
				title='Clicar'
				onPress={handleNextPage}
			/>
		</Container>
	);
}
