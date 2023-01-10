import React, { 
  useContext, 
  useState 
} from "react";
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native"
import { FAB } from "react-native-paper";
import { AppContext } from "../Context";
import { ButtonOverBar, IconButton } from "../resources/components/MaterialComponents";
import { MaterialColors } from "../resources/MaterialColors";

/*
  Neste arquivo é definida a página de criação e listagem de "todos" do usuário
*/

// Função responsável por gerar botões "fake" para preencher espaço na aplicação
function generateFakeButtons(n, navigation) {
  let btns = []

  for(let i = 0; i < n; i++) {
    btns.push(
      <IconButton 
        title={ "Fake " + (i+1) }
        date={ ((i < 9) ? "0" : "") + (i+1) + "/01/2023" } 
        iconName="checkbox-marked" 
        onPress={ () => navigation.navigate("TodoEditor") } 
        onLongPress={
          () => Alert.alert(
            "Fake " + (i+1), 
            "Do you want to remove this todo list?", 
            [
              {
                text: "Yes", 
                onPress: () => ToastAndroid.show("W.I.P", ToastAndroid.SHORT)
              },
              { text: "No" }
            ]
          )
        }
      />
    )
  }

  return btns;
}

export default function UserTodos({ navigation }) {

  // Recebimento dos "contexto" de tema
  const darkTheme = useContext(AppContext).darkTheme;

  let view_style;
  let sview_style;
  let title_style;

  // Verificação de qual tema deve ser usado
  if (darkTheme) {
    view_style = Styles.DtView;
    sview_style = Styles.DtScrollView;
    title_style = Styles.DtTitle;
  } else {
    view_style = Styles.WtView;
    sview_style = Styles.WtScrollView;
    title_style = Styles.WtTitle;
  }

  return(
    <View style={ view_style }>
      <Text style={ title_style }>Your Todos</Text>
      <ScrollView 
        persistentScrollbar={ false } 
        style={[
          sview_style,
          { height: Dimensions.get("window").height-130 } 
        ]}
      >
        <IconButton 
          title="Compras" 
          date="01/01/2023"
          iconName="checkbox-marked" 
          onPress={
            () => navigation.navigate("TodoEditor", { 
              fakeData: {
                title: "Compras",
                items: {
                  Arroz: true,
                  Feijão: false,
                  Batata: true,
                  Macarrão: true,
                  Sabão: false
                }
              } 
            })
          } 
          onLongPress={
            () => Alert.alert(
              "Compras", 
              "Do you want to remove this todo list?", 
              [
                {
                  text: "Yes", 
                  onPress: () => ToastAndroid.show("W.I.P", ToastAndroid.SHORT)
                },
                { text: "No" }
              ]
            )
          } 
        />
        { generateFakeButtons(18, navigation) }
      </ScrollView>
      <ButtonOverBar onPress={() => navigation.navigate("TodoEditor")} darkTheme={darkTheme} />
      <FAB
          icon="magnify"
          style={{
            position:"absolute", 
            top: 10,
            right: 10, 
            zIndex: 20
          }}
          onPress={
            () => ToastAndroid.show("W.I.P", ToastAndroid.SHORT)
          }
      />
    </View>
  );
}

const Styles = StyleSheet.create({

  WtView: {
    backgroundColor: MaterialColors.BackgroundWhite,
    paddingTop: 10,
    paddingHorizontal: 20,
  },

  WtScrollView: {
    backgroundColor: MaterialColors.BackgroundWhite,
    marginTop: 15,
  },

  DtScrollView: {
    backgroundColor: MaterialColors.PrimaryBlack,
    marginTop: 10,
  },

  DtView: {
    backgroundColor: MaterialColors.PrimaryBlack,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  WtTitle: {
    fontWeight: "bold",
    fontSize: 35,
    alignSelf: "center",
    color: MaterialColors.BlackText,
  },

  DtTitle: {
    fontWeight: "bold",
    fontSize: 35,
    alignSelf: "center",
    color: MaterialColors.WhiteText,
  },
})