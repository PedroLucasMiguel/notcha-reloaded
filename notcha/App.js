import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MainScreenNavigation from './screens/MainScreenNavigation';

const Stack = createNativeStackNavigator();

export default function app() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: "#3700B3"}, headerTintColor: "#FFFFFF", headerBackVisible: false}}>
        <Stack.Screen name="Login" options={{title: "Welcome to Notcha!"}} component={LoginScreen}/>
        <Stack.Screen name="MainScreenNavigation" options={{title: "UserSpace"}} component={MainScreenNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

