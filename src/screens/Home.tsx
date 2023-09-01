import { useNavigation } from '@react-navigation/native';
import { VStack, Center, View, Text } from 'native-base'

import { Button } from '@components/Button';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function Home() {
	const navigation = useNavigation<AppNavigatorRoutesProps>();

	function handleNewAccount() {
		navigation.navigate('secondPage');
	}

	return (
		<VStack flex={1} px={10} pb={16}>

			<Center flex={1}>
				<Button
					title="Proxima pagina"
					onPress={handleNewAccount}
				/>
			  
			</Center>
				<Button
					title="Ver Detalhes"
					onPress={navigation.navigate('articleDetail')}
				/>

		</VStack>
	);
}