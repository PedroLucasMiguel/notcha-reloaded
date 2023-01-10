// From: https://stackoverflow.com/questions/43380260/draw-horizontal-rule-in-react-native
import React, { useContext, useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { MaterialColors } from "../MaterialColors";

/*
  Neste arquivo sé definido um componente "Separator" que funciona como um separador cosmético.

  A seguir é apresentado um exemplo de como ele se apresenta na aplicação:
    ---------- Exemplo -----------

*/

export default function Separator(props) {

  let line_style;
  let text_style;

  // Definição do tema
  if(props.darkTheme) {
    line_style = Styles.DtLine;
    text_style = Styles.DtText;
  } else {
    line_style = Styles.WtLine;
    text_style = Styles.WtText;
  }

  return(
    <View style={[
      { 
        flexDirection: "row", 
        alignItems: "center", 
        paddingTop: 10, 
        paddingBottom: 10,
      }, 
      props.style
      ]}
    >
      <View style={ line_style }/>
      <View>
        <Text style={ text_style }>
          { props.text }
        </Text>
      </View>
      <View style={ line_style }/>
    </View>
  );
}

const Styles = StyleSheet.create({
  
  WtText: {
    width: 80,
    fontSize: 20, 
    textAlign: "center",
    color: MaterialColors.SecondaryBlack,
  },

  WtLine: {
    flex: 1, 
    height: 1, 
    backgroundColor: MaterialColors.SecondaryBlack,
  },
  
  DtLine: {
    flex: 1, 
    height: 1, 
    backgroundColor: MaterialColors.SolidWhite,
  },

  DtText: {
    width: 80,
    fontSize: 20, 
    textAlign: "center",
    color: MaterialColors.WhiteText,
  },
});