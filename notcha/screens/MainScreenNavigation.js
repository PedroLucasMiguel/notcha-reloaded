import React, { useContext } from "react";
import { Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UserNotes from "./UserNotesScreen";
import UserTodos from "./UserTodosScreen";
import UserSettings from "./UserSettingsScreen";
import { MaterialColors } from "../resources/MaterialColors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { AppContext } from "../Context";

/*
  Neste arquivo nós definimos como será a navegação do usuário após realizar o incio de sua seção
  (online ou não).

  Em relação a navegação temos:
  - "Todo" = página para criação e listagem de "todos";
  - "Notes" = página para a criação e listagem de "notas";
  - "Settings" = página de configuração dos usuário;
*/

const Tab = createBottomTabNavigator();

export default function MainScreenNavigation({navigation}) {

  // Recebimento dos "contestos" para aplicar o darktheme ou definir uma seção como online
  const darkTheme = useContext(AppContext).darkTheme;
  const onlineSession = useContext(AppContext).onlineSession; 

  // Verifica se o usuário está logado na seção "online" ou não
  if (onlineSession) {
    navigation.setOptions({
      title: "Notcha - " + "Furret",
      headerRight: () => (
        <Image source={require("../resources/images/pfp.jpg")} style={{width:50, height: 50, borderRadius: 50}} />
      )
    });
  } else {
    navigation.setOptions({ title: "Notcha - " + "Offline" });
  }

  return(
    <Tab.Navigator 
      screenOptions={{
        headerShown: false, 
        tabBarStyle: darkTheme ? Styles.DtTabBarStyle : Styles.WtTabBarStyle, 
        tabBarActiveTintColor: darkTheme ? MaterialColors.SolidWhite : MaterialColors.Primary500
      }}
    >
      <Tab.Screen 
        name="Notes" 
        component={ UserNotes } 
        options={{
          tabBarLabelStyle: { fontSize: 15 }, 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="notebook-edit" color={ color } size={ 28 }/>
          )
        }}
      />
      <Tab.Screen 
        name="Todo" 
        component={ UserTodos } 
        options={{
          tabBarLabelStyle: { fontSize: 15 }, 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="checkbox-marked" color={ color } size={ 28 }/>
          )
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={ UserSettings } 
        options={{
          tabBarLabelStyle: { fontSize: 15 }, 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={ color } size={ 28 }/>
          )
        }}
      />
    </Tab.Navigator>
  );
}

const Styles = StyleSheet.create({
  
  WtTabBarStyle: {
    backgroundColor: MaterialColors.SolidWhite,
    height: 60,
  },

  DtTabBarStyle: {
    backgroundColor: MaterialColors.SecondaryBlack,
    height: 60,
  }
});