import { Fab, Icon, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps, StyleSheet } from "react-native";

type Props = TouchableOpacityProps & {
    onPress: () => void,
    status: "pending" | "approved" | "rejected"

}

export function ActionButton({ onPress, status, ...rest }: Props) {
    return (
        <>  
        
            <Fab
                style={styles.shadow}
                renderInPortal={false}
                label={status === "pending" ? "Pendente" : status === "approved" ? "Aprovado" : "Rejeitado"}
                shadow={2}
                backgroundColor={
                    status === "pending" ? "yellow.400"
                        : status === "approved" ? "blue.400"
                            : "red.400"
                }
                placement="top-right"
                size="sm"
                icon={
                    <Icon
                        color="white"
                        as={MaterialIcons}
                        name={status === "pending" ? "access-time" : status === "approved" ? "check" : "close"}
                        size="4"
                    />
                }
                onPress={() => { console.log("oi") }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 12,
    }
})