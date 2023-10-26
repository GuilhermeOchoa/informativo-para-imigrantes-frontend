import { FlatList, HStack, View, Text } from "native-base";

type Props = {
    tags: string[];
};

export function TagDisplay({ tags }: Props) {

    return (
        <HStack space={3} display="flex" width={150} flexWrap="nowrap" overflow="hidden">
            <FlatList
                horizontal
                data={tags}
                keyExtractor={(tag) => tag}
                renderItem={({ item }) => (
                    <View style={{ marginRight: 10 }}>
                        <Text style={{ borderWidth: 1, borderColor: 'green', borderRadius: 10, padding: 5 }}>
                            {item}
                        </Text>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </HStack>
    )
}