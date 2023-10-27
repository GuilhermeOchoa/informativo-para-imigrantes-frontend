import { Fab, Icon, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps, StyleSheet } from "react-native";

type Props = TouchableOpacityProps & {
    status: "PENDING" | "APPROVED" | "REJECTED"

}

export function ActionButton({ status, ...rest }: Props) {
const styles = StyleSheet.create({
    text : {
        color: status === "PENDING" ? "yellow.400" : status === "APPROVED" ? "green.200" : "red.400",
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
                status === "PENDING" ? "yellow.400"
                    : status === "APPROVED" ? "blue.400"
                        : "red.400"
            }
            placement="top-right"
            size="1"
            icon={
                <Icon
                    color="white"
                    as={MaterialIcons}
                    name={status === "PENDING" ? "access-time" : status === "APPROVED" ? "check" : "close"}
                    size="sm"
                    marginLeft={-2}
                />
            }
        />

        <Text style={styles.text}>
        {status === "PENDING" ? "Pendente" : status === "APPROVED" ? "Aprovado" : "Rejeitado"}
    </Text>  
    </>
    )
}
