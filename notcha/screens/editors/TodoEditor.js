import { useContext, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { AppContext } from "../../Context";
import { PrimaryButton } from "../../resources/components/MaterialComponents";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialColors } from "../../resources/MaterialColors";

function TodoCheckBox(props) {

  const darkTheme = props.darkTheme;
  const [isChecked, setIsChecked] = useState(props.checked);

  return (
    <View style={{ marginVertical: 10}}>
      <BouncyCheckbox
        size={ 40 }
        fillColor={ MaterialColors.Primary200 }
        unfillColor="#FFFFFF"
        text={ props.title }
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 5 }}
        textStyle={{ 
          fontSize: 25, 
          color: darkTheme ? MaterialColors.WhiteText : MaterialColors.BlackText
        }}
        onPress={
          () => setIsChecked(s => !s)
        }
        isChecked={ isChecked }
      />
    </View>
  )
}

export default function TodoEditor() {

  const darkTheme = useContext(AppContext).darkTheme;
  const [todoListName, setTodoListName] = useState("");
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  let view_theme = darkTheme ? Styles.DtBackgroundColor : Styles.WtBackgroundColor;

  return(
    <View style={ view_theme }>
      <View style={ [Styles.InputsView, view_theme] }>
        <TextInput
          label={ "Todo list name:" }
          style={{width: Dimensions.get("window").width}}
          onChange={ 
            (v) => setTodoListName(v)
          }
          value={ todoListName }
        />
      </View>
      <View style={ [Styles.InputsView, view_theme] }>
        <TextInput
          label={ "Item to add:" }
          style={{width: Dimensions.get("window").width}}
          onChangeText={ 
            (v) => {
              setItemName(v);
              console.log(itemName);
            }
          }
          value={ itemName }
        />
      </View>
        <PrimaryButton 
          darkTheme={ darkTheme }
          title="Create item"
          style={{ 
            height: 40,
            marginTop: 10 
          }}
          onPress={
            () => {
              let copy = [...items];
              copy.push(<TodoCheckBox checked={false} darkTheme={darkTheme} title={itemName} key={items.length+1}/>)
              console.log(copy);
              setItems(copy);
              console.log(items);
            }
          }
        />
      <ScrollView style={[{ 
        paddingTop: 10,
        paddingHorizontal: 15,
        flexGrow: 1,
        height: Dimensions.get("window").height-260,
        }]}
        contentOffset={{x:1, y:1}}
      >
        {items}
      </ScrollView>
      
      <View style={[{ height: Dimensions.get("window").height }, view_theme]}>
      </View>
    </View>
  );

}

const Styles = StyleSheet.create({
  
  InputsView: {
    paddingTop: 10,
  },

  WtBackgroundColor: {
    backgroundColor: MaterialColors.BackgroundWhite
  },

  DtBackgroundColor: {
    backgroundColor: MaterialColors.PrimaryBlack
  }
})