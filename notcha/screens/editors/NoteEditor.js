import { useContext, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { AppContext } from "../../Context";
import { MaterialColors } from "../../resources/MaterialColors";

/*
  Neste arquivo é definida a página de edição/visualização de notas
*/

export default function NoteEditor({ route, navigation }) {

  // Recebimento de "informação fake" para preencher o componente
  let fakeData = undefined;

  if (route.params !== undefined)
    fakeData = route.params.fakeData;

  // Recebimento do "contexto" darktheme, e definição de estados para os componentes da aplicação
  const darkTheme = useContext(AppContext).darkTheme;
  const richText = useRef(null);
  const editorView = useRef(null);
  const [editorText, setEditorText] = useState((fakeData !== undefined) ? fakeData.content : "");
  const [noteName, setNoteName] = useState((fakeData !== undefined) ? fakeData.title : "")

  // Verificação de qual tema deve ser usado
  let view_theme = darkTheme ? Styles.DtBackgroundColor : Styles.WtBackgroundColor;

  return(
    <View style={ view_theme }>
      <View style={ [Styles.InputsView, view_theme] }>
        <TextInput
          label={ "Todo list name:" }
          style={{
            width: Dimensions.get("window").width-20, 
            alignSelf: "center",
          }}
          onChange={ 
            (v) => setNoteName(v)
          }
          value={ noteName }
        />
        <RichToolbar
          style={{
            width: Dimensions.get("window").width-20, 
            alignSelf: "center",
            marginTop: 10,
            backgroundColor: darkTheme ? MaterialColors.SecondaryBlack : "#e7e0ec",
          }}
          iconTint={ darkTheme ? MaterialColors.SolidWhite : MaterialColors.Primary200 }
          editor={ richText }
          actions={[ 
            actions.undo, 
            actions.redo,
            actions.setBold, 
            actions.setItalic, 
            actions.setUnderline, 
            actions.heading1, 
          ]}
          iconMap={{ 
            [actions.heading1]: ({ tintColor }) => (<Text style={ [{ 
              color: tintColor,
              fontSize: 22 ,
            }] }>H</Text>), 
          }}
        />
      </View>
      <ScrollView
        ref={ editorView }
        onContentSizeChange={ () => editorView.current.scrollToEnd({ animated: false })}
      >
        <RichEditor
          style={{ alignSelf: "center" }}
          width={ Dimensions.get("window").width-20}
          ref={ richText }
          initialHeight={ 300 }
          onChange={ 
            descriptionText => {
              setEditorText(descriptionText);
            }
          }
          initialContentHTML={ editorText }
          pasteAsPlainText={ true }
          initialFocus={ true }
        />
      </ScrollView>
      <View style={[{ height: Dimensions.get("window").height }, view_theme]}>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  
  InputsView: {
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 15
  },

  WtBackgroundColor: {
    backgroundColor: MaterialColors.BackgroundWhite
  },

  DtBackgroundColor: {
    backgroundColor: MaterialColors.PrimaryBlack
  }
})