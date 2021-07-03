import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export function MyInput(props){
    return(
        <View style={style.viewInput}>
            <TextInput placeholder={props.textInput} 
            placeholderTextColor="#555" 
            onChangeText={props.onChangeText}
            {...props}
            style={StyleSheet.input}/>
        </View>
    )
}