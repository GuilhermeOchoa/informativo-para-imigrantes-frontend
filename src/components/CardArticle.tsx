import { HStack, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

import { ArticleDTO } from "@dtos/ArticleDTO";

type Props = {
	data: ArticleDTO
}

export function CardArticle({ data, ...rest }: Props) {
	return (
		<TouchableOpacity {...rest}>
			<HStack bg="lightGreen.500" alignItems="center" p={2} rounded="md" mb={4}>

				<VStack flex={1}>
					<Text mb={2} fontSize="xl" fontFamily="heading">
						{data.title}
					</Text>

					<Text fontSize="md" color="black" mt={1} numberOfLines={4}>
						{data.content}
					</Text>

					<Text mt={1} alignSelf="flex-end" color="blue.900">
						ver mais...
					</Text>
				</VStack>

			</HStack>
		</TouchableOpacity>
	);
}
