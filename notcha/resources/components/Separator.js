// From: https://stackoverflow.com/questions/43380260/draw-horizontal-rule-in-react-native
import React, { useContext, useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AppContext } from '../../Context';

export default function Separator(props) {
  return(
    <View style={{
        flexDirection: 'row', 
        alignItems: 'center',
        paddingTop: props.padding,
        paddingBottom: props.padding,
      }}
    >
      <View style={Styles.wt_line} />
      <View>
        <Text style={Styles.wt_text}>
          {props.text}
        </Text>
      </View>
      <View style={Styles.wt_line} />
    </View>
  );
}

const Styles = StyleSheet.create({
  wt_text: {
    width: 60,
    fontSize: 20, 
    textAlign: 'center',
    color: '#000000',
  },

  wt_line: {
    flex: 1, 
    height: 1, 
    backgroundColor: '#000000'
  },
  
  dt_line: {
    flex: 1, 
    height: 1, 
    backgroundColor: '#FFFFFF'
  },

  dt_text: {
    width: 60,
    fontSize: 20, 
    textAlign: 'center',
    color: '#FFFFFF',
  },
});