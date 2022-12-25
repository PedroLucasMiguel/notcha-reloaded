import { Button, FAB } from '@react-native-material/core'
import React from 'react'
import { 
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image, 
    //Button
} from 'react-native'
import Separator from '../resources/components/Separator'

export default function LoginScreen({navigation}) {
  return (
    <ScrollView>
      <View style={Styles.LoginView}>
        <Text style={Styles.LoginTitle}> Welcome to Notcha! </Text>
        <Image source={require("../resources/images/temp_logo.png")} style={Styles.AppLogo}/>
        <Button title="Login with Google" onPress={() => navigation.navigate("MainScreenNavigation")} style={Styles.Buttons} titleStyle={Styles.ButtonsText}/>
        <Separator padding={10} text="or"/>
        <Button title="Use Offline" onPress={() => navigation.navigate("MainScreenNavigation")} style={Styles.Buttons} titleStyle={Styles.ButtonsText}/>
      </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  LoginView: {
    paddingTop: 40,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },

  LoginTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
  },

  AppLogo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  Buttons: {
    marginTop: 10,
    textAlignVertical: 'center',
  },

  ButtonsText: {
    fontSize: 15, 
    fontWeight: 'bold'
  },

})