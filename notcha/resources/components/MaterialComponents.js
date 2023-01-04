import {Text, TouchableHighlight, StyleSheet, View, Dimensions } from "react-native";
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
            width: 160,
            fontSize: 25, 
            paddingLeft: 10, 
            fontWeight: "normal",
            alignSelf:"center",
            textAlign: "left",
          }
          ]}
        >{ props.title }</Text>
        <Text style={[
          Styles.WtText, 
          {
            fontSize: 20, 
            paddingLeft: 20, 
            fontWeight: "normal"
          }
          ]}
        >{ props.date }</Text>
      </View>
    </TouchableHighlight>
  );
}

export function ButtonOverBar(props) {
  let button_style;
  let text_color;

  if (props.darkTheme) {
    button_style = Styles.DtBOB;
    text_color = MaterialColors.WhiteText;
  } else {
    button_style = Styles.WtBOB;
    text_color = MaterialColors.Primary500;
  }

  return (
    <View style={{
      position: "absolute",
      left: Dimensions.get("screen").width/3.35, 
      top: Dimensions.get("window").height-170, 
      zIndex: 10
      }}
    >
      <TouchableHighlight
        onPress={props.onPress}
        style={[button_style, {
          width: 160,
          height: 300,
          borderRadius: 90
        }]}>
          <View style={{
            marginLeft: 70, 
            marginTop: 5
            }}
          >
            <Text style={{
              color: text_color, 
              fontSize: 35
              }}
            >+</Text>
          </View>
        </TouchableHighlight>
    </View>
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

  WtBOB: {
    backgroundColor: MaterialColors.SolidWhite,
    borderColor: MaterialColors.LightGray,
    borderWidth: 1,
  },

  DtBOB: {
    backgroundColor: MaterialColors.SecondaryBlack,
    borderColor: MaterialColors.LightGray,
    borderWidth: 1,
  },

});