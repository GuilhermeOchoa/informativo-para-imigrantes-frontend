import { Spinner, Center } from 'native-base';

export function Loading() {
	return (
		<Center flex={1} bg="#F8F8F8">
			<Spinner color="green.700" />
		</Center>
	);
}