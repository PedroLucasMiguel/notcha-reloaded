import React, { createContext, useContext } from 'react';
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
import { MaterialColors } from './resources/MaterialColors';

const Stack = createNativeStackNavigator();
export const DarkThemeContext = createContext(true);

export default function app() {

  const darktheme = useContext(DarkThemeContext);

  return(
    <DarkThemeContext.Provider value={true}>
      <StatusBar backgroundColor={darktheme ? MaterialColors.PrimaryBlack : MaterialColors.Primary200}/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: darktheme ? MaterialColors.SecondaryBlack : MaterialColors.Primary500}, headerTintColor: darktheme ? MaterialColors.WhiteText : MaterialColors.WhiteText, headerBackVisible: false}}>
          <Stack.Screen name="Login" options={{title: "Login"}} component={LoginScreen}/>
          <Stack.Screen name="MainScreenNavigation" options={{title: "W.I.P"}} component={MainScreenNavigation}/>
        </Stack.Navigator>
      </NavigationContainer>
    </DarkThemeContext.Provider>
  );
}

