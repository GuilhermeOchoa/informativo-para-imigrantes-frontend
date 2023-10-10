import { Badge, HStack } from "native-base";

type Props = {
  tags: { label: string; value: any }[];
};


export function TagDisplay ({ tags }: Props) {
    return(

        <HStack space={3} flexWrap={"wrap"}>
        {tags.map((tag) => (
          <Badge variant={"outline"} colorScheme={"success"} mb={2} key={tag.value}>
            {tag.label}
          </Badge>
        ))}
      </HStack>
    )
}