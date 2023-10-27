import { FlatList, HStack, View, Text, Badge } from "native-base";

type Props = {
  tags: string[];
};

export function TagDisplay({ tags, ...rest }: Props) {

  return (
    <HStack space={3} display="flex" flexWrap="nowrap" overflow="hidden">

      <FlatList
        horizontal
        data={tags}
        keyExtractor={(tag) => tag}
        renderItem={({ item }) => (
          <Badge mr={2} variant={"outline"} colorScheme={"success"} mb={2} rounded={10}>
            {item}
          </Badge>
        )}
        showsHorizontalScrollIndicator={false}
        {...rest}
      />
    </HStack>
  )
}