import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , FlatList, ScrollView} from 'react-native';
import { MyInput } from '../componentes/MyInput';
import { ItemContato } from  '../componentes/ItemContato';
import { MaterialIcons } from '@expo/vector-icons'; 

export function Home(){

    const[user, setUser] = useState('');
    const[phone, setPhone] = useState(''); 
    const[contatos, setContatos] = useState([]);
  
  
    function salvarContato(){
        const data = {
          id: String (new Date().getTime()), 
          name: user,
          phone:phone
        }
        console.log("Seja Bem Vindo!");
        console.log(data)
        setContatos(oldValue => [...oldValue,data]); //Pega o valor antigo e o novo valor e vali colocando no vetor
        setUser(""); // limpar os campos 
        setPhone(""); // limpar os campos 
    }
  
    function deletarContato(id){
      setContatos(contatos.filter(item => item.id != id))
    }


    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textoHeader}>Agenda Telefonica - DDM</Text>
        </View>
  
        <View style={styles.conteudo}>
          <View style={styles.formContainer}>
            <MyInput iconName="user" textInput="Informe seu nome" value={user} onChangeText={setUser} />
            <MyInput iconName="phone" textInput="Celular" value={phone} onChangeText={setPhone} keyboardType="numeric"/>
          </View>
          <TouchableOpacity style={styles.button} onPress={salvarContato} >
            <Text style={styles.textoButton}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        
        <View  style={styles.lista}></View>
  
          <ScrollView style={styles.contato}>
            <Text style={styles.textoTituloContato}>Lista de Contatos</Text>
    
            <FlatList data={contatos}
              renderItem={ ({item}) =>  (
                <ItemContato nome={ item.name } phone={item.phone} apagar={ () => deletarContato (item.id)}/>
            ) }
            />
          </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingVertical: 40,
    },
    header:{
      height:35,
      width: '100%',
      backgroundColor: '#613EEA',
      alignItems:'center',
      justifyContent:'center',
    },
    textoHeader:{
      fontSize:20,
      color:'#FFFFFF',
      fontWeight:'bold'
    },
    conteudo:{
      width: '100%',
      height:252, 
      justifyContent:'space-evenly',
      alignItems:'center'
    },
    formContainer:{
      width:'86%',
      alignItems:'center',
      justifyContent:'center'
    },
  
    button:{
      width:241,
      height:45,
      backgroundColor:'#613EEA',
      borderRadius:7,
      alignItems:'center',
      justifyContent:'center'
    },
  
    textoButton:{
      color:'#FFFFFF',
      fontWeight:'bold',
      fontSize:17
    },
  
    lista:{
      width:'100%',
      height:7,
      backgroundColor:'#C4C4C4',
      marginTop:10
    }, 
    contato:{
      width: "90%",
    }, 
    textoTituloContato:{
      fontSize:25,
      textAlign:'center',
      fontWeight:'bold',
      marginTop:40
    }
  });
  