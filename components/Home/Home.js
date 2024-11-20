import React from "react";
import { View, StyleSheet, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default Home;
