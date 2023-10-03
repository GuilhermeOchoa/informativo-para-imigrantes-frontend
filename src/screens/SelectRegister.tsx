import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Image, Text, Button } from "native-base";
import logo from "@assets/logo.png";
import info from "@assets/infoIcon.png";

import { Articles } from '@screens/Articles';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useAuth } from '@hooks/useAuth';

export function SelectRegister() {

	const [isDetailUserVisible, setIsDetailUserVisible] = useState(false);
	const [isDetailInstitutionVisible, setIsDetailInstitutionVisible] = useState(false);

	const { updateLocalStorageUserNoLogged } = useAuth();

	const navigation = useNavigation<AuthNavigatorRoutesProps>();

	const handleTextoClicavelPress = () => {
		navigation.navigate('userLogin');
	};

	const openUserDetail = () => {
		setIsDetailUserVisible(true);
		setIsDetailInstitutionVisible(false);
	};

	const openInstitutionDetail = () => {
		setIsDetailUserVisible(false);
		setIsDetailInstitutionVisible(true);
	};

	function handleSendToInformationRoutes() {
		updateLocalStorageUserNoLogged();
	}

	const TextoClicavel = ({ onPress }: any) => {
		return (
			<TouchableOpacity onPress={onPress}>
				<Text style={{ color: '#5E4C5A' }}>
					Já tem uma conta? <Text style={styles.link}> Clique aqui </Text>
				</Text>
			</TouchableOpacity>
		);
	};

	const DetailInstitution = () => {
		if (isDetailInstitutionVisible) {
			return (
				<View style={styles.box}>
					<Text style={styles.boxText}>
						Instituição de ensino / ONG
					</Text>
				</View>
			);
		} else {
			return null;
		}
	};

	const DetailUser = () => {
		if (isDetailUserVisible) {
			return (
				<View style={styles.box}>
					<Text style={styles.boxText}>
						Sou Imigrante em busca de oportunidades
					</Text>
				</View>
			);
		} else {
			return null;
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.welcomeTitleContainer}>
				<Text style={styles.welcomeText} fontWeight="light">
					Cadastro de usuário</Text>
			</View>
			<View style={styles.logoImage}>
				<Image source={logo} alt="" />
			</View>

			<View style={styles.WrapperButton}>
				<View style={styles.divButton}>
					<Button
						style={styles.button}
						onPress={() => { Articles }}>
						<TouchableOpacity onPress={handleSendToInformationRoutes}>
							<Text fontFamily="heading" fontSize={23} >
								procuro informações
							</Text>
						</TouchableOpacity>
					</Button>
					<Button style={styles.imageIcon} onPress={() => openUserDetail()}>
						<Image source={info} alt="" />
					</Button>
				</View>

				<View style={styles.divButton}>
					<Button
						style={styles.button}
						onPress={() => { }}>
						<Text
							fontFamily="heading"
							fontSize={23}
							fontWeight="light"
						>
							sou instituição de ensino
						</Text>
					</Button>
					<Button style={styles.imageIcon} onPress={() => openInstitutionDetail()}>
						<Image source={info} alt="" />
					</Button>

				</View>
			</View>

			<DetailInstitution />
			<DetailUser />

			<View style={styles.clickableText}>
				<TextoClicavel onPress={handleTextoClicavelPress} />
			</View>
		</SafeAreaView>
	)

}


const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f8f8f8",
		padding: 0,
		margin: 0,
		marginTop: 20,
		height: "100%",
		width: "100%",
		maxHeight: "100%",
		maxWidth: "100%",
		flex: 1,
	},
	welcomeTitleContainer: {
		height: 100,
		alignSelf: "center",
		alignItems: "center",
		marginTop: 32,
	},
	logoImage: {
		alignItems: "center",
	},
	button: {
		display: "flex",
		flexDirection: 'row',
		width: '85%',
		height: 50,
		justifyContent: 'center',
		alignItems: "center",
		backgroundColor: "#f8f8f8",
		margin: 0,
		marginRight: 10,
		borderRadius: 0,
		borderRightColor: "#D4D4D4",
		borderRightWidth: 1,
	},
	welcomeText: {
		fontSize: 30,
		marginTop: 20,
		lineHeight: 30,
	},
	clickableText: {
		display: "flex",
		justifyContent: 'flex-end',
		flexDirection: 'column',
		alignItems: 'center',
		height: 110,
	},
	link: {
		textDecorationLine: 'underline',
		color: '#55917F'
	},
	divButton: {
		width: '100%',
		alignItems: 'center',
		display: "flex",
		flexDirection: 'row',
		height: 80,
		borderBottomWidth: 1,
		borderColor: "#55917F",
		paddingBottom: 20,
		paddingTop: 20
	},
	WrapperButton: {
		width: '95%',
		borderTopWidth: 1,
		borderColor: "#55917F",
		display: "flex",
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		alignSelf: "center",
		marginTop: 50,
	},
	imageIcon: {
		backgroundColor: "#f8f8f8",
		display: "flex",
		justifyContent: 'center',
		width: 45
	},
	box: {
		backgroundColor: '#E1F0C4',
		padding: 20,
		borderRadius: 10,
		width: '80%',
		alignSelf: 'center',
		marginTop: 20,
	},
	boxText: {
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 10,
		fontWeight: 'bold',
	},
});