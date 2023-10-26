import { Badge, HStack } from "native-base";

type Props = {
  tags: { label: string; value: any }[];
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