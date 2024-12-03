import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        padding: 10,
        margin: 10,
        border: 'solid',
        borderWidth: 2,
        borderRadius: 10
    },
    loginButton: {
        padding: 10,
        margin: 10,
        backgroundColor: 'green',
        borderRadius: 10,
    },
    loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 1
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
})

export default styles;
