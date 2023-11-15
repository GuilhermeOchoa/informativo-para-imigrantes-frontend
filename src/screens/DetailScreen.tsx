import { VStack, View, Text, Image, Modal, Center } from "native-base";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { getInstitutionByEmail } from "@services/Institution";
import { processScreenData } from "@utils/DataProcessing";

import pucrsmock from '@assets/pucrsmock.png'
import { useTranslation } from "react-i18next";
import { TextArea } from "@components/TextArea";

export function DetailScreen() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const { t, i18n } = useTranslation();
    const route = useRoute();
    const data = route.params as any;

    const [dataType, setDataType] = useState<string>("");
    const [institutionData, setInstitutionData] = useState<any>();

    useEffect(() => {
        if ("programType" in data) {
            setDataType("program");
            setInstitutionData(getInstitutionByEmail(data.institutionEmail));
            console.log(institutionData)
        } else {
            setDataType("institution");
        }

    }, [dataType])

    function onPressReturn() {
        navigation.navigate("feed");
    }

    return (
        <VStack flex={1} pb={6} mt={12} bg="#F8F8F8">
            <TouchableOpacity>
                <Ionicons name="chevron-back-outline" size={28} color="black" onPress={onPressReturn}/>
            </TouchableOpacity>
            <View style={styles.circle}>
                <Image source={pucrsmock} alt="Image logo" style={styles.logo} />
            </View>
            <View>
                <Text color={"#5E4C5A"} fontSize={23} alignSelf={'center'} fontWeight={'bold'}>{processScreenData("name", dataType, data)}</Text>
            </View>

            <View>
                <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={true} style={styles.scrollView}>
                    <View pt={4}>
                        <View>
                            <Text ml={8} style={styles.info}>{t("Contato")}:</Text>
                            <Text ml={8}>{processScreenData("email", dataType, data)}</Text>
                        </View>
                        {
                            dataType === "institution" &&
                            <View>
                                <Text ml={8} style={styles.info}>CNPJ:</Text>
                                <Text ml={8}>{processScreenData("cnpj", dataType, data)}</Text>
                            </View>
                        }

                        <View>
                            <Text ml={8} style={styles.info}>{t("Escopo educacional")}:</Text>
                            <Text ml={8}>{t(processScreenData("type", dataType, data))}</Text>
                        </View>
                    </View>
                    {
                    dataType === "program" &&
                        <>
                            <View pt={2} style={styles.desc}>
                                <Text style={styles.info}>{t("Descrição")}: </Text>
                                <ScrollView showsVerticalScrollIndicator={true} style={styles.contentContainer}>

                                    <TextArea editable={false} isReadOnly scrollEnabled={true} >
                                        {processScreenData("description", dataType, data)}
                                    </TextArea>
                                </ScrollView>
                            </View>

                            <View style={styles.desc}>
                                <Text style={styles.info}>{t("Local do programa")}: </Text>

                                <Text>
                                    {processScreenData("location", dataType, data)}
                                </Text>
                            </View>

                            <View style={styles.desc}>
                                <Text style={styles.info}>{t("Período de inscrição")}:</Text>

                                <Text>
                                    {processScreenData("dateEnrollmentStart", dataType, data)} até {processScreenData("dateEnrollmentEnd", dataType, data)}
                                </Text>
                            </View>

                            <View style={styles.desc}>
                                <Text style={styles.info}>{t("Período do programa")}:</Text>

                                <Text>
                                    {processScreenData("dateProgramStart", dataType, data)} até {processScreenData("dateProgramEnd", dataType, data)}
                                </Text>
                            </View>
                            <View style={styles.desc}>
                                <Text style={styles.info}>{t("Idioma")}: </Text>

                                <Text>
                                    {processScreenData("language", dataType, data)}
                                </Text>
                            </View>
                        </>
                    }

                </ScrollView>

            </View>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
    },
    circle: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        overflow: "hidden",
        marginTop: 10,
        marginBottom: 20,
    },
    info: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 8,
        color: '#5E4C5A',
    },
    infoContainer: {
        height: 300,
        width: 500,
    },
    logo: {
        width: "100%",
        height: "100%",
        alignSelf: 'center',
    },
    scrollView: {
        backgroundColor: '#F5F5F5',
    },
    contentContainer: {
        backgroundColor: '#f5f5f5',
        borderRadius: 6,
    },
    desc: {
        width: "84%",
        //backgroundColor: "blue",
        alignSelf: 'center',
    },
    button: {
        paddingTop: 50,
        width: 400,
        height: 400,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: 360,
        height: 275,
    },
})