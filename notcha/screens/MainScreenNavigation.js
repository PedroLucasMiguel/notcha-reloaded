import React, { useContext } from "react";
import { Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UserNotes from "./UserNotes";
import UserTodos from "./UserTodos";
import UserSettings from "./UserSettings";
import { MaterialColors } from "../resources/MaterialColors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { AppContext } from "../Context";

const Tab = createBottomTabNavigator();

export default function MainScreenNavigation({navigation}) {

  const darkTheme = useContext(AppContext).darkTheme;
  const onlineSession = useContext(AppContext).onlineSession; 

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