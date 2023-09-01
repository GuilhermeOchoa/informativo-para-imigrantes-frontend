import { VStack, ScrollView, View, Text } from 'native-base'
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ArticleDetail() {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<VStack style={styles.container}>
			<SafeAreaView >
				<View style={styles.header}>
					<Text style={styles.text}>Voltar</Text>
					
				</View>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>Titulo Artigo</Text>
					
				</View>
				<ScrollView style={styles.scroll} contentContainerStyle={styles.article}>
					<Text style={styles.articleContent}>
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