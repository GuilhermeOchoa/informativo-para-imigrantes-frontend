import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { VStack, Center, FlatList, Heading, HStack, Icon } from 'native-base';

import { api } from '@services/Api';
import { ArticleDTO } from '@dtos/ArticleDTO';
import { TouchableOpacity } from 'react-native';
import { CardArticle } from '@components/CardArticle';

export function Articles() {
	const [articles, setArticles] = useState<ArticleDTO[]>([]);

	async function fetchArticles() {
		try {
			const response = await api.get("/articles?language=pt");
			setArticles(response.data);
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchArticles();
	})

	return (
		<VStack flex={1} px={6} pb={6} mt={16}>
			<HStack alignItems="center" m={2}>
				<TouchableOpacity >
					<Icon
						as={MaterialIcons}
						name="arrow-back"
						size={7}
					/>
				</TouchableOpacity>

				<VStack flex={1} mr={6}>
					<Center>
						<Heading fontFamily="heading">
							Informativos
						</Heading>
					</Center>
				</VStack>

			</HStack>

			<FlatList
				data={articles}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<CardArticle
						data={item}
					/>
				)}
				ListEmptyComponent={() => (
					<VStack flex={1} justifyContent="center" alignItems="center" mt={16}>
						<Heading size="md">
							Nenhum informativo encontrado
						</Heading>
					</VStack>
				)}
			/>
		</VStack>

	);
}