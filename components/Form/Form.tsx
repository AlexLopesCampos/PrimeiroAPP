import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

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
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput
                placeholder="Ex. 1.85"
                value={height}
                />

                <Text>Peso:</Text>
                <TextInput
                placeholder="Ex. 69.5"
                value={weigth}
                />

                <Pressable onPress={()=> validatorImc}>
                    <Text>Calcular</Text>
                </Pressable>

                <Text>{result}</Text>
            </View>
        </View>
    )
}