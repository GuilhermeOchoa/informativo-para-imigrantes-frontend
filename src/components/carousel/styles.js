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
 //       backgroundColor: 'blue', //visualizar containers
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
        marginTop: -10
    },
    headerContainer: {
        padding: 32,
        paddingHorizontal: 12,
 //       backgroundColor: 'red', //visualizar containers
    },
    textContainer: {
        marginTop: 32,
        height: 140,
        width: '100%',
 //       backgroundColor: 'green', //visualizar containers
    },
    topContainer: {
        padding: 0,
        height: 100,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
   //     backgroundColor: 'yellow', //visualizar containers
    },
    logoImage: {
        alignItems: 'center',
    //    backgroundColor: 'purple', //visualizar containers
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
        marginTop: 5,
    },
    messageText: {
        fontSize: 24,
        color: '#000',
        opacity: 0.5,
        lineHeight: 22,
        marginVertical: 8,
        marginHorizontal: 8,
        textAlign: 'center',        
    },
    squareImage: {
        height: '100%',
        width: '100%',
    },
    flagIcon: {
        width: 22,
        height: 22,
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
        fontSize: 20,
        color: '#000',
        opacity: 0.6,
        lineHeight: 24,
        marginHorizontal: 5,
        textAlign: "center",
    },
    menuContainer:{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20 ,
    }

});

export default styles;
