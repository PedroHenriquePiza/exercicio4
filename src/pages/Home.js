import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";

export default function Home(){

    let [valor1, setValor1] = useState();
    
    let [total, setTotal] = useState();

    function CalcularTotal(){
        
        if(valor1 & 1){
            alert("Impar");
        } else {
            alert("Par");
        }
    }
    

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Impar ou par</Text>
             <Text style={styles.texto}>Digite um numero</Text>
            <TextInput onChangeText={setValor1} style={styles.campo} placeholder="0"/>


            <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3B3936',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titulo:{
        fontSize:25,
        color:'#FFF',
        fontWeight:'bold',
        marginBottom:40
    },
    campo:{
        backgroundColor:'#B2BEBF',
        fontSize:18,
        padding:8,
        marginTop:10,
        marginBottom:10,
        width:300,
        borderRadius:10
    },
    botao:{
        backgroundColor:'#BD2A2E',
        alignItems:'center',
        padding:15,
        borderRadius:7,
        marginTop:20,
        width:250
    },
    texto:{
        fontSize:15,
        color:'#FFF',
        marginBottom:10
    },
    botaoTexto:{
        color:'#FFF',
        fontSize:17,
        fontSize:'700',
    }
});