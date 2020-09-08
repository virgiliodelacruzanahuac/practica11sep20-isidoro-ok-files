import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button  } from 'react-native';

const Dolaresapesos = ({ route,navigation }) => {
  const { f1 } = route.params;

    const { nombre } = route.params;
    return(
    <View>
    <Text>Dolaresapesos</Text>

     <Text>{f1} </Text>
      <Text>{nombre} </Text>
   </View>
  );
  
}
export default Dolaresapesos;