import React from "react";
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from "./styles";

const Login = ({ navigation }) => {
    return (
        <View>
            <TextInput style={styles.input} placeholder="Enter Username"/>
            <TextInput style={styles.input} placeholder="Enter Password"/>
            {/* This Login Button needs logic for logging in and verification. */}
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.newUserLink}>
                New User? Sign up <Text style={styles.linkText} onPress={() => navigation.navigate("SignUp")}>here</Text>.
            </Text>
        </View>
    );
};

export default Login;
