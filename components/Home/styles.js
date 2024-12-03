import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    signUpButton: {
        backgroundColor: 'orange',
        margin: 5,
        borderRadius: 10,
        padding: 10,
    },
    signUpButtonText: {
        textAlign: 'center',
        color: 'white',
    },
    loginButton: {
        backgroundColor: 'blue',
        margin: 5,
        borderRadius: 10,
        padding: 10
    },
    loginButtonText: {
        textAlign: 'center',
        color: 'white',
    },
    splashImage: {
        width: 200,
        height: 200,
        margin: 'auto',
        marginBottom: 100,
        marginTop: 100
    },
    newUserLink: {
        textAlign: 'center',
        letterSpacing: 1,
    },
    linkText: {
        color: 'blue',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
});

export default styles;
