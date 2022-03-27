import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import CreateNote from './CreateNote';
const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};
const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="CreateNote" component={CreateNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
