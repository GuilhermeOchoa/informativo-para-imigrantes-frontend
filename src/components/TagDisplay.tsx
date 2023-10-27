import { FlatList, HStack, View, Text, Badge } from "native-base";

type Props = {
  tags: string[];
};

export function TagDisplay({ tags }: Props) {
  return (

    <HStack space={3} display="flex" flexWrap="nowrap" overflow="hidden">
      {tags.map((tag) => (
        <Badge variant={"outline"} colorScheme={"success"} mb={2} key={tag} rounded={10}>
          {tag}
        </Badge>
      ))}
    </HStack>
  )
}