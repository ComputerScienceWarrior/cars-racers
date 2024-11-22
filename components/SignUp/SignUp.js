import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";

const SignUp = ({ navigation }) => {

    return (
        <View>
            <TextInput 
                placeholder="First Name"
            />
            <TextInput 
                placeholder="Create a Username Name"
            />
            <TextInput 
                placeholder="Create a password"
            />
            <TextInput 
                placeholder="Confirm password"
            />
            <Button title="Create Account" onPress={() => {''}}/>
        </View>
    );
};

export default SignUp;
