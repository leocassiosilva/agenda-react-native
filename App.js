import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MyInput } from './src/componentes/MyInnput';


export default function App() {

  const[user, setUser] = useState('');
  const[phone, setPhone] = useState(''); 
  const[contatos, setContatos] = useState([]);

  function salvarContato(){
    console.log("Seja Bem Vindo!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoHeader}>Agenda Telefonica - DDM</Text>
      </View>

      <View style={styles.conteudo}>
        <Text>Boa Noite!</Text>
        <TouchableOpacity onPress={salvarContato}>
          <Text>Ola</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contato}>
        <Text style={styles.textoContato}>Lista de Contatos</Text>
      </View>
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
    fontFamily:'Roboto',
    fontWeight:'bold'
  },
  conteudo:{
    width: '100%',
    height:212
  },
  contato:{
    width:'100%',
    height:7,
    backgroundColor:'#C4C4C4'
  }, 
  textoContato:{
    fontSize:25,
    textAlign:'center',
    fontWeight:'bold',
    
  }
});
