import { Fab, Icon, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps, StyleSheet } from "react-native";

type Props = TouchableOpacityProps & {
    status: "pending" | "approved" | "rejected"

}

export function ActionButton({ status, ...rest }: Props) {
const styles = StyleSheet.create({
    text : {
        color: status === "pending" ? "yellow.400" : status === "approved" ? "green.200" : "red.400",
        position: "absolute",
        top: 60,
        right: 10,
        fontSize: 12,
        fontWeight: "bold",
        padding: 4,
    },
})
    return (
        <>
        <Fab
            renderInPortal={false}
            shadow={0}
            backgroundColor={
                status === "pending" ? "yellow.400"
                    : status === "approved" ? "blue.400"
                        : "red.400"
            }
            placement="top-right"
            size="1"
            icon={
                <Icon
                    color="white"
                    as={MaterialIcons}
                    name={status === "pending" ? "access-time" : status === "approved" ? "check" : "close"}
                    size="sm"
                    marginLeft={-2}
                />
            }
        />

        <Text style={styles.text}>
        {status === "pending" ? "Pendente" : status === "approved" ? "Aprovado" : "Rejeitado"}
    </Text>  
    </>
    )
}
