import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function ItemContato(props){ 
    
    return(
        <View style={styles.container}>
            <Text style={styles.textContact}>Nome: {props.nome}</Text>
            <Text>Telefone: {props.phone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     
    container:{
        flex:1,
        height: 65,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        borderColor: '#B6B4B4',
        borderRadius: 10,
        margin: 10,
  
      },
      textContact:{
          fontSize: 18,
          fontWeight: 'bold'
      }
   
  });