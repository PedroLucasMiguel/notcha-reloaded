import { useContext } from "react";
import { 
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { AppContext } from "../Context";
import Separator from "../resources/components/Separator";
import { MaterialColors } from "../resources/MaterialColors";

/*
  Neste arquivo é definida a página de "sobre" da aplicação
*/

export default function AboutScreen() {

  // Recebimento do "contexto" de tema
  const darkTheme = useContext(AppContext).darkTheme;

  let subtitle_style;
  let text_style;
  let view_style;

  // Verificação de qual tema deve ser usado
  if (darkTheme) {
    subtitle_style = Styles.DtSubTtile;
    text_style = Styles.DtText;
    view_style = Styles.DtView;
  } else {
    subtitle_style = Styles.WtSubTtile;
    text_style = Styles.WtText;
    view_style = Styles.WtView;
  }

  return(
    <View style={[view_style, { height: Dimensions.get("window").height }]}>
      <View style={ view_style }>
        <Image 
          source={ require("../resources/images/Logo.png") } 
          style={ Styles.AppLogo }
        />
        <Text style={ subtitle_style }>Made with 💜 By:</Text>
        <Text style={ text_style }>Ana Ligia Mendes</Text>
        <Text style={ text_style }>Julia Tadei Oliveira</Text>
        <Text style={ text_style }>Pedro Lucas Miguel</Text>
      </View>
      <Separator darkTheme={ darkTheme } text="Contact" style={{ paddingHorizontal: 10 }}/>
      <View style={ view_style }>
        <Text style={ text_style }>Support: (email)</Text>
        <Text style={ text_style }>Phone: (phone)</Text>
      </View>
      <Separator darkTheme={ darkTheme } text="Third party" style={{ paddingHorizontal: 10 }}/>
      <View style={ view_style }>
        <Text style={ text_style }>react-native-rich-editor</Text>
        <Text style={ text_style }>react-native-bouncy-checkbox</Text>
        <Text style={ text_style }>react-native-paper</Text>
        <Text style={ text_style }>react-navigation</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({

  DtView: {
    paddingVertical: 10,
    backgroundColor: MaterialColors.PrimaryBlack,
  },

  WtView: {
    paddingVertical: 10,
    backgroundColor: MaterialColors.BackgroundWhite,
  },

  DtSubTtile: {
    alignSelf: "center",
    fontSize: 35,
    color: MaterialColors.WhiteText,
    paddingBottom: 10,
  },

  WtSubTtile: {
    alignSelf: "center",
    fontSize: 25,
    color: MaterialColors.BlackText,
    paddingBottom: 10,
  },

  DtText: {
    alignSelf: "center",
    fontSize: 20,
    color: MaterialColors.WhiteText,
  },

  WtText: {
    alignSelf: "center",
    fontSize: 20,
    color: MaterialColors.BlackText,
  },

  AppLogo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 10,
  },
  
});
