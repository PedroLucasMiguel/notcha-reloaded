import { useContext, useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, ToastAndroid, TouchableHighlight, View } from "react-native";
import { TextInput } from "react-native-paper";
import { AppContext } from "../../Context";
import { PrimaryButton } from "../../resources/components/MaterialComponents";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialColors } from "../../resources/MaterialColors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/*
  Neste arquivo é definida a página de edição/visualização de notas
*/

// Função que retorna o componente de "checkbox" da lista de "todos"
function TodoCheckBox(props) {

  // Verifica qual tema deve ser aplicado
  const darkTheme = props.darkTheme;
  const [isChecked, setIsChecked] = useState(props.checked);

  return (
    <View style={{ 
      marginVertical: 10, 
      flexDirection: "row", 
      }}
    >
      <View style={{ width: Dimensions.get("window").width/1.2 }}>
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
      <TouchableHighlight onPress={
        () => {
          ToastAndroid.show("W.I.P", ToastAndroid.SHORT);
        }
      }>
        <MaterialCommunityIcons name="close-thick" color={ darkTheme ? MaterialColors.SolidWhite : MaterialColors.PrimaryBlack } size={ 28 }/>
      </TouchableHighlight>
    </View>
  )
}

export default function TodoEditor({ route, navigation }) {

  // Recebimento de "informação fake" para preencher o componente
  let fakeData = undefined;

  if (route.params !== undefined)
    fakeData = route.params.fakeData;

     // Recebimento do "contexto" darktheme, e definição de estados para os componentes da aplicação
  const darkTheme = useContext(AppContext).darkTheme;
  const [todoListName, setTodoListName] = useState((fakeData !== undefined) ? fakeData.title : "");
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  // Caso exista "fakeData", preenche a tela com essa informação
  useEffect(() => {
    console.log(fakeData)
    if (fakeData !== undefined) {
      let temp = [];
      for (const key in fakeData.items) {
        temp.push(<TodoCheckBox 
          checked={ fakeData.items[key] } 
          darkTheme={ darkTheme } 
          title={ key } 
          key={ temp.length + 1 }
        />)
      }
      setItems(temp);
    }
  }, [])

  // Verificação de qual tema deve ser usado
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