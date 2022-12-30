import React, { 
  useContext, 
  useState 
} from "react"
import { 
    StyleSheet,
    Text,
    View,
    Image, 
    Dimensions
} from "react-native"
import Separator from "../resources/components/Separator"
import { PrimaryButton } from "../resources/components/MaterialComponents"
import { MaterialColors } from "../resources/MaterialColors"
import { AppContext } from "../Context"
import { AnimatedFAB } from "react-native-paper"

export default function LoginScreen({navigation}) {

  const darkTheme = useContext(AppContext).darkTheme;
  const setOnlineSession = useContext(AppContext).setOnlineSession;
  const [fabExpand, setFabExpand] = useState(false);

  let view_style;
  let title_style;

  if (darkTheme) {
    view_style = Styles.DtLoginView;
    title_style = Styles.DtLoginTitle;
  } else {
    view_style = Styles.WtLoginView;
    title_style = Styles.WtLoginTitle;
  }

  return (
    <View style={ view_style }>
      <Text style={ title_style }> Welcome to Notcha! </Text>
      <Image 
        source={ require("../resources/images/temp_logo.png") } 
        style={ Styles.AppLogo }
      />
      <PrimaryButton 
        darkTheme={ darkTheme } 
        title="Login with Google" 
        style={ Styles.Buttons } 
        onPress={
          () => {
            setOnlineSession(true);
            navigation.navigate("MainScreenNavigation");
          }
        }
      />
      <Separator 
        darkTheme={ darkTheme } 
        text="or"
      />
      <PrimaryButton 
        darkTheme={ darkTheme } 
        title="Use Offline" 
        style={ Styles.Buttons } 
        onPress={
          () => {
            setOnlineSession(false);
            navigation.navigate("MainScreenNavigation");
          }
        }
      />
      <AnimatedFAB
          icon="information-outline"
          label="About this app"
          extended={ fabExpand }
          style={{ 
            position:"absolute", 
            top:Dimensions.get("window").height-160, 
            right: 15, 
            zIndex: 20
          }}
          onPress={
            () => navigation.navigate("AboutScreen")
          }
          onLongPress={
            () => setFabExpand(s => !s)
          }
      />
    </View>
  );
}

const Styles = StyleSheet.create({

  WtLoginView: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    height: Dimensions.get("window").height,
    backgroundColor: MaterialColors.BackgroundWhite,
  },

  DtLoginView: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    height: Dimensions.get("window").height,
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
    color: MaterialColors.WhiteText,
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