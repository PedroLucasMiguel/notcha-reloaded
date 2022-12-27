import {Text, TouchableHighlight, StyleSheet } from "react-native";
import { MaterialColors } from "../MaterialColors";

export function PrimaryButton(props) {

  let button_style;
  let text_style;

  if (props.darktheme) {
    button_style = Styles.DtPrimaryButton;
    text_style = Styles.DtText;
  } else {
    button_style = Styles.WtPrimaryButton;
    text_style = Styles.WtText;
  }

  return(
    <TouchableHighlight style={[button_style, props.style]} onPress={props.onPress}>
        <Text style={text_style}>{props.title}</Text>    
    </TouchableHighlight>
  );
}

const Styles = StyleSheet.create({
  WtPrimaryButton: {
    backgroundColor: MaterialColors.Primary500,
    height: 40,
    justifyContent: "center",
  },

  DtPrimaryButton: {
    backgroundColor: MaterialColors.Gray,
    height: 40,
    justifyContent: "center",
  },

  WtPrimaryButton: {
    backgroundColor: MaterialColors.Primary500,
    height: 40,
    justifyContent: "center",
  },

  WtText: {
    color: MaterialColors.WhiteText,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },

  DtText: {
    color: MaterialColors.Primary200,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  }

});