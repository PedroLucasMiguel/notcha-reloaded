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
import { AnimatedFAB } from "react-native-paper";
import { AppContext } from "../Context";
import { IconButton } from "../resources/components/MaterialComponents";
import { MaterialColors } from "../resources/MaterialColors";

function generateFakeButtons(n, navigation) {
  let btns = []

  for(let i = 0; i < n; i++) {
    btns.push(
      <IconButton 
        title={"Fake " + (i+1)} 
        iconName="checkbox-marked" 
        onPress={() => navigation.navigate("TodoEditor")} 
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

  const darkTheme = useContext(AppContext).darkTheme;
  const [extendFab1, setExtendFab1] = useState(false);
  const [extendFab2, setExtendFab2] = useState(false);

  let view_style;
  let sview_style;
  let title_style;

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
        { generateFakeButtons(12, navigation) }
      </ScrollView>
      <AnimatedFAB
          icon="plus"
          label="Create a new note"
          extended={ extendFab1 }
          style={{ 
            position:"absolute", 
            top:Dimensions.get("window").height-200, 
            right: 5, 
            zIndex: 20
          }}
          onLongPress={
            () => setExtendFab1(s => !s)
          }
          onPress={
            () => navigation.navigate("TodoEditor")
          }
      />
      <AnimatedFAB
          icon="magnify"
          label="Search"
          extended={ extendFab2 }
          style={{
            position:"absolute", 
            top:Dimensions.get("window").height-280, 
            right: 5, 
            zIndex: 20,
          }}
          onLongPress={
            () => setExtendFab2(s => !s)
          }
          onPress={
            () => ToastAndroid.show("W.I.P", ToastAndroid.show)
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