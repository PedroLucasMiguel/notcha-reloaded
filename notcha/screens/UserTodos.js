import React, { useContext, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { AnimatedFAB, FAB, Portal } from "react-native-paper";
import { AppContext } from "../Context";
import { Fab, IconButton, PrimaryButton } from "../resources/components/MaterialComponents";
import Separator from "../resources/components/Separator";
import { MaterialColors } from "../resources/MaterialColors";

export default function UserNotes() {

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
    <View style={view_style}>
      <Text style={title_style}>Your Todos</Text>
      <ScrollView persistentScrollbar={false} style={[sview_style, {height: Dimensions.get("window").height}]}>
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
        <IconButton title="Teste" iconName="checkbox-marked" onPress={() => console.log("Press")} onLongPress={() => console.log("Long Pres")} />
      </ScrollView>
      <AnimatedFAB
          icon="plus"
          label="Create a new note"
          extended={extendFab1}
          style={{position:"absolute", top:Dimensions.get("window").height-200, right: 5, zIndex: 20}}
          onLongPress={() => setExtendFab1(s => !s)}
          onPress={() => console.log("Do Stuff")}
      />
      <AnimatedFAB
          icon="magnify"
          label="Search"
          extended={extendFab2}
          style={{position:"absolute", top:Dimensions.get("window").height-280, right: 5, zIndex: 20}}
          onLongPress={() => setExtendFab2(s => !s)}
          onPress={() => console.log("Do Stuff")}
      />
    </View>
  );
}

const Styles = StyleSheet.create({

  WtView: {
    backgroundColor: MaterialColors.BackgroundWhite,
    paddingTop: 10,
    paddingHorizontal: 10,
    flexGrow: 1,
  },

  WtScrollView: {
    backgroundColor: MaterialColors.BackgroundWhite,
    marginTop: 10,
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