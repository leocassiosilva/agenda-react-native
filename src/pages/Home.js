import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , FlatList, ScrollView, Alert, Keyboard} from 'react-native';

import { MyInput } from '../componentes/MyInput';
import { ItemContato } from  '../componentes/ItemContato';
import { MaterialIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home(){

    const keyAsyncStorage = "@agenda2:contatos";

    const[user, setUser] = useState('');
    const[phone, setPhone] = useState(''); 
    const[contatos, setContatos] = useState([]);
  
  
    async function salvarContato(){
        const data = {
          id: String (new Date().getTime()), 
          name: user,
          phone:phone
        }
        
        const vetorData = [...contatos, data]; 

        try {
          await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetorData)); 
        }catch(error){
          Alert.alert("Erro  na gravação do contato");
        }

        Keyboard.dismiss();
        setUser("");
        setPhone("");
        loadData(); 
    }
  
    async function deletarContato(id){
      const newData = contatos.filter( item => item.id != id );
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( newData ));
      
        setContatos(newData); 
      
    }

    async function loadData(){
      try{
          const retorno = await AsyncStorage.getItem(  keyAsyncStorage  );   
          const teste = JSON.parse( retorno )
          console.log( teste );
          setContatos( teste || [] );
      }catch(error){
          Alert.alert("Erro na leitura dos dados");
      }
    }

    useEffect( ()=>{
      loadData();      
    } , []);

    


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
  