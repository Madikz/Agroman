import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import Navigate from './navigate';
import System from './system';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Movies from './components/Movies';
import Sms from './components/Sms';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Pressable, Button} from 'react-native';
const fontWeights = [
  "normal",
  "bold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
];






const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Agroman'>
        <Stack.Screen name="Agroman" component={Home} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Sms" component={Sms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth:1,
    borderColor:'#00ff00',
    color:'black',
    borderRadius:5,
    padding:20,
    alignItems:'center',
    textAlign:'center',
    fontSize:18,
    width:250,
  },
  view: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  button: {
    backgroundColor:'#00ff00',
    width:250,
    borderWidth:2,
    borderColor:'#00ff00',
    marginTop:20,
    padding:10,
  },
  text: {
    fontSize:18,
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
  },
  texts: {
    fontSize:18,
    textAlign:'center',
    color:'black',
    fontWeight:'bold',
    marginTop:20,
  },
});
