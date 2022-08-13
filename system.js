import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image} from 'react-native';



export default function System() {
    const [number, SetNumber] = useState('');
  const [submitted, SetSubmitted] = useState(false);
const onPressHandler = () => {
 if (number.length > 8) {
  SetSubmitted(!submitted); 
} else {
  alert('Ошибка! Пожалуйста введите нормально', [{text:'OK'}])
}
}
    return (
        <View style={styles.view}>
            <Image source={require('../Agroman/assets/large_agroshoppe.png')}/>
            <Text style={styles.sign}>Войти в систему</Text>
            <TextInput placeholder='+7 (777) 77 77' keyboardType='numeric' onChangeText={(value) => SetNumber(value)} style={styles.input}/>
            <TextInput placeholder='Введите пароль' keyboardType='numeric' onChangeText={(value) => SetNumber(value)} style={styles.input}/>
            <TouchableOpacity onPress={onPressHandler} style={styles.button}><Text style={styles.text}>
          {submitted ? 'Clear' : 'Войти'}
          </Text>
      </TouchableOpacity>
      {submitted ?  
      <Text style = {styles.texts}>
      You are registered as {number}
      </Text>
      :
      null
    }
        </View>
    )
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
      marginTop:10,
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
    sign: {
        fontSize:18,
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        marginTop:20,
    }
  });