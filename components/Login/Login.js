import React from "react";
import { View, TextInput, Button, Text } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Enter Username"/>
            <TextInput placeholder="Enter Password"/>
            {/* This Login Button needs logic for logging in and verification. */}
            <Button title="Login"/>
        </View>
    );
};

export default Login;
