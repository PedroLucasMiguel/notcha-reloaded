import React, { useContext } from 'react'
import { 
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image, 
    Button
} from 'react-native'
import Separator from '../resources/components/Separator'
import { PrimaryButton } from '../resources/components/MaterialComponents'
import { DarkThemeContext } from '../App'
import { MaterialColors } from '../resources/MaterialColors'

export default function LoginScreen({navigation}) {

  const darktheme = useContext(DarkThemeContext);

  let view_style;
  let title_style;

  if (darktheme) {
    view_style = Styles.DtLoginView;
    title_style = Styles.DtLoginTitle;
  } else {
    view_style = Styles.WtLoginView;
    title_style = Styles.WtLoginTitle;
  }

  return (
    <ScrollView style={darktheme ? {backgroundColor: MaterialColors.PrimaryBlack} : {}}>
      <View style={view_style}>
        <Text style={title_style}> Welcome to Notcha! </Text>
        <Image source={require("../resources/images/temp_logo.png")} style={Styles.AppLogo}/>
        <PrimaryButton darktheme={darktheme} title="Login with Google" style={Styles.Buttons} onPress={() => navigation.navigate("MainScreenNavigation")}/>
        <Separator darktheme={darktheme} text="or"/>
        <PrimaryButton darktheme={darktheme} title="Use Offline" style={Styles.Buttons} onPress={() => navigation.navigate("MainScreenNavigation")}/>
      </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  WtLoginView: {
    paddingTop: 40,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  DtLoginView: {
    paddingTop: 40,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: MaterialColors.PrimaryBlack,
  },

  WtLoginTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: MaterialColors.BlackText,
    alignSelf: "center",
  },

  DtLoginTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: MaterialColors.Primary200,
    alignSelf: "center",
  },

  AppLogo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 40,
  },

  Buttons: {
    height: 60,
  },
})