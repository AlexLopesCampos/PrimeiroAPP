import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export function Triângulo(){
    const [Lado, setLado] = useState('');
    const [Area, setArea] = useState('');
    function AreaTriangulo()
    {
        if(Lado !== undefined){
            let Result = Math.pow(Lado, 2) * Math.sqrt(3)/4;

            setArea(Result)
            setLado('')
        }

    }
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Lados:</Text>
                <TextInput
                    onChangeText={setLado}
                    inputMode="numeric"
                    placeholder="Ex. 10"
                    value={Lado}
                    style={styles.formInput}
                />
                <Pressable
                    onPress={AreaTriangulo}
                    style={styles.formButton} 
                >
                    <Text style={styles.formButtonText}>Clacular</Text>
                </Pressable>

                <Text>{Area}</Text>
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