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
        </View>
    );
};

export default Login;
