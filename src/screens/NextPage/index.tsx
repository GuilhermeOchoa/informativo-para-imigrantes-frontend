import { useNavigation } from '@react-navigation/native';
import { ExempleTitle } from '@components/ExempleTitle';
import { Container } from './styles';
import { Button } from 'react-native';

export function NextPage() {
	const navigation = useNavigation();

	function handleNextPage() {
		navigation.navigate('home');
	}

	return (
		<Container>
			<ExempleTitle type={1} />
			<Button
				title='Voltar'
				onPress={handleNextPage}
			/>
		</Container>
	);
}
