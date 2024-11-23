import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styles from "./styles";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Image
                style={styles.splashImage}
                source={{ uri: 'https://media.wired.com/photos/5926c2f38d4ebc5ab806b65e/master/w_2240,c_limit/HotwheelsTA.jpg' }}
            />
            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Home;
