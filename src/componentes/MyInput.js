import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export function MyInput(props){ 
    
    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder={props.textInput}
                placeholderTextColor="#555"
                {...props}
                />
        </View>
    )
}

const styles = StyleSheet.create({
      input:{
      height:45,
      width: 261,
      borderWidth:1,
      borderColor:'#222',
      margin:13,
      fontSize:20,
      padding:5,
      borderRadius:6
    }, 
   
  });