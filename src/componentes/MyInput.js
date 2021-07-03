import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export function MyInput(props){ 
    
    return(
        <View style={styles.contanerInput}>
            <AntDesign name={props.iconName} size={24} color="black"  />
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

    contanerInput:{
        margin:5,
        flexDirection:'row',
        alignItems:'center'
    },
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