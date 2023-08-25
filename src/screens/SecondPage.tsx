import { useNavigation } from '@react-navigation/native';
import { VStack, Center } from 'native-base'

import { Button } from '@components/Button';

export function SecondPage() {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<VStack flex={1} px={10} pb={16}>

			<Center flex={1}>
				<Button
					title="Voltar"
					onPress={handleGoBack}
				/>
			</Center>

		</VStack>
	);
}