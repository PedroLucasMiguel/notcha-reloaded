import React, { useContext, useState } from "react";
import {
  Switch,
  Text,
  View,
} from "react-native"
import { AppContext } from "../Context";

export default function UserSettings() {

  const { darkTheme, setDarkTheme } = useContext(AppContext);
  const [dtSwitchIsEnable, setDtSwitchIsEnable] = useState(darkTheme);

  return(
    <View>
      <Text>Hello From settings</Text>
      <Switch onValueChange={() => {setDtSwitchIsEnable(v => !v); setDarkTheme(v => !v)}} value={dtSwitchIsEnable}/>
      <Text>{dtSwitchIsEnable}</Text>
    </View>
  );
}