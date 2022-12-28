import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./screens/LoginScreen";
import MainScreenNavigation from "./screens/MainScreenNavigation";
import { MaterialColors } from "./resources/MaterialColors";
import AppContextProvider from "./Context";
import TodoEditor from "./screens/editors/TodoEditor";

const Stack = createNativeStackNavigator();

export default function app() {

  return(
    <AppContextProvider>
      <PaperProvider>
        <StatusBar backgroundColor={ MaterialColors.PrimaryBlack }/>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerStyle: { backgroundColor: MaterialColors.Primary500 }, 
              headerTintColor: MaterialColors.WhiteText, headerBackVisible: false
          }}>
            <Stack.Screen 
              name="Login" 
              options={{ title: "Login" }} 
              component={ LoginScreen }
            />
            <Stack.Screen 
              name="MainScreenNavigation" 
              options={{ title: "Notcha!" }} 
              component={ MainScreenNavigation }
            />
            <Stack.Screen
              name="TodoEditor"
              options={{ 
                title: "Todo editor",
                headerBackVisible: true
              }}
              component={ TodoEditor }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppContextProvider>
  );
}

