import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export function Form(){
    const [height, setHeight] = useState('');
    const [weigth, setWeigth] = useState('');
    const [result, setResult] = useState('');

    function imcCalculator()
    {
        let totalImc = (weigth/(height*height)).toFixed(2)

        setResult(totalImc);
    }

    function validatorImc()
    {
        if(weigth !='' && height !='')
        {
            imcCalculator()
            setHeight('')
            setWeigth('')
        }
    }
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>
                <TextInput
                placeholder="Ex. 1.85"
                value={height}
                style={styles.formInput}
                />

                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput
                placeholder="Ex. 69.5"
                value={weigth}
                style={styles.formInput}
                />

                <Pressable style={styles.formButton} onPress={()=> validatorImc}>
                    
                    <Text style={styles.formButtonText}>Calcular</Text>
                </Pressable>

                <Text style={styles.formResult}>{result}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop: 30,
        padding: 10
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20
    },
    formInput:{
        width:"100%",
        height:"100%",
        borderRadius:30,
        backgroundColor:"#f6f6f6",
        margin:12,
        paddingLeft:10,
    },
    formButton:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30
    },
    formButtonText:{
        fontSize:20,
        color:"#fff"
    },
    formResult:{
        flex:1,
        marginTop:15,
        paddingTop:60,
        borderRadius:50,
        alignItems:"center",
        width:"100%"
    }
})