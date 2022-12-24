import { Button } from '@react-native-material/core'
import React from 'react'
import { 
    ScrollView,
    StyleSheet,
    Text,
    View, 
    //Button
} from 'react-native'

export default function LoginScreen({navigation}) {
  return (
    <ScrollView>
      <View style={Styles.LoginView}>
        <Text>Logo Here</Text>
        <Button title="Login with google" onPress={() => navigation.navigate("MainScreenNavigation")}/>
        <Button title="Use Offline" onPress={() => navigation.navigate("MainScreenNavigation")}/>
      </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  LoginView: {
    paddingTop: 20,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
})