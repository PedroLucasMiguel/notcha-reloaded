import React from "react";
import { Text } from "@react-native-material/core";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserNotes from "./UserNotes";
import UserTodos from "./UserTodos";
import UserSettings from "./UserSettings";

const Tab = createMaterialBottomTabNavigator();

export default function MainScreenNavigation() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Notes" component={UserNotes} options={{tabBarIcon: ({ color }) => ((<MaterialCommunityIcons name="notebook-edit" color={color} size={32}/>))}}/>
      <Tab.Screen name="Todo" component={UserTodos} options={{tabBarIcon: ({ color }) => ((<MaterialCommunityIcons name="checkbox-marked" color={color} size={32}/>))}}/>
      <Tab.Screen name="Settings" component={UserSettings} options={{tabBarIcon: ({ color }) => ((<MaterialCommunityIcons name="cog" color={color} size={32}/>))}}/>
    </Tab.Navigator>
  );
}