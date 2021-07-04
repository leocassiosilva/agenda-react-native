import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export function ItemContato(props){ 
    
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.textContact}>Nome: {props.nome}</Text>
            <Text>Telefone: {props.phone}</Text>

            <TouchableOpacity onPress={props.apagar} >
                <MaterialIcons name="delete" style={styles.deletarContato}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
     
    itemContainer:{
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
      flexWrap:'wrap'
  
      },
      textContact:{
          fontSize: 18,
          fontWeight: 'bold'
      },
      deletarContato:{
        fontSize:28,
        color:"black",        
      }
   
  });