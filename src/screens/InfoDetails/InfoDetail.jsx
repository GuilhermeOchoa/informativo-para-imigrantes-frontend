import { VStack, ScrollView, View, Text, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useRoute } from "@react-navigation/native";

export function InfoDetail() {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	const route = useRoute();

	const articleData = route.params?.articleData;

	return (
		<VStack style={styles.container}>
			<SafeAreaView >
				<View style={styles.header}>
					<Text style={styles.text}>
						<Button style={styles.goBackButton} onPress={handleGoBack}>
							<Icon name="arrow-back" size={30} color="#000" />
						</Button>
					</Text>
					
				</View>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>{articleData.title}</Text>
					
				</View>
				<ScrollView style={styles.scroll} contentContainerStyle={styles.info}>
					<Text style={styles.infoContent}>
						{articleData.content}
					</Text>

				</ScrollView>
			</SafeAreaView>
		</VStack>
	);
}