import React from 'react';

import { ActivityIndicator } from "react-native";

export function Loading (){
    return <ActivityIndicator className="flex-1 bg-green-500 items-center justify-center text-orange-500 " /> 
}

{/*
Este é um componente de carregamento (Loading) de um aplicativo React Native. Ele retorna um ActivityIndicator que é exibido quando o aplicativo está carregando algo. O ActivityIndicator é centralizado na tela e tem uma cor de texto laranja sobre um fundo verde.
*/}