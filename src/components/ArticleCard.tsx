import { VStack, HStack, Text} from 'native-base'
import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { ArticleDTO } from 'src/models/ArticleDTO';

type Props = {
  data: ArticleDTO
}

export function CardComponent({ data, ...rest }: Props) {

  return (
    <TouchableOpacity {...rest}>
      <HStack bg="lightGreen.500" alignItems="center" p={4} rounded="mb" borderRadius={15} mb={3} margin="3">
        <VStack flex={1}>
          <Text mb={2} fontSize={16}>
            {data.title}
          </Text>

          <Text fontSize="sm" color="black" mt={1} numberOfLines={4}>
            {data.description}
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  )
}