import { View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function DeclinedScreen(){
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    return (
        <View>
            <Text>Oi Oi Oi</Text>
        </View>
    )
    
}