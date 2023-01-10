import React, { 
  useContext, 
  useState 
} from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  ToastAndroid,
  View,
} from "react-native"
import { AppContext } from "../Context";
import { MaterialColors } from "../resources/MaterialColors"

/*
  Neste arquivo é definida a página de "configurações" do usuário
*/

export default function UserSettings() {

  // Recebimento dos "contextos" de seção online, darktheme, e definição de estados para os componentes da
  // aplicação
  const onlineSession = useContext(AppContext).onlineSession;
  const { darkTheme, setDarkTheme } = useContext(AppContext);
  const [dtSwitchIsEnable, setDtSwitchIsEnable] = useState(darkTheme);

  // Verificação de qual tema deve ser usado
  let title_style = Styles.DtSectionTitle;
  let section_style = Styles.DtSection;
  let options_style = Styles.DtOptionText;

  return(
    <View style={{ 
      height: Dimensions.get("window").height,
      backgroundColor: darkTheme ? MaterialColors.PrimaryBlack : MaterialColors.BackgroundWhite 
      }}
    >
      <ScrollView>

        <View style={ section_style }>
          <Text style={ title_style }>Theming options</Text>
          <View style={ [section_style, { flexDirection: "row" }] }>
            <Text style={ options_style }>Enable dark theme:</Text>
            <Switch onValueChange={
                () => {
                  setDtSwitchIsEnable(v => !v); 
                  setDarkTheme(v => !v)
                }
              } 
              value={ dtSwitchIsEnable }
              thumbColor={ MaterialColors.SolidWhite }
            />
          </View>
        </View>

        <View style={ section_style }>
          <Text style={ title_style }>More Options</Text>
          <View style={ [section_style, { flexDirection: "row" }] }>
            <Text style={ options_style }>Fake 1:</Text>
            <Switch onValueChange={
                () => {
                  ToastAndroid.show("W.I.P", ToastAndroid.SHORT)
                }
              } 
              thumbColor={ MaterialColors.SolidWhite }
            />
          </View>
          <View style={ [section_style, { flexDirection: "row" }] }>
            <Text style={ options_style }>Fake 2:</Text>
            <Switch onValueChange={
                () => {
                  ToastAndroid.show("W.I.P", ToastAndroid.SHORT)
                }
              } 
              thumbColor={ MaterialColors.SolidWhite }
            />
          </View>
          <View style={ [section_style, { flexDirection: "row" }] }>
            <Text style={ options_style }>Fake 3:</Text>
            <Switch onValueChange={
                () => {
                  ToastAndroid.show("W.I.P", ToastAndroid.SHORT)
                }
              } 
              thumbColor={ MaterialColors.SolidWhite }
            />
          </View>
        </View>
        
        { onlineSession &&
          <View style={ section_style }>
            <Text style={ title_style }>Online only</Text>
            <View style={ [section_style, { flexDirection: "row" }] }>
              <Text style={ options_style }>Fake 1:</Text>
              <Switch onValueChange={
                  () => {
                    ToastAndroid.show("W.I.P", ToastAndroid.SHORT)
                  }
                } 
                thumbColor={ MaterialColors.SolidWhite }
              />
            </View>
          </View>
        }

      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  
  DtSection: {
    backgroundColor: MaterialColors.Primary500,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
  },

  DtSectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 5,
    color: MaterialColors.WhiteText,
  },

  DtOptionText: {
    fontSize: 20,
    color: MaterialColors.WhiteText,
    width: Dimensions.get("window").width - 100,
  },

});