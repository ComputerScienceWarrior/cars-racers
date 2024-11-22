import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";

const SignUp = ({ navigation }) => {

    return (
        <View>
            <TextInput 
                placeholder="First Name"
                style={styles.inputs}
            />
            <TextInput 
                placeholder="Create a Username Name"
                style={styles.inputs}
            />
            <TextInput 
                placeholder="Create a password"
                style={styles.inputs}
            />
            <TextInput 
                placeholder="Confirm password"
                style={styles.inputs}
            />
            <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUp;
