import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainLayout from '../layouts/MainLayout';


function AboutScreen({ navigation }) {
    return(        
        <MainLayout>
            <Text>TO DO LIST APP</Text>
            <Text>Zi Liang - CPRG303E Lab 5</Text>
            <Text>Nov 27, 2024</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>
    );
}

export default AboutScreen;