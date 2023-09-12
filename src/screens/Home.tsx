import { useNavigation } from '@react-navigation/native';
import { VStack, Center } from 'native-base'

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
				<Button
					title="OnboardingAntiga"
					onPress={() => navigation.navigate('onboarding01')}
				/>
				<Button
					title="Onboarding"
					onPress={() => navigation.navigate('onboarding')}
				/>
			</Center>

		</VStack>
	);
}