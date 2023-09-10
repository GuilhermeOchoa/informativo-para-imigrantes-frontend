import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%',
        maxHeight: '100%',
        maxWidth: '100%',
        flex: 1,
    },
    squareContainer: {
        width: 370,
        height: 350,
        backgroundColor: '#55917F',
        borderRadius: 90,
        alignSelf: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 0,
        marginTop: 40
    },
    headerContainer: {
        padding: 32,
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#6BAB90',
        borderRadius: 30,
        alignSelf: 'center',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 30,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    messageText: {
        fontSize: 23,
        color: '#000',
        opacity: 0.6,
        lineHeight: 26,
        marginVertical: 8,
        marginHorizontal: 6,        
    },
    textContainer: {
        padding: 24,
        height: 190,
        width: '100%',
    },
    topContainer: {
        padding: 24,
        height: 120,
        width: 350,
        alignSelf: 'center',
        alignItems: 'center'
    },
    squareImage: {
        height: '100%',
        width: '100%',
    },
    flagIcon: {
        width: 22,
        height: 22,
    },
    logoImage: {
        alignItems: 'center'
    },
    languageText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        lineHeight: 30,
    },
    appNameText: {
        fontSize: 22,
        marginTop: 12,
    },
    introText: {
        fontSize: 22,
        color: '#000',
        opacity: 0.6,
        lineHeight: 24,
    }
});

export default styles;