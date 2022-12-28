import {Text, TouchableHighlight, StyleSheet, View } from "react-native";
import { MaterialColors } from "../MaterialColors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export function PrimaryButton(props) {

  let button_style;
  let text_style;

  if (props.darkTheme) {
    button_style = Styles.DtPrimaryButton;
    text_style = Styles.DtText;
  } else {
    button_style = Styles.WtPrimaryButton;
    text_style = Styles.WtText;
  }

  return(
    <TouchableHighlight 
      style={ [button_style, props.style] } 
      onPress={ props.onPress }
    >
        <Text style={ text_style }>{ props.title }</Text>    
    </TouchableHighlight>
  );
}

export function IconButton(props) {
  return(
    <TouchableHighlight 
      onLongPress={ props.onLongPress } 
      onPress={ props.onPress } 
      style={{
        backgroundColor: MaterialColors.Primary500, 
        justifyContent:"center", 
        marginBottom: 15, 
        borderRadius:10
      }}
    >
      <View style={{
        flexDirection: "row", 
        borderRadius:10
        }}
      >
        <MaterialCommunityIcons 
          name={ props.iconName } 
          color={ MaterialColors.SolidWhite } 
          size={ 45 } 
          style={{ alignSelf: "center" }}
        />
        <Text style={[
          Styles.WtText, 
          {
            fontSize: 25, 
            paddingLeft: 10, 
            fontWeight: "normal"
          }
          ]}
        >{ props.title }</Text>
      </View>
    </TouchableHighlight>
  );
}

const Styles = StyleSheet.create({
  
  WtPrimaryButton: {
    backgroundColor: MaterialColors.Primary500,
    height: 60,
    justifyContent: "center",
  },

  DtPrimaryButton: {
    backgroundColor: MaterialColors.Gray,
    height: 60,
    justifyContent: "center",
  },

  WtText: {
    color: MaterialColors.WhiteText,
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

  DtText: {
    color: MaterialColors.WhiteText,
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

});