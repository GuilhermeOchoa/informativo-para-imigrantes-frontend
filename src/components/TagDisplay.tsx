import { FlatList, HStack, View, Text } from "native-base";

type Props = {
  tags: string[];
};

export function TagDisplay({ tags }: Props) {
  return (

    <HStack space={3} display="flex" width={150} flexWrap="nowrap" overflow="hidden">
      {tags.map((tag) => (
        <Badge variant={"outline"} colorScheme={"success"} mb={2} key={tag.value} rounded={10}>
          {tag}
        </Badge>
      ))}
    </HStack>
  )
}