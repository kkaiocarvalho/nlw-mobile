import { colors } from "@/styles/colors";
import React, { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";

function Input({children}: {children: ReactNode }){
    return(
        <View className="w-full h-14 flex-row items-center gap-3 p-3 border border-green-400 rounded-lg">
            {children}
        </View>
    )
}

function Field({ ...rest }: TextInputProps){
    return (
    <TextInput 
        className="flex-1  text-white text-base font-regular "
        placeholderTextColor={colors.gray[200]}
        {... rest}
    />
)
}

Input.Field = Field

export { Input }

{/*
Este é um componente de entrada (Input) de um aplicativo React Native. Ele é composto por uma View que pode conter qualquer número de filhos (children). O componente Field é um campo de entrada (TextInput) que recebe todas as propriedades de TextInputProps. Ele é adicionado como uma subpropriedade do componente Input. Isso permite que você use Input.Field para criar um campo de entrada dentro do componente Input. As cores são importadas de um arquivo de estilos separado.
*/}