import { VStack, ScrollView, View, Text, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'; 

export function InfoDetail() {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

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
					<Text style={styles.title}>Titulo do Informativo</Text>
					
				</View>
				<ScrollView style={styles.scroll} contentContainerStyle={styles.info}>
					<Text style={styles.infoContent}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Harum adipisci ipsam voluptatibus natus temporibus cum, 
						alias eligendi similique sunt assumenda non possimus explicabo quos nisi 
						dignissimos deleniti sit ea iure?!
					</Text>

				</ScrollView>
			</SafeAreaView>
		</VStack>
	);
}